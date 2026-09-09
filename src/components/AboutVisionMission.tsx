import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    icon: (
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Bus Tracking App",
    description:
      "Live GPS tracking and stop announcements for private bus commuters.",
    href: "/#home",
  },
  {
    icon: (
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
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422A12.083 12.083 0 0121 17.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.5a12.083 12.083 0 012.84-6.922L12 14z"
        />
      </svg>
    ),
    title: "School Bus Tracking",
    description:
      "A dedicated tracking system that lets parents follow their child's school bus.",
    href: "/school-bus-tracking",
  },
  {
    icon: (
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
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "AIS-140 Distribution",
    description:
      "Certified AIS-140 GPS devices, supplied and installed for fleet operators.",
    href: "/ais-140-distribution",
  },
];

const AboutVisionMission = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About / Company Intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-2 bg-evide-blue/10 text-evide-blue font-semibold rounded-full text-sm mb-4">
              Who we are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-evide-dark leading-tight">
              Built on the roadside,
              <br />
              not in a boardroom
            </h2>
          </div>
          <div className="reveal lg:pt-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              Evide started in Kerala with a simple, everyday frustration:
              watching a private bus pull away with no way of knowing when
              the next one would arrive. That question became a company —
              one built around making sure every bus, and everyone waiting
              on one, always has an answer.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Today that means live tracking for daily commuters, a
              dedicated safety layer for school buses, and the certified
              hardware operators need to run compliant, trackable fleets.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 lg:mb-20">
          <div className="reveal bg-evide-light rounded-3xl p-8 lg:p-10">
            <h3 className="text-xl font-bold text-evide-dark mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A Kerala where no commuter, parent, or operator ever has to
              guess where a bus is — every private bus tracked, every
              school bus accounted for, every fleet properly equipped.
            </p>
          </div>
          <div className="reveal bg-evide-light rounded-3xl p-8 lg:p-10">
            <h3 className="text-xl font-bold text-evide-dark mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We build and supply the technology that makes this real: a
              free live-tracking app for private bus commuters, a dedicated
              tracking system that keeps parents informed on the school
              run, and AIS-140 certified devices for operators who need
              reliable, compliant hardware.
            </p>
          </div>
        </div>

        {/* Product Overview */}
        <div className="reveal">
          <h3 className="text-2xl sm:text-3xl font-bold text-evide-dark mb-8">
            What we build
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.title}
                to={product.href}
                className="group flex flex-col p-6 rounded-2xl border border-gray-100 hover:border-evide-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-evide-blue/10 rounded-xl flex items-center justify-center text-evide-blue mb-5 group-hover:bg-evide-blue group-hover:text-white transition-all duration-300">
                  {product.icon}
                </div>
                <h4 className="font-bold text-evide-dark mb-2">
                  {product.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <span className="mt-auto text-sm font-semibold text-evide-blue">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
