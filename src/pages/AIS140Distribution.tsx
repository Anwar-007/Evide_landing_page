import ProductPage from "../components/ProductPage";
import { BusFront } from "lucide-react";

const highlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "AIS-140 Certified",
    sublabel: "Meets government tracking standards",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "4G Connectivity",
    sublabel: "Faster and more reliable than older devices",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.38a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: "Professional Install",
    sublabel: "Fitted on your vehicles by our team",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    label: "Ongoing Support",
    sublabel: "Renewal and maintenance handled for you",
  },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Certified Devices",
    description:
      "We supply AIS-140 compliant GPS devices, meeting the government-mandated tracking standard for commercial vehicles.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Installation",
    description:
      "Our team handles fitting on every vehicle, including labor, transport, and materials — so operators don't have to.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Renewal & Support",
    description:
      "We manage annual device renewal and ongoing support, so devices stay active and connected year after year.",
  },
];

const benefitGroups = [
  {
    title: "For Fleet Operators",
    subtitle: "Compliant hardware, handled end-to-end",
    iconBg: "bg-linear-to-br from-evide-blue to-blue-600",
    icon: <BusFront className="w-7 h-7 text-white" strokeWidth={2} />,
    benefits: [
      {
        title: "Regulatory compliance",
        description: "Devices meet the AIS-140 standard required for commercial vehicle tracking.",
      },
      {
        title: "Reliable connectivity",
        description: "4G devices give more consistent location updates than older-generation hardware.",
      },
      {
        title: "Installation included",
        description: "We install every device — labor, transport, and materials are all handled by our team.",
      },
      {
        title: "Support that doesn't stop at install",
        description: "We manage subscription renewal and device support after the first year.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is AIS-140?",
    answer:
      "AIS-140 is the government-mandated GPS tracking standard for commercial and public service vehicles in India, covering location reporting and emergency features.",
  },
  {
    question: "Do you install the devices, or do we?",
    answer:
      "Our team handles installation on every vehicle, including labor, transport, and materials.",
  },
  {
    question: "What happens after the first year?",
    answer:
      "Each device is renewed annually to keep it active and connected. We manage this renewal directly.",
  },
  {
    question: "Which vehicles is this for?",
    answer:
      "Any commercial or private fleet vehicle that needs AIS-140 compliant GPS tracking, including buses and other passenger vehicles.",
  },
];

const AIS140Distribution = () => {
  return (
    <ProductPage
      eyebrow="For Fleet Operators"
      title={
        <>
          AIS-140 GPS devices,{" "}
          <span className="text-yellow-300">supplied and installed</span>
        </>
      }
      description="Certified AIS-140 tracking devices for commercial and private fleets — sourced, installed, and supported by Evide."
      heroIconFullSize
      heroIcon={
        <img
          src="/AIS-140-gps-tracker.png"
          alt="AIS-140 GPS tracker"
          className="w-full h-full object-cover rounded-3xl"
        />
      }
      highlights={highlights}
      featuresEyebrow="Why Operators Choose Evide"
      featuresTitle={
        <>
          Compliant hardware,{" "}
          <span className="text-evide-blue">handled end-to-end</span>
        </>
      }
      features={features}
      benefitGroups={benefitGroups}
      faqs={faqs}
      ctaTitle="Get AIS-140 devices for your fleet"
      ctaDescription="Talk to us about device availability and installation for your vehicles."
    />
  );
};

export default AIS140Distribution;
