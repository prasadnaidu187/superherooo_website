import React from "react";
import { Check, Star, ArrowRight, ShieldCheck, Users, ThumbsUp } from "lucide-react";
import heroImage from "../assets/images/hero.png";
const WhyChooseUs = () => {
  const features = [
    {
      icon: <Check size={25} strokeWidth={2.5} />,
      title: "Background Verified",
      text: "Every professional undergoes a rigorous 3-step verification process to ensure your safety and peace of mind.",
      bg: "bg-blue-50",
      iconColor: "text-blue-700",
    },
    {
      icon: <Star size={24} fill="currentColor" />,
      title: "Expert Craftsmanship",
      text: "We only onboard top-rated heroes who demonstrate exceptional skill in their specific service domain.",
      bg: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      icon: <span className="text-2xl font-bold">━</span>,
      title: "Transparent Pricing",
      text: "No hidden fees. You get clear upfront pricing before you book any service on the platform.",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ================= LEFT ================= */}
          <div>

            {/* Small Label */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-3">
              <ShieldCheck
                size={17}
                className="text-blue-600"
                fill="currentColor"
              />

              <span className="text-[11px] font-extrabold tracking-[0.08em] text-slate-900">
                THE SUPERHEROOO GUARANTEE
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#10284d] sm:text-5xl lg:text-[56px]">
              Why choose our
              <br />
              <span className="text-blue-600">
                service professionals?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              We go the extra mile to ensure your safety, satisfaction and
              complete{" "}
              <span className="font-bold text-blue-600">
                peace of mind.
              </span>
            </p>

            {/* Feature Cards */}
            <div className="mt-8 space-y-3">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,35,70,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,35,70,0.09)] sm:p-6"
                >

                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${feature.bg} ${feature.iconColor}`}
                  >
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-extrabold text-[#10284d] sm:text-lg">
                      {feature.title}
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-5 text-slate-500 sm:text-[14px]">
                      {feature.text}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white sm:flex">
                    <ArrowRight size={17} />
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative mx-auto w-full max-w-[620px]">

            {/* Main Blue Card */}
            <div className="relative min-h-[540px] overflow-hidden rounded-[42px] bg-gradient-to-br from-[#173d78] via-[#102f62] to-[#09234b]">

              {/* Dot Pattern */}
              <div className="absolute left-10 top-16 grid grid-cols-6 gap-5 opacity-50">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-[4px] w-[4px] rounded-full bg-blue-400"
                  />
                ))}
              </div>

              {/* Circle */}
              <div className="absolute right-10 top-20 h-[280px] w-[280px] rounded-full border border-white/10" />

              {/* Big Check */}
              <div className="absolute right-20 top-44 rotate-[-8deg] text-[150px] font-thin text-white/10">
                ✓
              </div>

              {/* Verification Badge */}
              <div className="absolute right-0 top-16 z-20 w-[145px] rounded-l-[22px] bg-white px-5 py-5 shadow-xl sm:w-[160px]">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102f62] text-yellow-400">
                  <Check size={24} strokeWidth={3} />
                </div>

                <h4 className="mt-3 text-sm font-black leading-5 text-[#10284d]">
                  Superherooo
                  <br />
                  Verified
                </h4>

                <div className="my-3 h-[3px] w-7 bg-yellow-400" />

                <p className="text-xs leading-5 text-slate-500">
                  Your safety,
                  <br />
                  <span className="font-bold text-amber-500">
                    our priority.
                  </span>
                </p>
              </div>

              {/* Person Image */}
              <div className="absolute bottom-0 left-1/2 z-10 w-[330px] -translate-x-1/2 sm:w-[490px] lg:w-[530px]">
                <img
  src={heroImage}
  alt="Superherooo professional"
  className="h-auto w-full object-contain"
/>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-6 left-1/2 z-30 flex w-[calc(100%-40px)] -translate-x-1/2 items-center rounded-[22px] bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-md sm:w-[calc(100%-60px)] sm:px-8">

                {/* Stat 1 */}
                <div className="flex flex-1 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700">
                    <Users size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400 sm:text-xs">
                      Verified Professionals
                    </p>

                    <p className="text-lg font-black text-[#10284d]">
                      0+
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-3 h-12 w-px bg-slate-200 sm:mx-6" />

                {/* Stat 2 */}
                <div className="flex flex-1 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <ThumbsUp size={18} fill="currentColor" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400 sm:text-xs">
                      Happy Customers
                    </p>

                    <p className="text-lg font-black text-[#10284d]">
                      0+
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;