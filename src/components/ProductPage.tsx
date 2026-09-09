import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";

export interface ProductHighlight {
  icon: ReactNode;
  label: string;
  sublabel: string;
  live?: boolean;
}

export interface ProductFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProductBenefitGroup {
  title: string;
  subtitle: string;
  iconBg: string;
  icon: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePlain?: boolean;
  benefits: { title: string; description: string }[];
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

interface ProductPageProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  heroIcon: ReactNode;
  heroIconFullSize?: boolean;
  heroIconPlain?: boolean;
  showScrollIndicator?: boolean;
  highlights: ProductHighlight[];
  featuresEyebrow: string;
  featuresTitle: ReactNode;
  features: ProductFeature[];
  benefitGroups: ProductBenefitGroup[];
  faqs: ProductFAQ[];
  ctaTitle: string;
  ctaDescription: string;
}

const RevealSection = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
};

const ProductPage = ({
  eyebrow,
  title,
  description,
  heroIcon,
  heroIconFullSize = false,
  heroIconPlain = false,
  showScrollIndicator = false,
  highlights,
  featuresEyebrow,
  featuresTitle,
  features,
  benefitGroups,
  faqs,
  ctaTitle,
  ctaDescription,
}: ProductPageProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-linear-to-br from-evide-blue via-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-white/15 text-white font-semibold rounded-full text-sm mb-6">
                {eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {title}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <Link
                  to="/#contact"
                  className="px-8 py-4 bg-white text-evide-dark font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              {heroIconPlain ? (
                <div className="hero-art-stage w-fit h-[33rem] flex items-center justify-center">
                  <div className="w-fit h-full">{heroIcon}</div>
                </div>
              ) : (
                <div className="w-64 h-64 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                  <div className={heroIconFullSize ? "w-full h-full" : "w-28 h-28"}>{heroIcon}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {showScrollIndicator && (
          <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a
              href="#features"
              className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        )}
      </section>

      {/* Highlights strip */}
      <div className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-100">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 lg:px-10 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="w-14 h-14 bg-evide-blue/10 rounded-2xl flex items-center justify-center text-evide-blue shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-evide-dark text-base leading-tight flex items-center gap-2">
                    {item.label}
                    {item.live && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-evide-amber opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-evide-amber" />
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 text-sm mt-1 leading-tight">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <RevealSection id="features" className="py-16 lg:py-24 bg-linear-to-b from-white to-evide-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <span className="inline-block px-4 py-2 bg-evide-blue/10 text-evide-blue font-semibold rounded-full text-sm mb-4">
              {featuresEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-evide-dark">
              {featuresTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-evide-blue/10 text-evide-blue flex items-center justify-center mb-6 group-hover:bg-evide-blue group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-evide-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Benefits */}
      <RevealSection className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-8 lg:gap-12 ${
              benefitGroups.length > 1 ? "lg:grid-cols-2" : "max-w-2xl mx-auto"
            }`}
          >
            {benefitGroups.map((group, gi) => (
              <div
                key={gi}
                className="reveal bg-white rounded-3xl p-8 border border-gray-100"
              >
                {group.image && (
                  <img
                    src={group.image}
                    alt={group.imageAlt ?? ""}
                    className={`w-full h-64 object-contain mb-8 ${group.imagePlain ? "" : "rounded-2xl bg-evide-light"}`}
                  />
                )}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-14 h-14 ${group.iconBg} rounded-2xl flex items-center justify-center`}
                  >
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-evide-dark">
                      {group.title}
                    </h3>
                    <p className="text-gray-500">{group.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {group.benefits.map((benefit, bi) => (
                    <div key={bi} className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-evide-blue shrink-0" />
                      <div>
                        <h4 className="font-semibold text-evide-dark mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* FAQ */}
      <ProductFAQSection faqs={faqs} />

      {/* CTA */}
      <div className="py-16 lg:py-20 bg-evide-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-evide-dark mb-4">
            {ctaTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-evide-blue text-white font-semibold rounded-xl hover:bg-evide-blue/90 transition-all duration-300 hover:shadow-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

const ProductFAQSection = ({ faqs }: { faqs: ProductFAQ[] }) => {
  return (
    <RevealSection className="py-16 lg:py-24 bg-evide-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-evide-dark mb-3">
            Questions?
          </h2>
          <p className="text-lg text-gray-500">
            We've answered the most common ones below.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-evide-blue/30 transition-all duration-300"
            >
              <summary className="w-full flex items-center justify-between p-6 text-left cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-evide-dark pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="w-6 h-6 text-evide-blue shrink-0 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default ProductPage;
