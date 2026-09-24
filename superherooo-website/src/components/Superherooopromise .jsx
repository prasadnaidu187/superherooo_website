import React from "react";
import promiseImage from "../assets/images/hero.png";
/**
 * The Superherooo Promise
 * Two-column trust section: portrait image (left) with a soft corner cutout,
 * eyebrow label + headline + intro copy, and three icon feature rows (right).
 *
 * Replace IMAGE_URL with the actual hero portrait asset.
 */



const features = [
  {
    title: "Transparent Pricing",
    description: "Know exactly what you pay before the work starts. No hidden fees or surprise costs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "On-Time Performance",
    description: "We value your time. If our Hero is late, your next minor service is on us.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Insured Work",
    description: "Peace of mind guaranteed. Every job is covered by our ₹50k damage insurance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SuperheroooPromise() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Image column */}
        <div className="relative">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100"
            style={{
              borderRadius: "28px",
              // soft cutout on the bottom-right corner, matching the screenshot
              clipPath:
                "path('M0,28 C0,12.5 12.5,0 28,0 L100%,0 L100%,calc(100% - 90px) C100%,calc(100% - 40px) calc(100% - 40px),100% calc(100% - 90px),100% L28,100% C12.5,100% 0,calc(100% - 12.5px) 0,calc(100% - 28px) Z')",
            }}
          >
            <img src={promiseImage}
              alt="Superherooo service partner"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content column */}
        <div className="flex flex-col justify-center">
          <div className="w-fit">
  <div className="animate-pulse rounded-md border border-[#FFB627] bg-black px-4 py-2.5 shadow-[0_0_16px_rgba(255,182,39,0.4)]">
    <p
      className="text-xs font-bold leading-none tracking-[0.15em]"
      style={{ color: "#FFB627" }}
    >
      THE SUPERHEROOO PROMISE
    </p>
  </div>
</div>

          <h2
            className="mt-4 text-4xl leading-[1.15] sm:text-5xl sm:leading-[1.12]"
            style={{ color: "#0F1C3D", fontWeight: 800, letterSpacing: "-0.01em" }}
          >
            Restoring dignity to work, and peace to your home.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "#5B6472" }}>
            We don't just provide services; we build a platform where verified
            local partners are respected, and customers are delighted.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl border p-5"
                style={{ borderColor: "#ECEAE3", backgroundColor: "#FCFBF8" }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#FDECC8", color: "#0F1C3D" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ color: "#0F1C3D" }}>
                    {f.title}
                  </p>
                  <p className="mt-1 text-[0.95rem] leading-relaxed" style={{ color: "#5B6472" }}>
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
