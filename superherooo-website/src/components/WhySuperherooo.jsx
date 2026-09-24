import React from "react";
import {
  ShieldPlus,
  WalletCards,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "The Hero Safety Net",
    description:
      "Comprehensive health insurance, accident cover, and a dedicated 24/7 support line for you and your family.",
    icon: ShieldPlus,
    type: "blue",
    tags: ["₹2L Health Coverage", "Family Protection Plan"],
  },
  {
    number: "02",
    title: "Daily Pay-outs",
    description:
      "Never wait for the end of the month. Transfer your earnings to your bank account every single day with one tap.",
    icon: WalletCards,
    type: "yellow",
  },
  {
    number: "03",
    title: "Total Freedom",
    description:
      "You are the boss. Set your own working hours, service areas, and weekly targets through our intuitive app.",
    icon: Sparkles,
    type: "blue",
  },
  {
    number: "04",
    title: "Skill Enhancement Academy",
    description:
      "Access free professional certification courses and soft-skills training to increase your hourly rates and customer ratings.",
    icon: GraduationCap,
    type: "yellow",
  },
];

const WhySuperherooo = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-0 pb-20 sm:pb-24 lg:pb-28">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-[300px] w-[300px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-4xl text-center">

          {/* WHY */}
          <div className="mb-5 flex items-center justify-center gap-5">

            <span className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-400" />

            <span className="text-xs font-black tracking-[0.45em] text-yellow-500">
              WHY
            </span>

            <span className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-400" />

          </div>

          {/* Heading */}
          {/* Heading */}
<h2 className="mx-auto max-w-2xl text-center text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#10284d] sm:text-5xl lg:text-[56px]">
  <span className="text-[#10284d]">
    Super
  </span>{" "}
  <span className="text-blue-600">
    Herooo?
  </span>
</h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            We don’t just find you work; we build your legacy with benefits
            designed for India’s modern workforce.
          </p>

        </div>

        {/* ================= DECORATIVE CURVES ================= */}
        <div className="pointer-events-none relative mx-auto mt-8 h-12 max-w-6xl">

          <div className="absolute left-1/2 top-0 h-32 w-[85%] -translate-x-1/2 rounded-[50%] border-t border-blue-200" />

          <div className="absolute left-1/2 top-8 h-24 w-[72%] -translate-x-1/2 rounded-[50%] border-t border-blue-100" />

        </div>

        {/* ================= CARDS ================= */}
        <div className="relative mt-[-5px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            const yellow = benefit.type === "yellow";

            return (
              <div
                key={benefit.number}
                className={`group relative min-h-[350px] overflow-hidden rounded-[22px] border ${
                  yellow
                    ? "border-yellow-500/70"
                    : "border-blue-500/70"
                } bg-gradient-to-b from-[#172e52] to-[#08182e] px-6 pb-7 pt-7 shadow-[0_20px_45px_rgba(10,30,60,0.18)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(10,30,60,0.28)]`}
              >

                {/* Top number corner */}
                <div
                  className={`absolute right-0 top-0 h-[66px] w-[55px] ${
                    yellow
                      ? "bg-gradient-to-br from-yellow-300 to-yellow-500 text-[#14213d]"
                      : "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                  }`}
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 35% 100%)",
                  }}
                >
                  <span className="absolute right-3 top-4 text-xl font-black">
                    {benefit.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center pt-1">

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full border ${
                      yellow
                        ? "border-yellow-500 text-yellow-400"
                        : "border-blue-400 text-blue-400"
                    } bg-[#102541] transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon size={34} strokeWidth={1.7} />
                  </div>

                </div>

                {/* Title */}
                <h3 className="mt-6 text-center text-xl font-black leading-tight text-white">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-[280px] text-center text-sm leading-6 text-blue-100/90">
                  {benefit.description}
                </p>

                {/* Tags */}
                {benefit.tags && (
                  <div className="mt-5 flex flex-col items-center gap-2">

                    {benefit.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-500/80 bg-[#0c2340] px-4 py-1.5 text-xs font-medium text-blue-300"
                      >
                        ✓ {tag}
                      </span>
                    ))}

                  </div>
                )}

                {/* Bottom glow */}
                <div
                  className={`pointer-events-none absolute -bottom-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full ${
                    yellow ? "bg-yellow-400/10" : "bg-blue-400/10"
                  } blur-3xl`}
                />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhySuperherooo;