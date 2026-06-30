import { FaInstagram, FaTiktok, FaYoutube, FaPinterest } from "react-icons/fa6";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with YK Homes. Fill out our consultation questionnaire and start your interior design project today.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-[var(--primary-dark)]">
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
            YK Homes Design Studio
          </p>
          <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl font-light text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Ready to start your project? Fill out our consultation questionnaire
            and we&apos;ll be in touch.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 bg-[var(--primary-light)]">
        <div className="max-w-4xl mx-auto bg-white/50 p-2 md:p-8 rounded-2xl shadow-sm border border-[var(--primary-dark)]/5">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYFHk-TcV73YLP5JALpshLsN_DPcEt0nY6XtcWwNjs5z4X0g/viewform?embedded=true" 
            width="100%" 
            height="732" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            title="YK Homes Consultation Questionnaire"
            className="rounded-lg w-full"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
              Contact
            </h3>
            <p className="text-white text-lg">+254-792-516-691</p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
              Address
            </h3>
            <p className="text-white text-lg">Karen Village, Nairobi</p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/yk_homes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[var(--accent)] transition-colors"
              >
                <FaInstagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@yk_homes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[var(--accent)] transition-colors"
              >
                <FaTiktok size={20} />
                <span>TikTok</span>
              </a>
              <a
                href="https://www.youtube.com/@ykhomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[var(--accent)] transition-colors"
              >
                <FaYoutube size={20} />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.pinterest.com/ykhomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[var(--accent)] transition-colors"
              >
                <FaPinterest size={20} />
                <span>Pinterest</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
