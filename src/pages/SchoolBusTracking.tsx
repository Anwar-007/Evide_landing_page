import ProductPage from "../components/ProductPage";

const HeroIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z"
    />
    <circle cx="7.5" cy="15.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="15.5" r="1.5" fill="currentColor" stroke="none" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 11h12V6H6v5z" />
  </svg>
);

const highlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "4G GPS Devices",
    sublabel: "Faster and more reliable than older devices",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "Parent Login",
    sublabel: "Track by student ID & school ID",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 17.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.5a12.083 12.083 0 012.84-6.922L12 14z" />
      </svg>
    ),
    label: "Built for Schools",
    sublabel: "Rolled out with school management",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Live Location",
    sublabel: "Real-time bus position, always on",
    live: true,
  },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Real-Time GPS Tracking",
    description:
      "Every bus is fitted with a 4G GPS device, giving faster and more reliable location updates than older tracking hardware.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Secure Parent Access",
    description:
      "Parents log in with their child's student ID and the school's ID to see the bus in real time — nothing else is required.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Managed With the School",
    description:
      "We work directly with school administration to roll out devices, onboard buses, and support parents — not with students or parents individually.",
  },
];

const benefitGroups = [
  {
    title: "For School Management",
    subtitle: "One system, the whole fleet",
    iconBg: "bg-linear-to-br from-evide-blue to-blue-600",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    benefits: [
      {
        title: "Single point of oversight",
        description: "See every school bus on one system instead of managing calls and complaints individually.",
      },
      {
        title: "Fewer safety queries",
        description: "Parents check the app instead of calling the school office to ask where the bus is.",
      },
      {
        title: "Simple rollout",
        description: "We handle device supply, installation, and parent onboarding directly with your team.",
      },
    ],
  },
  {
    title: "For Parents",
    subtitle: "Peace of mind, every trip",
    iconBg: "bg-linear-to-br from-green-500 to-emerald-600",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    benefits: [
      {
        title: "Know where your child is",
        description: "Log in with the student ID and school ID to see the bus location in real time.",
      },
      {
        title: "No more waiting at the gate",
        description: "Time your pickup or drop-off around the bus's actual position, not a fixed schedule.",
      },
      {
        title: "One less thing to worry about",
        description: "A clear, live view of the school run, provided directly by the school.",
      },
    ],
  },
];

const faqs = [
  {
    question: "How does the tracking work?",
    answer:
      "Each school bus is fitted with a 4G GPS device that reports its live location. Parents view this location through a login tied to their child's student ID and the school's ID.",
  },
  {
    question: "Who installs and manages the devices?",
    answer:
      "Evide handles device supply and installation on every bus, and works directly with school administration for rollout and ongoing support.",
  },
  {
    question: "How do parents get access?",
    answer:
      "Once a school signs on, the school shares login details (student ID and school ID) with parents. No separate signup is needed.",
  },
  {
    question: "Is this the same as the Evide bus tracking app?",
    answer:
      "No — this is a dedicated system built specifically for school transport, separate from Evide's public bus tracking app for private bus commuters.",
  },
];

const SchoolBusTracking = () => {
  return (
    <ProductPage
      eyebrow="For Schools"
      title={
        <>
          School bus tracking{" "}
          <span className="text-yellow-300">parents can trust</span>
        </>
      }
      description="A dedicated tracking system built for school transport, so schools can offer real safety and parents always know where their child's bus is."
      heroIcon={<HeroIcon />}
      highlights={highlights}
      featuresEyebrow="Why Schools Choose Evide"
      featuresTitle={
        <>
          Everything a school needs to{" "}
          <span className="text-evide-blue">track its fleet</span>
        </>
      }
      features={features}
      benefitGroups={benefitGroups}
      faqs={faqs}
      ctaTitle="Bring school bus tracking to your campus"
      ctaDescription="We work directly with school management to plan rollout, installation, and parent onboarding."
    />
  );
};

export default SchoolBusTracking;
