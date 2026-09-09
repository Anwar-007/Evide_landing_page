import { useState, useEffect, useRef, useCallback } from "react";

const LoopingVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    // Seek back ~0.1s before the end to avoid the brief blank frame on loop
    if (video.duration - video.currentTime < 0.15) {
      video.currentTime = 0;
      video.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src="/tracking.mp4"
      autoPlay
      muted
      playsInline
      onTimeUpdate={handleTimeUpdate}
      className="w-full h-full object-contain"
    />
  );
};

const screenshots = [
  {
    id: 1,
    title: "Get Started",
    description: "Simple onboarding — open the app and you're ready to track",
    screen: (
      <img
        src="/entry.PNG"
        alt="Entry Screen"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    id: 2,
    title: "Home Screen",
    description:
      "Live map with real-time bus locations and your current position",
    screen: (
      <div className="relative w-full h-full">
        {/* Blue background for top half */}
        <div className="absolute inset-0 bottom-2/3 bg-evide-blue" />
        {/* Image on top */}
        <img
          src="/home.PNG"
          alt="Home Screen"
          className="relative w-full h-full object-contain z-10"
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Search Routes",
    description: "Find bus routes by stop name, route number, or destination",
    screen: (
      <img
        src="/search.PNG"
        alt="Search Screen"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    id: 4,
    title: "Live Tracking",
    description:
      "Watch your bus move in real-time — know exactly when it arrives",
    screen: <LoopingVideo />,
  },
];

const Screenshots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-advance on desktop only
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle touch swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeIndex < screenshots.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="screenshots"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-evide-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — split layout: label left, heading right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <p className="text-evide-blue font-semibold text-sm uppercase tracking-widest mb-3">
              App Preview
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              See it
              <br className="hidden lg:block" />{" "}
              <span className="text-evide-blue">in action</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base lg:text-lg lg:max-w-xs lg:text-right">
            Four screens. That's all it takes to go from a bus stop to knowing
            exactly when your ride arrives.
          </p>
        </div>

        {/* Mobile Carousel - Peek Style */}
        <div className="lg:hidden overflow-hidden">
          <div
            ref={carouselRef}
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Carousel Container */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(50% - 140px - ${
                  activeIndex * 292
                }px))`,
              }}
            >
              {screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.id}
                  className="shrink-0 w-70 mx-1.5"
                  onClick={() => goToSlide(index)}
                >
                  {/* Card with Phone + Info */}
                  <div
                    className={`bg-linear-to-b from-white/10 to-white/5 rounded-3xl p-5 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                      activeIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-50"
                    }`}
                  >
                    {/* Phone Mockup */}
                    <div className="flex justify-center mb-5">
                      <div className="relative w-44 h-85 bg-gray-800 rounded-[1.75rem] p-2 shadow-2xl">
                        {/* Screen */}
                        <div className="w-full h-full bg-white rounded-[1.25rem] overflow-hidden">
                          {/* Status Bar */}
                          <div className="h-5 bg-gray-100 flex items-center justify-between px-3 pt-0.5">
                            <span className="text-gray-800 text-[7px] font-medium">
                              9:41
                            </span>
                            <div className="w-2 h-1 bg-gray-800 rounded-sm" />
                          </div>
                          {/* Screen Content */}
                          <div className="h-[calc(100%-20px)]">
                            {screenshot.screen}
                          </div>
                        </div>
                        {/* Notch */}
                        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-14 h-3 bg-gray-800 rounded-b-lg" />
                      </div>
                    </div>

                    {/* Screenshot Info */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-evide-blue rounded-full text-white font-bold text-sm mb-2">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Progress Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  activeIndex === index
                    ? "w-6 h-2 bg-evide-blue"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main Phone */}
              <div className="relative w-56 sm:w-64 h-112.5 sm:h-125 bg-gray-800 rounded-[2.5rem] p-3 shadow-2xl z-10">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-4xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-7 bg-gray-100 flex items-center justify-between px-4 pt-1">
                    <span className="text-gray-800 text-[10px] font-medium">
                      9:41
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-1.5 bg-gray-800 rounded-sm" />
                    </div>
                  </div>
                  {/* Screen Content */}
                  <div className="h-[calc(100%-28px)] bg-white">
                    {screenshots[activeIndex].screen}
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-xl z-20" />
              </div>

              {/* Secondary Phones (Background) */}
              <div className="absolute -left-20 top-10 w-40 h-87.5 bg-gray-700 rounded-4xl p-2 opacity-30 -rotate-12 hidden lg:block z-0">
                <div className="w-full h-full bg-gray-300 rounded-3xl overflow-hidden relative">
                  {/* Notch for left bg phone */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gray-700 rounded-b-lg z-10" />
                </div>
              </div>
              <div className="absolute -right-20 top-10 w-40 h-87.5 bg-gray-700 rounded-4xl p-2 opacity-30 rotate-12 hidden lg:block z-0">
                <div className="w-full h-full bg-gray-300 rounded-3xl overflow-hidden relative">
                  {/* Notch for right bg phone */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gray-700 rounded-b-lg z-10" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-20 bg-evide-blue/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Screenshot Info */}
          <div className="space-y-6">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-evide-blue/20 border-l-4 border-evide-blue"
                    : "bg-white/5 hover:bg-white/10 border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${
                      activeIndex === index
                        ? "bg-evide-blue text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg mb-1 transition-colors ${
                        activeIndex === index ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {screenshot.title}
                    </h3>
                    <p
                      className={`text-sm transition-colors ${
                        activeIndex === index
                          ? "text-gray-300"
                          : "text-gray-500"
                      }`}
                    >
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 pt-4">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? "w-8 bg-evide-blue"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
