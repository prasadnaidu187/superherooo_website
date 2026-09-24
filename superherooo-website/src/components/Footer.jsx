import React, { useState } from "react";
import logo from "../assets/logo/logo.png";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/search?q=superherooo&c=apps&hl=en_IN";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerLink =
    "block text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-[#FFB627]";

  return (
    <footer className="overflow-hidden bg-[#0F1C3D] text-white">

      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#14254A] px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-14 lg:py-12">

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FFB627]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#FFB627]/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-3 block text-[10px] font-bold tracking-[0.22em] text-[#FFB627] sm:text-xs">
                NEED A HAND?
              </span>

              <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl lg:text-5xl">
                Your everyday help is{" "}
                <span className="text-[#FFB627]">just a tap away.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                Book a trusted Hero for everyday tasks and get things done
                without the hassle.
              </p>

              <a
                href={GOOGLE_PLAY_URL}
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FFB627] px-7 py-3.5 text-sm font-bold text-[#0F1C3D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFC34D] hover:shadow-[0_15px_35px_rgba(255,182,39,0.3)] sm:w-auto sm:px-9"
              >
                Book a Hero
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">

          {/* BRAND */}
          <div className="text-center lg:col-span-4 lg:text-left">
            <a
              href="#home"
              className="inline-flex transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={logo}
                alt="Superherooo"
                className="mx-auto h-20 w-auto object-contain lg:mx-0"
              />
            </a>

            <h3 className="mt-2 text-xl font-bold text-white">
              Superherooo
            </h3>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/55 lg:mx-0 lg:leading-7">
              We connect people and businesses with trusted nearby partners
              for everyday tasks, support, and temporary help. Get reliable
              assistance whenever you need it, right at your doorstep.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB627] hover:bg-[#FFB627] hover:text-[#0F1C3D]"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB627] hover:bg-[#FFB627] hover:text-[#0F1C3D]"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB627] hover:bg-[#FFB627] hover:text-[#0F1C3D]"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 8h4v13H3V8Zm6 0h4v1.8C13.8 8.7 15.2 7.5 17.5 7.5 21.2 7.5 22 10 22 13.2V21h-4v-7c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7V21H9V8Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB627] hover:bg-[#FFB627] hover:text-[#0F1C3D]"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.88-6.38L6.5 22H3.39l7.24-8.28L2.8 2h6.4l4.41 5.83L18.9 2Zm-1.1 17.8h1.73L8.27 4.1H6.42L17.8 19.8Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* DESKTOP COMPANY */}
          <div className="hidden lg:col-span-2 lg:block">
            <h3 className="text-xs font-bold tracking-[0.15em] text-white">
              COMPANY
            </h3>

            <ul className="mt-6 space-y-4">
              <li><a href="#about" className={footerLink}>About Us</a></li>
              <li><a href="#services" className={footerLink}>Services</a></li>
              <li><a href="#work" className={footerLink}>Our Work</a></li>
              <li><a href="#insights" className={footerLink}>Insights</a></li>
              <li><a href="#contact" className={footerLink}>Contact</a></li>
            </ul>
          </div>

          {/* DESKTOP HEROES */}
          <div className="hidden lg:col-span-2 lg:block">
            <h3 className="text-xs font-bold tracking-[0.15em] text-white">
              FOR HEROES
            </h3>

            <ul className="mt-6 space-y-4">
              <li><a href="#become-hero" className={footerLink}>Become a Hero</a></li>
              <li><a href="#partner" className={footerLink}>Partner With Us</a></li>
              <li><a href="#requirements" className={footerLink}>Requirements</a></li>
              <li><a href="#support" className={footerLink}>Hero Support</a></li>
            </ul>
          </div>

          {/* DESKTOP SUPPORT */}
          <div className="hidden lg:col-span-2 lg:block">
            <h3 className="text-xs font-bold tracking-[0.15em] text-white">
              SUPPORT
            </h3>

            <ul className="mt-6 space-y-4">
              <li><a href="#faq" className={footerLink}>FAQs</a></li>
              <li><a href="#help" className={footerLink}>Help Center</a></li>
              <li><a href="#terms" className={footerLink}>Terms & Conditions</a></li>
              <li><a href="#privacy" className={footerLink}>Privacy Policy</a></li>
              <li><a href="#refund" className={footerLink}>Refund Policy</a></li>
            </ul>
          </div>

          {/* DESKTOP APP */}
          <div className="hidden lg:col-span-2 lg:block">
            <h3 className="text-xs font-bold tracking-[0.15em] text-white">
              GET THE APP
            </h3>

            <p className="mt-6 text-sm leading-6 text-white/50">
              Get everyday help whenever you need it.
            </p>

            <div className="mt-5 space-y-3">

              {/* GOOGLE PLAY */}
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-3 rounded-xl bg-white px-3 py-2.5 text-[#0F1C3D] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,182,39,0.25)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F9]">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.2 2.7C2.75 3.18 2.5 3.93 2.5 4.9V19.1C2.5 20.07 2.75 20.82 3.2 21.3L3.32 21.42L13.07 11.67V12.33L3.32 2.58L3.2 2.7Z"
                      fill="#00A0FF"
                    />
                    <path
                      d="M16.32 14.92L13.07 11.67L3.2 21.54C3.77 22.15 4.7 22.23 5.83 21.61L16.32 14.92Z"
                      fill="#FF3A44"
                    />
                    <path
                      d="M19.62 9.9L16.3 8.01L13.07 11.67L16.32 14.92L19.62 13.03C20.56 12.49 20.56 10.44 19.62 9.9Z"
                      fill="#FFCC00"
                    />
                    <path
                      d="M3.2 2.46L13.07 11.67L16.3 8.01L5.83 1.33C4.7 0.61 3.77 0.69 3.2 2.46Z"
                      fill="#00D639"
                    />
                  </svg>
                </div>

                <div className="text-left">
                  <span className="block text-[8px] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                    GET IT ON
                  </span>
                  <span className="block text-sm font-bold">
                    Google Play
                  </span>
                </div>
              </a>

              {/* APP STORE */}
              <a
                href="#"
                className="flex w-full items-center gap-3 rounded-xl bg-white px-3 py-2.5 text-[#0F1C3D] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,182,39,0.25)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F9]">
                  <svg
                    className="h-6 w-6 text-[#0F1C3D]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.36 1.8-3.12 1.87-2.38 5.97.48 7.12-.57 1.5-1.32 2.99-2.49 4.09ZM12.03 7.25C11.88 5.02 13.69 3.18 15.75 3c.28 2.58-2.34 4.5-3.72 4.25Z" />
                  </svg>
                </div>

                <div className="text-left">
                  <span className="block text-[8px] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                    DOWNLOAD ON THE
                  </span>
                  <span className="block text-sm font-bold">
                    App Store
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="mt-2 w-full lg:hidden">

            {/* COMPANY */}
            <div className="border-t border-white/15">
              <button
                onClick={() => toggleSection("company")}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-bold tracking-wide">
                  COMPANY
                </span>
                <span
                  className={`text-xl transition-transform duration-300 ${
                    openSection === "company" ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === "company"
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <a href="#about" className={footerLink}>About Us</a>
                  <a href="#services" className={footerLink}>Services</a>
                  <a href="#work" className={footerLink}>Our Work</a>
                  <a href="#insights" className={footerLink}>Insights</a>
                  <a href="#contact" className={footerLink}>Contact</a>
                </div>
              </div>
            </div>

            {/* FOR HEROES */}
            <div className="border-t border-white/15">
              <button
                onClick={() => toggleSection("heroes")}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-bold tracking-wide">
                  FOR HEROES
                </span>
                <span
                  className={`text-xl transition-transform duration-300 ${
                    openSection === "heroes" ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === "heroes"
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <a href="#become-hero" className={footerLink}>Become a Hero</a>
                  <a href="#partner" className={footerLink}>Partner With Us</a>
                  <a href="#requirements" className={footerLink}>Requirements</a>
                  <a href="#support" className={footerLink}>Hero Support</a>
                </div>
              </div>
            </div>

            {/* SUPPORT */}
            <div className="border-t border-white/15">
              <button
                onClick={() => toggleSection("support")}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-bold tracking-wide">
                  SUPPORT
                </span>
                <span
                  className={`text-xl transition-transform duration-300 ${
                    openSection === "support" ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === "support"
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <a href="#faq" className={footerLink}>FAQs</a>
                  <a href="#help" className={footerLink}>Help Center</a>
                  <a href="#terms" className={footerLink}>Terms & Conditions</a>
                  <a href="#privacy" className={footerLink}>Privacy Policy</a>
                  <a href="#refund" className={footerLink}>Refund Policy</a>
                </div>
              </div>
            </div>

            {/* GET THE APP */}
            <div className="border-y border-white/15">
              <button
                onClick={() => toggleSection("app")}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-bold tracking-wide">
                  GET THE APP
                </span>
                <span
                  className={`text-xl transition-transform duration-300 ${
                    openSection === "app" ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === "app"
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center">

                  <p className="mb-5 text-center text-sm text-white/50">
                    Get everyday help whenever you need it.
                  </p>

                  {/* GOOGLE PLAY */}
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full max-w-[280px] items-center gap-4 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white transition-all duration-300 hover:border-[#FFB627] hover:bg-[#FFB627] hover:text-[#0F1C3D]"
                  >
                    <svg
                      className="h-9 w-9 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.2 2.7C2.75 3.18 2.5 3.93 2.5 4.9V19.1C2.5 20.07 2.75 20.82 3.2 21.3L3.32 21.42L13.07 11.67V12.33L3.32 2.58L3.2 2.7Z"
                        fill="#00A0FF"
                      />
                      <path
                        d="M16.32 14.92L13.07 11.67L3.2 21.54C3.77 22.15 4.7 22.23 5.83 21.61L16.32 14.92Z"
                        fill="#FF3A44"
                      />
                      <path
                        d="M19.62 9.9L16.3 8.01L13.07 11.67L16.32 14.92L19.62 13.03C20.56 12.49 20.56 10.44 19.62 9.9Z"
                        fill="#FFCC00"
                      />
                      <path
                        d="M3.2 2.46L13.07 11.67L16.3 8.01L5.83 1.33C4.7 0.61 3.77 0.69 3.2 2.46Z"
                        fill="#00D639"
                      />
                    </svg>

                    <div className="text-left">
                      <span className="block text-[8px] uppercase tracking-wider opacity-70">
                        GET IT ON
                      </span>
                      <span className="block text-base font-bold">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* APP STORE */}
                  <a
                    href="#"
                    className="mt-3 flex w-full max-w-[280px] items-center gap-4 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white transition-all duration-300 hover:border-[#FFB627] hover:bg-[#FFB627] hover:text-[#0F1C3D]"
                  >
                    <svg
                      className="h-9 w-9 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.36 1.8-3.12 1.87-2.38 5.97.48 7.12-.57 1.5-1.32 2.99-2.49 4.09ZM12.03 7.25C11.88 5.02 13.69 3.18 15.75 3c.28 2.58-2.34 4.5-3.72 4.25Z" />
                    </svg>

                    <div className="text-left">
                      <span className="block text-[8px] uppercase tracking-wider opacity-70">
                        DOWNLOAD ON THE
                      </span>
                      <span className="block text-base font-bold">
                        App Store
                      </span>
                    </div>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-6 text-center">

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Superherooo. All rights reserved.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            <a
              href="#privacy"
              className="transition-colors duration-200 hover:text-[#FFB627]"
            >
              Privacy
            </a>

            <span className="text-white/20">|</span>

            <a
              href="#terms"
              className="transition-colors duration-200 hover:text-[#FFB627]"
            >
              Terms
            </a>

            <span className="text-white/20">|</span>

            <a
              href="#cookies"
              className="transition-colors duration-200 hover:text-[#FFB627]"
            >
              Cookies
            </a>
          </div>

          <p className="mt-4 text-xs text-white/40">
            Made with <span className="text-[#FFB627]">♥</span> in India
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;