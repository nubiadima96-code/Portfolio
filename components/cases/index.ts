import { ComponentType } from "react";
import { AiChatbotContent } from "./AiChatbotContent";
import { CompanyCaseContent } from "./CompanyCaseContent";
import { DataManagementContent } from "./DataManagementContent";
import { EmailAssistantContent } from "./EmailAssistantContent";
import { MeetingAssistantContent } from "./MeetingAssistantContent";
import { OsbbContent } from "./OsbbContent";
import { RealtorContent } from "./RealtorContent";

export const caseContentMap: Record<string, ComponentType> = {
  "ai-chatbot-dashboard": AiChatbotContent,
  "ai-meeting-assistant": MeetingAssistantContent,
  "ai-data-management": DataManagementContent,
  "ai-email-assistant": EmailAssistantContent,
  "company-case-study": CompanyCaseContent,
  "osbb-app": OsbbContent,
  "realtor-in-pocket": RealtorContent,
};
