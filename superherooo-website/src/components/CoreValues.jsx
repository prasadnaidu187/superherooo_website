import React from "react";
import {
  Eye,
  Rocket,
  ShieldCheck,
  Wallet,
  TrendingUp,
} from "lucide-react";

const coreValues = [
  {
    number: "01",
    title: "Our Vision",
    icon: <Eye size={42} strokeWidth={2} />,
    description:
      "To build India's most trusted ecosystem where essential workers are celebrated as verified Superherooo partners.",
    type: "tall",
  },
  {
    number: "02",
    title: "Our Mission",
    icon: <Rocket size={42} strokeWidth={2} />,
    description:
      "Empowering 1 million service professionals with technology, financial security, and upward mobility by 2030.",
    type: "tall",
  },
  {
    title: "Dignity First",
    icon: <ShieldCheck size={42} strokeWidth={2} />,
    description:
      "We ensure every professional on our platform is treated with respect and provided with safety protocols.",
    type: "small",
  },
  {
    title: "Financial Empowerment",
    icon: <Wallet size={42} strokeWidth={2} />,
    description:
      "Transparent earnings and direct-to-bank payments to ensure economic stability for all workers.",
    type: "small",
  },
  {
    title: "Continuous Growth",
    icon: <TrendingUp size={42} strokeWidth={2} />,
    description:
      "Ongoing skill certification and training programs to help our heroes climb the career ladder.",
    type: "wide",
  },
];

function CoreValueCard({ item }) {
  const isTall = item.type === "tall";
  const isWide = item.type === "wide";

  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-[28px]
        border border-blue-500/50
        bg-gradient-to-br
        from-[#0b2857]
        via-[#071d42]
        to-[#061735]
        p-8
        text-white
        shadow-[0_15px_45px_rgba(4,25,65,0.15)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-blue-400
        hover:shadow-[0_20px_55px_rgba(15,100,255,0.25)]
        ${isTall ? "min-h-[530px]" : ""}
        ${isWide ? "min-h-[245px]" : ""}
      `}
    >
      {/* Background glow */}
      <div
        className="
          absolute -right-20 -top-20
          h-52 w-52
          rounded-full
          bg-blue-500/10
          blur-3xl
          transition-all duration-500
          group-hover:bg-blue-400/20
        "
      />

      {/* Bottom glow */}
      <div
        className="
          absolute -bottom-24 left-1/2
          h-52 w-72
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      {/* Number */}
      {item.number && (
        <span
          className="
            absolute right-7 top-7
            text-sm font-bold
            tracking-widest
            text-blue-400/60
          "
        >
          {item.number}
        </span>
      )}

      <div
        className={`
          relative z-10
          ${isWide ? "flex flex-col gap-7 md:flex-row md:items-center" : ""}
        `}
      >
        {/* Icon */}
        <div
          className="
            relative flex h-24 w-24 shrink-0
            items-center justify-center
            rounded-full
            border border-blue-500/70
            bg-blue-500/5
          "
        >
          <div
            className="
              absolute inset-2
              rounded-full
              border border-blue-500/30
            "
          />

          <div
            className="
              absolute inset-0
              rounded-full
              shadow-[0_0_25px_rgba(30,120,255,0.15)]
            "
          />

          <div className="relative z-10 text-white">
            {item.icon}
          </div>
        </div>

        <div className={isWide ? "flex-1" : "mt-8"}>
          {/* Blue line */}
          <div
            className="
              mb-5 h-[4px] w-8
              rounded-full
              bg-gradient-to-r
              from-blue-400 to-blue-500
            "
          />

          {/* Title */}
          <h3
            className="
              text-2xl font-extrabold
              leading-tight tracking-tight
              text-white md:text-[26px]
            "
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-5
              text-[17px]
              leading-8
              text-blue-100/85
            "
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Decorative dots */}
      {isTall && (
        <div
          className="
            absolute bottom-8 left-8
            h-28 w-28 opacity-40
            [background-image:radial-gradient(#1683ff_1px,transparent_1px)]
            [background-size:10px_10px]
          "
        />
      )}

      {/* Growth bars */}
      {isWide && (
        <div
          className="
            absolute bottom-0 right-5
            flex items-end gap-2
            opacity-70
          "
        >
          <div className="h-10 w-8 rounded-t-md bg-blue-500/50" />
          <div className="h-16 w-8 rounded-t-md bg-blue-500/60" />
          <div className="h-24 w-8 rounded-t-md bg-blue-500/70" />
          <div className="h-32 w-8 rounded-t-md bg-blue-500/80" />
          <div className="h-40 w-8 rounded-t-md bg-blue-500/90" />
        </div>
      )}
    </div>
  );
}

export default function CoreValues() {
  return (
    <section
      id="core-values"
      className="
        bg-[#f7f9fc]
        px-5
        pb-28
        pt-24
      "
    >
      <div className="mx-auto max-w-[1250px]">

        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">

          {/* Label */}
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-[3px] w-10 rounded-full bg-blue-500" />

            <span
              className="
                text-sm font-extrabold
                tracking-[0.35em]
                text-blue-500
              "
            >
              CORE VALUES
            </span>

            <span className="h-[3px] w-10 rounded-full bg-blue-500" />
          </div>

          {/* Main heading */}
          <h2
            className="
              text-5xl
              font-black
              leading-[1.08]
              tracking-[-0.04em]
              text-[#081735]
              md:text-6xl
            "
          >
            Driven by{" "}
            <span className="text-[#287cff]">
              Purpose,
            </span>

            <br />

            Guided by{" "}
            <span className="text-[#287cff]">
              Integrity.
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="
              mx-auto mt-9
              max-w-[780px]
              text-lg
              leading-8
              text-[#496184]
              md:text-[19px]
            "
          >
            At Superherooo, our values define who we are and how we create
            impact for essential workers and communities across India.
          </p>
        </div>

        {/* Bento Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Our Vision */}
          <CoreValueCard item={coreValues[0]} />

          {/* Our Mission */}
          <CoreValueCard item={coreValues[1]} />

          {/* Right side */}
          <div
            className="
              grid gap-6
              lg:col-span-2
              lg:grid-cols-2
            "
          >
            {/* Dignity First */}
            <CoreValueCard item={coreValues[2]} />

            {/* Financial Empowerment */}
            <CoreValueCard item={coreValues[3]} />

            {/* Continuous Growth */}
            <div className="lg:col-span-2">
              <CoreValueCard item={coreValues[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}