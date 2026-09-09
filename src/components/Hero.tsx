const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-evide-blue via-blue-600 to-blue-800 animate-gradient"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bus Icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float animation-delay-200">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-20 animate-float animation-delay-400">
          <svg
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-float animation-delay-600">
          <svg
            className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>

        {/* Animated Route Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q25,20 50,50 T100,50"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
          <path
            d="M0,70 Q30,40 60,70 T100,70"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
            strokeDasharray="3,3"
            className="animate-pulse animation-delay-200"
          />
        </svg>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Real-Time Bus Tracking{" "}
              <span className="text-yellow-300">Made Simple</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Know exactly when your bus arrives. Track private buses in real
              time - live location, stop announcements, and accurate ETAs, all
              in one free app.
            </p>

            {/* CTA Buttons */}
            <div
              id="download"
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.evide.evide_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-evide-dark font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse-glow"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">GET IT ON</div>
                  <div className="text-lg font-bold -mt-1">Google Play</div>
                </div>
              </a>

              <a
                href="https://apps.apple.com/mo/app/evide/id6756627835?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-evide-dark text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-lg font-bold -mt-1">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in animation-delay-400">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-56 sm:w-64 h-120 sm:h-130 bg-gray-900 rounded-[3rem] p-3 shadow-2xl animate-float">
                {/* Screen */}
                <div className="w-full h-full bg-evide-blue rounded-[2.5rem] overflow-hidden relative flex items-center justify-center">
                  {/* Animated Logo Splash */}
                  <div className="animate-fade-in-up animation-delay-600">
                    <img
                      src="/evide.svg"
                      alt="Evide Logo"
                      className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-2xl animate-pulse-glow"
                    />
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-10 bg-gray-900 rounded-b-2xl z-20" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-10 bg-evide-blue/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#features"
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
