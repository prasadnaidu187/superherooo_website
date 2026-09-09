import phoenix from "../assets/logo/phoenix.png";
import wehouse from "../assets/logo/WeHouse.png";
import siddharth from "../assets/logo/siddharth.png";
import rajapushpa from "../assets/logo/rajapushpa.png";
import traditions from "../assets/logo/traditions.png";

const TrustedBusinesses = () => {
  const logos = [
    {
      name: "Phoenix",
      src: phoenix,
    },
    {
      name: "WeHouse",
      src: wehouse,
    },
    {
      name: "Siddharth",
      src: siddharth,
    },
    {
      name: "Rajapushpa",
      src: rajapushpa,
    },
    {
      name: "Traditions",
      src: traditions,
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">

      {/* Same width as Navbar */}
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
            Trusted by 1000+ Businesses
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute left-0 top-0 z-10 h-full
              w-8
              bg-gradient-to-r from-white to-transparent
              sm:w-12
              lg:w-16
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute right-0 top-0 z-10 h-full
              w-8
              bg-gradient-to-l from-white to-transparent
              sm:w-12
              lg:w-16
            "
          />

          {/* Moving Track */}
          <div className="trusted-track flex w-max items-center">

            {/* ================= FIRST LOGO SET ================= */}
            <div
              className="
                flex items-center
                gap-6 pr-6
                sm:gap-8 sm:pr-8
                lg:gap-10 lg:pr-10
              "
            >
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="
                    flex
                    h-20
                    w-32
                    shrink-0
                    items-center
                    justify-center
                    sm:h-24
                    sm:w-40
                    lg:h-28
                    lg:w-44
                  "
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="
                      max-h-16
                      max-w-[130px]
                      object-contain
                      opacity-100
                      transition-all
                      duration-300
                      hover:scale-105
                      sm:max-h-20
                      sm:max-w-[155px]
                      lg:max-h-24
                      lg:max-w-[175px]
                    "
                  />
                </div>
              ))}
            </div>

            {/* ================= DUPLICATE LOGO SET ================= */}
            <div
              className="
                flex items-center
                gap-6 pr-6
                sm:gap-8 sm:pr-8
                lg:gap-10 lg:pr-10
              "
            >
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="
                    flex
                    h-20
                    w-32
                    shrink-0
                    items-center
                    justify-center
                    sm:h-24
                    sm:w-40
                    lg:h-28
                    lg:w-44
                  "
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="
                      max-h-16
                      max-w-[130px]
                      object-contain
                      opacity-100
                      transition-all
                      duration-300
                      hover:scale-105
                      sm:max-h-20
                      sm:max-w-[155px]
                      lg:max-h-24
                      lg:max-w-[175px]
                    "
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= CAROUSEL ANIMATION ================= */}
      <style>{`
        .trusted-track {
          animation: trustedMarquee 22s linear infinite;
        }

        .trusted-track:hover {
          animation-play-state: paused;
        }

        @keyframes trustedMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .trusted-track {
            animation-duration: 18s;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .trusted-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBusinesses;