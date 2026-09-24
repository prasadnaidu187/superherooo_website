import React from "react";
import phoneMockup from "../assets/images/mobile.png";

/* =========================
   GOOGLE PLAY ICON
========================= */
const PlayStoreIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-9 w-9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 4.8C5.6 5.5 5 6.7 5 8.2v31.6c0 1.5.6 2.7 1.5 3.4L27.2 24 6.5 4.8Z"
      fill="#00C3FF"
    />

    <path
      d="M30.8 27.3 24.7 21.7 6.5 4.8c.5-.3 1.1-.3 1.8.1l25.1 14.2-2.6 8.2Z"
      fill="#7C4DFF"
    />

    <path
      d="M6.5 43.2c.5.3 1.1.3 1.8-.1l25.1-14.2-2.6-8.2L6.5 43.2Z"
      fill="#00D639"
    />

    <path
      d="m33.4 19.1 7.1 4c1.8 1 1.8 2.7 0 3.7l-7.1 4-4.2-4.7 4.2-7Z"
      fill="#FF3D6B"
    />
  </svg>
);

/* =========================
   APP STORE ICON
========================= */
const AppStoreIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-9 w-9"
    fill="#071A36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M35.4 25.2c0-5.2 4.2-7.7 4.4-7.8-2.4-3.5-6.2-4-7.3-4.1-2.8-.3-5.5 1.7-6.9 1.7-1.5 0-3.7-1.7-6-1.7-3.1.1-6 1.8-7.6 4.5-3.3 5.7-.8 14.1 2.3 18.7 1.5 2.2 3.3 4.6 5.7 4.5 2.3-.1 3.2-1.5 6-1.5 2.8 0 3.6 1.5 6 1.4 2.5 0 4.1-2.2 5.6-4.4 1.8-2.5 2.5-5 2.5-5.1-.1 0-4.7-1.8-4.7-6.2Z" />

    <path d="M30.8 10.3c1.3-1.6 2.2-3.8 2-6-1.9.1-4.2 1.3-5.5 2.9-1.2 1.4-2.3 3.7-2 5.8 2.1.2 4.2-1.1 5.5-2.7Z" />
  </svg>
);

/* =========================
   APP DOWNLOAD BUTTON
========================= */
function AppButton({ store, name, icon }) {
  return (
    <button
      type="button"
      className="
        group
        flex
        min-w-[260px]
        items-center
        gap-4
        rounded-2xl
        bg-white
        px-4
        py-3.5
        text-left
        shadow-sm
        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:bg-[#FFB627]
        hover:shadow-[0_14px_35px_rgba(255,182,39,0.28)]

        active:translate-y-0

        sm:min-w-[260px]
      "
    >
      {/* ICON BOX */}
      <span
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-slate-100
          transition-all
          duration-300

          group-hover:border-[#FFB627]
          group-hover:bg-[#FFF4D6]
          group-hover:scale-105
        "
      >
        {icon}
      </span>

      {/* TEXT */}
      <span className="flex flex-col leading-tight">
        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-wide
            text-slate-500
            transition-colors
            duration-300

            group-hover:text-[#0F1C3D]/70
          "
        >
          {store}
        </span>

        <span
          className="
            text-xl
            font-extrabold
            tracking-tight
            text-[#071A36]
            transition-colors
            duration-300

            group-hover:text-[#0F1C3D]
          "
        >
          {name}
        </span>
      </span>
    </button>
  );
}

/* =========================
   APP DOWNLOAD CTA
========================= */
export default function AppDownloadCTA() {
  return (
    <section className="w-full px-6 py-16 sm:py-24">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[28px]
          px-8
          py-16
          sm:px-16
          sm:py-20
        "
        style={{
          backgroundColor: "#0B1730",
        }}
      >
        {/* =========================
            SUBTLE GOLD GLOW
        ========================= */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            top-1/2
            h-[420px]
            w-[420px]
            -translate-y-1/2
            rounded-full
            opacity-[0.12]
            blur-3xl
          "
          style={{
            backgroundColor: "#FFB627",
          }}
        />

        {/* =========================
            CONTENT GRID
        ========================= */}
        <div
          className="
            relative
            grid
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-2
          "
        >

          {/* =========================
              LEFT: COPY + BUTTONS
          ========================= */}
          <div>
            <h2
              className="
                text-4xl
                font-extrabold
                leading-[1.12]
                text-white
                sm:text-5xl
              "
            >
              Experience the future of service work.
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-lg
                leading-relaxed
                text-slate-300
              "
            >
              Book verified Superherooo partners from the web while the
              mobile apps are prepared for store launch.
            </p>

            {/* =========================
                APP STORE BUTTONS
            ========================= */}
            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:flex-wrap
              "
            >

              {/* GOOGLE PLAY */}
              <AppButton
                store="GET IT ON"
                name="Google Play"
                icon={<PlayStoreIcon />}
              />

              {/* APP STORE */}
              <AppButton
                store="GET IT ON"
                name="App Store"
                icon={<AppStoreIcon />}
              />

            </div>
          </div>

          {/* =========================
              RIGHT: PHONE MOCKUP
          ========================= */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={phoneMockup}
              alt="Superherooo app preview"
              className="
                w-[380px]
                rotate-6
                drop-shadow-2xl

                transition-transform
                duration-700
                ease-out

                hover:rotate-3
                hover:scale-[1.02]

                sm:w-[440px]
                lg:w-[500px]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}