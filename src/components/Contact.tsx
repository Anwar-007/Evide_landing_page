import { useState, useRef, useEffect } from "react";
import { INSTAGRAM_LINK, LINKEDIN_LINK } from "../constants/downloadLinks";

interface FormData {
  name: string;
  email: string;
  message: string;
  bugDescription?: string;
  stepsToReproduce?: string;
  deviceInfo?: string;
}

const Contact = () => {
  const [activeTab, setActiveTab] = useState<"feedback" | "bug">("feedback");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    bugDescription: "",
    stepsToReproduce: "",
    deviceInfo: "",
  });
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
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Feedback for Evide");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:teamevideai@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleBugSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Bug Report - Evide");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nBug Description:\n${formData.bugDescription}\n\nSteps to Reproduce:\n${formData.stepsToReproduce}\n\nDevice/App Version:\n${formData.deviceInfo}`,
    );
    window.location.href = `mailto:teamevideai@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — no badge, more direct */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-evide-dark">
            Get in <span className="text-evide-blue">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Questions, feedback, or found a bug? Reach us — we typically respond
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 reveal">
            <div className="bg-linear-to-br from-evide-blue to-blue-700 rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Reach out to us through any of these channels. We typically
                respond within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:teamevideai@gmail.com"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      teamevideai@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a
                      href="tel:+919947496965"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      +91 9947496965
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Support Hours</div>
                    <p className="text-white/80">Mon-Sat: 9 AM - 8 PM</p>
                    <p className="text-white/80">Sunday: 10 AM - 6 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="font-semibold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href={LINKEDIN_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Forms Section */}
          <div className="lg:col-span-3 reveal">
            <div className="bg-evide-light rounded-3xl p-8">
              {/* Tab Switcher */}
              <div className="flex bg-white rounded-xl p-1 mb-8">
                <button
                  onClick={() => setActiveTab("feedback")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                    activeTab === "feedback"
                      ? "bg-evide-blue text-white"
                      : "text-gray-600 hover:text-evide-blue"
                  }`}
                >
                  Share Feedback
                </button>
                <button
                  onClick={() => setActiveTab("bug")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                    activeTab === "bug"
                      ? "bg-evide-blue text-white"
                      : "text-gray-600 hover:text-evide-blue"
                  }`}
                >
                  Report a Bug
                </button>
              </div>

              {/* Feedback Form */}
              {activeTab === "feedback" && (
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="feedback-name"
                        className="block text-sm font-medium text-evide-dark mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="feedback-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="feedback-email"
                        className="block text-sm font-medium text-evide-dark mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="feedback-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="feedback-message"
                      className="block text-sm font-medium text-evide-dark mb-2"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="feedback-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all resize-none"
                      placeholder="Share your thoughts, suggestions, or ideas..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-evide-blue text-white font-semibold rounded-xl hover:bg-evide-blue/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Feedback
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
              )}

              {/* Bug Report Form */}
              {activeTab === "bug" && (
                <form onSubmit={handleBugSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="bug-name"
                        className="block text-sm font-medium text-evide-dark mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="bug-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bug-email"
                        className="block text-sm font-medium text-evide-dark mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="bug-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="bug-description"
                      className="block text-sm font-medium text-evide-dark mb-2"
                    >
                      Bug Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="bug-description"
                      name="bugDescription"
                      required
                      rows={4}
                      value={formData.bugDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all resize-none"
                      placeholder="Describe what went wrong..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bug-steps"
                      className="block text-sm font-medium text-evide-dark mb-2"
                    >
                      Steps to Reproduce (optional)
                    </label>
                    <textarea
                      id="bug-steps"
                      name="stepsToReproduce"
                      rows={3}
                      value={formData.stepsToReproduce}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all resize-none"
                      placeholder="1. Open the app&#10;2. Navigate to...&#10;3. Click on..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bug-device"
                      className="block text-sm font-medium text-evide-dark mb-2"
                    >
                      Device / App Version (optional)
                    </label>
                    <input
                      type="text"
                      id="bug-device"
                      name="deviceInfo"
                      value={formData.deviceInfo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-evide-blue focus:border-transparent transition-all"
                      placeholder="e.g., iPhone 14 Pro, iOS 17, App v2.1.0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Report Bug
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
