import React from "react";


const stops = [
  {
    role: "Business Owner",
    detail: "Posts the job, sets the budget",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path
          d="M24 6L30 18H18L24 6Z"
          fill="currentColor"
        />
        <rect x="12" y="20" width="24" height="20" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="12" y="20" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M20 40V30h8v10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    role: "Matching",
    detail: "Superherooo pairs the right hero to the job",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <path
          d="M24 4L29 17L42 20L29 23L24 36L19 23L6 20L19 17L24 4Z"
          fill="currentColor"
        />
      </svg>
    ),
    isCore: true,
  },
  {
    role: "SuperHero Partner",
    detail: "Shows up, gets it done, gets paid",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path
          d="M24 5C24 5 15 9 12 9C12 20 12 30 24 41C36 30 36 20 36 9C33 9 24 5 24 5Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M24 5C24 5 15 9 12 9C12 20 12 30 24 41C36 30 36 20 36 9C33 9 24 5 24 5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M18 22L22 27L30 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function EcosystemFlow() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-6"
      style={{ backgroundColor: "#FFF9EE" }}
    >
      {/* faint halftone corner, hero-comic texture, kept subtle */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#0F1C3D 2px, transparent 2px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2
  className="text-5xl sm:text-6xl leading-[1.05] tracking-tight"
  style={{
    color: "#0F1C3D",
    fontFamily: "'Archivo Black', 'Arial Black', sans-serif",
  }}
>
  How the job{" "}
  <span className="text-blue-600">
    Gets Done?
  </span>
</h2>
        <p className="mt-4 text-base sm:text-lg" style={{ color: "#5B5F6B" }}>
          One flight path, three stops — from posted job to finished work.
        </p>
      </div>

      {/* Flight-path layout */}
      <div className="relative mx-auto mt-20 max-w-5xl">
        {/* the arc, desktop only */}
        <svg
          className="pointer-events-none absolute inset-0 hidden w-full sm:block"
          viewBox="0 0 1000 220"
          preserveAspectRatio="none"
          style={{ height: "220px", top: "-10px" }}
        >
          <path
            d="M 110 170 Q 320 -20 500 30 Q 680 -20 890 170"
            fill="none"
            stroke="#0F1C3D"
            strokeWidth="3"
            strokeDasharray="2 12"
            strokeLinecap="round"
            opacity="0.35"
          />
          {/* arrowhead at the end */}
          <path d="M878 156 L894 172 L874 178" fill="none" stroke="#0F1C3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>

        <div className="relative grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-6">
          {stops.map((stop, i) => (
            <div
              key={stop.role}
              className={`flex flex-col items-center text-center ${
                i === 1 ? "sm:-translate-y-10" : "sm:translate-y-6"
              }`}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={
                  stop.isCore
                    ? {
                        width: "108px",
                        height: "108px",
                        backgroundColor: "#0F1C3D",
                        color: "#FFB627",
                        boxShadow: "0 12px 30px -10px rgba(15,28,61,0.45)",
                      }
                    : {
                        width: "88px",
                        height: "88px",
                        backgroundColor: "#FFFFFF",
                        color: "#0F1C3D",
                        border: "2px solid #0F1C3D",
                      }
                }
              >
                {stop.icon}
              </div>

              <p
                className="mt-5 text-lg sm:text-xl"
                style={{
                  color: "#0F1C3D",
                  fontFamily: "'Archivo Black', 'Arial Black', sans-serif",
                }}
              >
                {stop.role}
              </p>
              <p className="mt-1 max-w-[180px] text-sm" style={{ color: "#5B5F6B" }}>
                {stop.detail}
              </p>

              {stop.isCore && (
                <span
                  className="mt-3 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "#FFE9BE", color: "#8A5A00" }}
                >
                  Verified &amp; rated
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
