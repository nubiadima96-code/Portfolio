"use client";

const HouseHubShot = ({ src, alt }: { src: string; alt: string }) => (
  <article className="rounded-2xl overflow-hidden ring-1 ring-white/10">
    <img src={src} alt={alt} className="w-full h-auto block" />
  </article>
);

const HouseHubSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) => (
  <div className="space-y-6 md:space-y-8">
    <article className="rounded-2xl bg-black/40 text-slate-200 p-8 md:p-12 ring-1 ring-white/10 backdrop-blur-xl">
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
        <h3 className="md:col-span-4 text-2xl md:text-3xl font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="md:col-span-8 text-base md:text-lg leading-relaxed text-slate-300">
          {description}
        </p>
      </div>
    </article>
    <HouseHubShot src={imageSrc} alt={imageAlt} />
  </div>
);

const impactStats = [
  {
    label: "Live in residential complexes",
    value: "ЖК & HOA",
    detail: "Deployed and used in real buildings, not just a concept.",
  },
  {
    label: "People helped every day",
    value: "Residents",
    detail: "Owners, tenants, and managers rely on one app instead of scattered tools.",
  },
  {
    label: "Product momentum",
    value: "Growth",
    detail: "More active users, payments, and service requests month over month.",
  },
];

export const RealtorContent = () => {
  return (
    <div className="max-w-7xl mx-auto w-full pt-16 pb-24 px-6 space-y-16 lg:space-y-20">
      <section className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-semibold text-white tracking-tight">Project context</h2>
          <p className="text-slate-300 leading-relaxed">
            Apartment buildings often run on fragmented tools: messenger groups for noise, separate bank apps for payments, and different sites for utilities or management. HouseHub brings daily building life into one mobile product with clear roles and structured communication.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The app is already live in residential complexes (ЖК): residents submit utility readings, pay online, follow house news, and reach the right people without chaos. Uptake has been growing steadily — more people join, transactions increase, and routine tasks take less time than before.
          </p>
          <p className="text-slate-300 leading-relaxed">
            For design, the focus was clarity under real constraints: fast onboarding, readable dashboards, trustworthy payments, and flows that work for both residents and building management.
          </p>
        </div>
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Type</span>
              <span className="text-slate-100">Mobile product case</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Product</span>
              <span className="text-slate-100">HouseHub / Realtor in Pocket</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Status</span>
              <span className="text-teal-300">In production · ЖК</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Focus</span>
              <span className="text-slate-100">Residents · HOA · Tenants · Landlords</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full space-y-10 md:space-y-12">
        <HouseHubShot src="/assets/HouseHub/1.png" alt="HouseHub product overview" />

        <div className="rounded-2xl bg-teal-400/5 ring-1 ring-teal-400/20 p-8 md:p-10">
          <h3 className="text-lg font-semibold text-white mb-2">Impact & adoption</h3>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
            HouseHub is not a classroom mockup — it runs in real residential complexes and supports people every day. Adoption keeps climbing: more households connect, utility and payment activity grows, and building communication becomes easier to manage.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-black/30 ring-1 ring-white/10 p-5 space-y-2"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-teal-300">{stat.value}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <HouseHubSection
          title="Onboarding and entry"
          description="Registration and login are built for speed: phone and password, SMS verification, password recovery, and basic profile data. Residents reach building services quickly without a heavy setup."
          imageSrc="/assets/HouseHub/2.png"
          imageAlt="HouseHub onboarding screens"
        />

        <HouseHubSection
          title="Dashboard and monthly control"
          description="The home screen brings together monthly utility usage, costs per unit, alerts, and building news. Users can track several addresses and get reminders for payments or urgent house updates."
          imageSrc="/assets/HouseHub/3.png"
          imageAlt="HouseHub dashboard screens"
        />

        <article className="rounded-2xl bg-black/40 text-slate-200 p-8 md:p-12 ring-1 ring-white/10 backdrop-blur-xl">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            <h3 className="md:col-span-4 text-2xl md:text-3xl font-semibold leading-tight text-white">
              Detailed analytics
            </h3>
            <p className="md:col-span-8 text-base md:text-lg leading-relaxed text-slate-300">
              Statistics support day, week, and month views for electricity, gas, and water. Residents see trends early, understand spending, and spot unusual consumption before bills spike.
            </p>
          </div>
        </article>

        <HouseHubSection
          title="Services, indicators, and payments"
          description="Users open service requests (including lift or technical issues), submit readings for water, electricity, gas, and waste, and pay per service or in one step. Cards, Apple Pay, and Google Pay keep the full utility loop inside the app."
          imageSrc="/assets/HouseHub/4.png"
          imageAlt="HouseHub services and payments screens"
        />

        <HouseHubSection
          title="Real estate module"
          description="Search, filters, listings, and property detail pages cover rent, buy, and list flows without leaving HouseHub — useful for residents and anyone exploring housing in the same ecosystem."
          imageSrc="/assets/HouseHub/5.png"
          imageAlt="HouseHub real estate screens"
        />

        <HouseHubSection
          title="Structured communication"
          description="Chats are grouped by context — HOA, entrance, building, service teams, and support — so messages stay findable and actionable instead of getting lost in a generic group chat."
          imageSrc="/assets/HouseHub/6.png"
          imageAlt="HouseHub chat screens"
        />

        <HouseHubSection
          title="Settings and personalization"
          description="Notifications, payment methods, language, and account preferences live in one place. A help and support area is planned next to close the full service loop inside the product."
          imageSrc="/assets/HouseHub/7.png"
          imageAlt="HouseHub settings screens"
        />
      </section>
    </div>
  );
};
