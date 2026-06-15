import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const BASE = "https://cieden-assistant.vercel.app";
const OUT_DIR = path.join(process.cwd(), "public", "assets", "CaseChatbot");

const dismissOverlays = async (page) => {
  for (const selector of [
    'button:has-text("Accept")',
    'button:has-text("Got it")',
    'button:has-text("Close")',
    '[aria-label="Close"]',
  ]) {
    const button = page.locator(selector).first();
    if (await button.isVisible({ timeout: 800 }).catch(() => false)) {
      await button.click({ timeout: 2000 }).catch(() => undefined);
      await page.waitForTimeout(400);
    }
  }
};

const prepareChat = async (page) => {
  await page.goto(`${BASE}/voice-chat`, { waitUntil: "networkidle", timeout: 90_000 });
  await dismissOverlays(page);
  await page.waitForTimeout(2500);

  const continueByText = page.getByRole("button", { name: /continue by text/i });
  if (await continueByText.isVisible({ timeout: 3000 }).catch(() => false)) {
    await continueByText.click();
    await page.waitForTimeout(2200);
    return;
  }

  const cancelVoice = page.getByRole("button", { name: /^cancel$/i });
  if (await cancelVoice.isVisible({ timeout: 1500 }).catch(() => false)) {
    await cancelVoice.click();
    await page.waitForTimeout(1200);
  }
};

const shot = async (page, filename) => {
  const filePath = path.join(OUT_DIR, filename);
  await page.screenshot({ path: filePath, fullPage: false });
  console.log(`Saved ${filename}`);
};

const clickPrompt = async (page, pattern) => {
  const button = page.getByRole("button", { name: pattern }).first();
  if (await button.isVisible({ timeout: 2500 }).catch(() => false)) {
    await button.click();
    await page.waitForTimeout(4500);
    return true;
  }
  return false;
};

const captureFeature = async (page, filename, promptPattern) => {
  await prepareChat(page);
  const clicked = await clickPrompt(page, promptPattern);
  if (clicked) await shot(page, filename);
  return clicked;
};

const capture = async () => {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    colorScheme: "dark",
    deviceScaleFactor: 2,
    viewport: { width: 1440, height: 900 },
  });

  const welcomePage = await context.newPage();
  await welcomePage.goto(`${BASE}/voice-chat`, { waitUntil: "networkidle", timeout: 90_000 });
  await dismissOverlays(welcomePage);
  await welcomePage.waitForTimeout(3000);
  await shot(welcomePage, "01-welcome-voice.png");
  await welcomePage.close();

  const coverPage = await context.newPage();
  await prepareChat(coverPage);
  await shot(coverPage, "cover-main.png");
  await shot(coverPage, "02-quick-prompts.png");
  await coverPage.close();

  const flows = [
    ["03-about-cieden.png", /what does cieden do/i],
    ["04-portfolio.png", /show your portfolio/i],
    ["05-pricing.png", /how much does a project cost/i],
    ["06-process.png", /what's your design process/i],
    ["07-services.png", /what services do you provide/i],
    ["08-start-project.png", /how do i start a project/i],
  ];

  for (const [filename, pattern] of flows) {
    const page = await context.newPage();
    await captureFeature(page, filename, pattern);
    await page.close();
  }

  // Estimate deep-dive: pricing chooser then assistant path
  const estimateDeepPage = await context.newPage();
  await prepareChat(estimateDeepPage);
  if (await clickPrompt(estimateDeepPage, /how much does a project cost/i)) {
    await shot(estimateDeepPage, "09-estimate-chooser.png");
    const assistantPath = estimateDeepPage.getByRole("button", { name: /work with the assistant/i });
    if (await assistantPath.isVisible({ timeout: 2000 }).catch(() => false)) {
      await assistantPath.click();
      await estimateDeepPage.waitForTimeout(6000);
      await shot(estimateDeepPage, "10-estimate-calculator.png");
    }
  }
  await estimateDeepPage.close();

  const bookPage = await context.newPage();
  await prepareChat(bookPage);
  if (await clickPrompt(bookPage, /what does cieden do/i)) {
    await clickPrompt(bookPage, /book a call/i);
    await bookPage.waitForTimeout(5000);
    await shot(bookPage, "11-book-call.png");
  }
  await bookPage.close();

  await browser.close();
};

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});
