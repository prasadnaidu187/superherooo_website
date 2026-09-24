import { useEffect, useState } from "react";
import heroImage from "../assets/images/hero.png";
import { FaApple } from "react-icons/fa6";

const heroBrandText = "Superherooo..";

const Hero = () => {
  const [typedBrandText, setTypedBrandText] = useState("");

  useEffect(() => {
    let characterIndex = 0;
    let isDeleting = false;
    let typingTimer;

    const animateBrandText = () => {
      if (!isDeleting && characterIndex < heroBrandText.length) {
        characterIndex++;
        setTypedBrandText(heroBrandText.slice(0, characterIndex));
        typingTimer = setTimeout(animateBrandText, 110);
        return;
      }

      if (!isDeleting) {
        isDeleting = true;
        typingTimer = setTimeout(animateBrandText, 1200);
        return;
      }

      if (characterIndex > 0) {
        characterIndex--;
        setTypedBrandText(heroBrandText.slice(0, characterIndex));
        typingTimer = setTimeout(animateBrandText, 65);
        return;
      }

      isDeleting = false;
      typingTimer = setTimeout(animateBrandText, 500);
    };

    typingTimer = setTimeout(animateBrandText, 110);
    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex h-[100svh] max-h-[100svh] items-center overflow-hidden bg-[#061a33] px-4 pb-4 pt-24 text-white sm:px-5 sm:pb-16 sm:pt-32 lg:px-8 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-3xl"
          style={{ animation: "heroBubbleOne 12s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-3xl"
          style={{ animation: "heroBubbleTwo 15s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[30%] top-[15%] h-[320px] w-[320px] rounded-full bg-orange-400/10 blur-3xl"
          style={{ animation: "heroBubbleThree 10s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[5%] right-[25%] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-3xl"
          style={{ animation: "heroBubbleFour 14s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[8%] top-[30%] h-[180px] w-[180px] rounded-full bg-orange-500/10 blur-3xl"
          style={{ animation: "heroBubbleFive 9s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[8%] top-[45%] h-[200px] w-[200px] rounded-full bg-blue-400/10 blur-3xl"
          style={{ animation: "heroBubbleSix 11s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.08),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-2 sm:gap-12 lg:grid-cols-2">

        {/* Left */}
        <div className="order-1 translate-y-5 text-center lg:translate-y-8 lg:text-left">
          <button
            type="button"
            className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-orange-300/30 bg-orange-400/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-orange-300 shadow-lg shadow-orange-500/10 backdrop-blur-sm transition hover:border-orange-300/60 hover:bg-orange-400/20 hover:text-orange-200 sm:mb-5 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.16em]"
          >
            <span className="h-1 w-1 animate-pulse rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.9)] sm:h-1.5 sm:w-1.5" />
            ON-DEMAND WORKFORCE SOLUTIONS
          </button>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-6xl">
            Need a Helper?
            <span className="block">Book a</span>

            <span 
  className="block min-h-[1.1em] text-4xl font-extrabold text-[#FFB627] drop-shadow-[0_0_18px_rgba(255,182,39,0.35)] transition-opacity duration-150 ease-out sm:text-6xl" 
  aria-label={heroBrandText} 
> 
  {typedBrandText} 
</span>
          </h1>

          <p className="mt-3 max-w-xl text-xs leading-5 text-slate-300 sm:mt-7 sm:text-lg sm:leading-7">
            We connects people and businesses with trusted nearby partners for
            everyday tasks, support, and temporary help. Get reliable
            assistance whenever you need it, right at your doorstep.
          </p>

          {/* App Buttons */}
          <div className="mx-auto mt-4 grid w-full max-w-[320px] grid-cols-2 gap-2 sm:mt-8 sm:flex sm:max-w-none sm:flex-wrap sm:gap-4 lg:mx-0">

            <a
              href="https://play.google.com/store/apps/developer?id=superherooo+private+limited&hl=en_IN"
              target="_blank"
              rel="noreferrer"
              aria-label="Get it on Google Play"
              className="group flex min-h-[44px] min-w-0 flex-1 items-center gap-1 rounded-lg border border-slate-200 bg-white px-1.5 py-1 text-left text-[#061a33] shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-xl sm:min-h-[64px] sm:w-[210px] sm:flex-none sm:gap-3 sm:rounded-xl sm:px-3 sm:py-2"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-100 shadow-inner shadow-slate-300/40 sm:h-10 sm:w-10 sm:rounded-lg">
                <img
                  src="https://api.iconify.design/logos:google-play-icon.svg"
                  alt=""
                  className="h-4 w-4 transition-transform group-hover:scale-105 sm:h-7 sm:w-7"
                />
              </span>

              <span className="min-w-0">
                <span className="block whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.04em] text-slate-500 sm:text-[10px] sm:tracking-[0.08em]">
                  Get it on
                </span>
                <span className="block truncate text-[10px] font-bold leading-tight tracking-tight sm:text-[18px]">
                  Google Play
                </span>
              </span>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Download on the App Store"
              className="group flex min-h-[44px] min-w-0 flex-1 items-center gap-1 rounded-lg border border-slate-200 bg-white px-1.5 py-1 text-left text-[#061a33] shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-xl sm:min-h-[64px] sm:w-[210px] sm:flex-none sm:gap-3 sm:rounded-xl sm:px-3 sm:py-2"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-100 shadow-inner shadow-slate-300/40 sm:h-10 sm:w-10 sm:rounded-lg">
                <FaApple className="text-[0.9rem] text-[#061a33] transition-transform group-hover:scale-105 sm:text-[1.7rem]" />
              </span>

              <span className="min-w-0">
                <span className="block whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.04em] text-slate-500 sm:text-[10px] sm:tracking-[0.08em]">
                  Get it on
                </span>
                <span className="block truncate text-[10px] font-bold leading-tight tracking-tight sm:text-[18px]">
                  App Store
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative order-2 flex min-h-0 translate-y-4 items-center justify-center lg:min-h-[620px] lg:translate-y-8">
          <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[80px] sm:h-[420px] sm:w-[420px]" />

          <img
            src={heroImage}
            alt="SUPERHEROOO workforce"
            className="relative z-10 h-auto max-h-[190px] w-full max-w-[300px] translate-y-4 object-contain drop-shadow-[0_0_18px_rgba(249,115,22,0.45)] drop-shadow-[0_0_48px_rgba(59,130,246,0.2)] sm:max-h-none sm:max-w-[760px] lg:translate-y-8 lg:scale-110"
          />
        </div>
      </div>

      <style>{`
        @keyframes heroBubbleOne {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-40px,35px) scale(1.08); }
        }
        @keyframes heroBubbleTwo {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(45px,-35px) scale(1.1); }
        }
        @keyframes heroBubbleThree {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(50px,40px); }
        }
        @keyframes heroBubbleFour {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-45px,-30px) scale(1.12); }
        }
        @keyframes heroBubbleFive {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(30px,-35px); }
        }
        @keyframes heroBubbleSix {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-35px,30px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="heroBubble"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;