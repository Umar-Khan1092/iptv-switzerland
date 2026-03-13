import { Helmet } from 'react-helmet-async';
// motion removed for performance
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 25px',
          background: isOpen ? 'rgba(46, 204, 113, 0.1)' : 'rgba(255,255,255,0.03)',
          border: '1px solid',
          borderColor: isOpen ? 'var(--color-green)' : 'var(--glass-border)',
          borderRadius: isOpen ? '16px 16px 0 0' : '16px',
          color: 'var(--color-white)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '1.1rem', fontWeight: '600', paddingRight: '20px' }}>{question}</span>
        <div
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <ChevronDown size={24} color={isOpen ? 'var(--color-green)' : 'var(--color-white)'} />
        </div>
      </button>

      <div
        style={{ 
          overflow: 'hidden',
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.4s ease-in-out'
        }}
      >
        <div style={{
          padding: '25px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--color-green)',
          borderTop: 'none',
          borderRadius: '0 0 16px 16px',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.6,
          fontSize: '1rem'
        }}>
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ isEmbedded = false }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What exactly is Switzerland IPTV and how is it different from traditional Swiss cable television?",
      a: "Switzerland IPTV (Internet Protocol Television) is a modern content delivery method that transmits live television channels, on-demand movies, and sports programming directly through your broadband internet connection — completely replacing the need for a physical cable box, satellite dish, or coaxial wiring. Unlike traditional cable packages that require expensive hardware installation and lengthy contracts, Switzerland IPTV gives you immediate access to 10,000+ live channels including SRF 1, SRF zwei, RTS Un, RTS Deux, RSI LA 1, and hundreds of international sports and entertainment networks on any device. The monthly cost is typically 60–80% lower than traditional Swiss cable subscriptions, with zero long-term contracts."
    },
    {
      q: "Which Swiss national channels are included in an iptvswitzerland.cloud subscription?",
      a: "An iptvswitzerland.cloud subscription includes all major Swiss national broadcast channels across all four language regions. German-speaking subscribers receive SRF 1, SRF zwei, SRF info, 3+, and regional channels. French speakers access RTS Un, RTS Deux, and Canal 9. Italian speakers in Ticino receive RSI LA 1, RSI LA 2, and Teleticino. Beyond Swiss television, every tier includes premium international sports packages, European entertainment networks, global news channels from over 50 countries, and a refreshed VOD library of 50,000+ titles."
    },
    {
      q: "What internet speed do I need to stream Switzerland IPTV without any buffering or freezing?",
      a: "Standard Definition (SD) streams perform well at a minimum of 5 Mbps. High Definition (HD 720p) delivers reliably at 10 Mbps, while Full HD (1080p) streams smoothly at 15–20 Mbps. For 4K Ultra HD content, we recommend a stable minimum of 25 Mbps. Most Swiss subscribers through Swisscom, Sunrise, or Salt already comfortably exceed these requirements. For the most consistent experience, connecting your device directly to your router via Ethernet cable eliminates the most common causes of Wi-Fi buffering."
    },
    {
      q: "Which devices are compatible with iptvswitzerland.cloud and can I watch on multiple screens simultaneously?",
      a: "Our service functions seamlessly across every major streaming platform. Supported devices include Android smartphones, tablets, and TV boxes; iPhones and iPads; Apple TV; Amazon Fire TV Stick/Cube; Samsung Smart TVs (Tizen OS); LG Smart TVs (WebOS); Android TVs; Formuler boxes; MAG devices; Windows PCs; and macOS computers. Depending on your subscription plan, your account supports up to 5 simultaneous connections."
    },
    {
      q: "How quickly can I start watching Switzerland IPTV after subscribing, and is the setup process complicated?",
      a: "Your subscription is active within minutes of completing payment. Account credentials and your server URL are delivered directly to your email typically within 2–5 minutes. Setup on most devices takes under five minutes using your preferred IPTV player application via the Xtream Codes API login method. No engineer visit or hardware installation is needed, and our 24/7 multilingual support team is ready to guide you."
    },
    {
      q: "Is Switzerland IPTV available for Swiss expats and international subscribers living outside Switzerland?",
      a: "Yes. iptvswitzerland.cloud is fully accessible to Swiss nationals living abroad and international subscribers anywhere in the world. Our server infrastructure operates through a globally distributed Content Delivery Network (CDN), ensuring low-latency stream delivery regardless of your physical location without any geo-restrictions."
    },
    {
      q: "What streaming quality can I expect, and does iptvswitzerland.cloud genuinely support 4K Ultra HD?",
      a: "We deliver the complete resolution spectrum — from SD through HD 720p, Full HD 1080p, and genuine 4K Ultra HD. Our platform uses adaptive bitrate (ABR) streaming technology that continuously monitors your connection and dynamically adjusts stream resolution to prevent buffering."
    },
    {
      q: "How does iptvswitzerland.cloud pricing compare to Swiss cable TV providers like Swisscom TV and UPC?",
      a: "An iptvswitzerland.cloud subscription delivers 10,000+ live channels, 50,000+ VODs, 4K streaming, and multi-device support at a fraction of the cost of traditional providers. There are no mandatory hardware rentals, no installation costs, and no compulsory 12–24 month contract obligations. You have the freedom to cancel at any time penalty-free."
    },
    {
      q: "What happens if I experience a technical issue with my Switzerland IPTV service — how responsive is support?",
      a: "We operate a dedicated 24/7 technical support team available around the clock through live chat and email. Our multilingual team handles inquiries in English, German, French, and Italian. The overwhelming majority of issues are resolved within 30 minutes. A comprehensive self-service knowledge base is also available."
    },
    {
      q: "Is my personal data and payment information secure when subscribing to iptvswitzerland.cloud?",
      a: "Our platform operates in full compliance with the Swiss Federal Act on Data Protection (nFADP 2023) and the EU GDPR. Data is secured using TLS 1.3 encryption. Passwords are stored exclusively as bcrypt hashes, and payment processing is handled entirely by PCI DSS Level 1-certified third-party processors. We never store or access your full card details."
    },
    {
      q: "Can I try Switzerland IPTV completely free before committing to a paid subscription?",
      a: "Absolutely. Every new subscriber is entitled to a completely free trial of the full service — no credit card required. The free trial provides unrestricted access to the complete library including live channels, VODs, and Catch-up TV. Activating your free trial takes under two minutes on our homepage."
    }
  ];

  return (
    <>
      {!isEmbedded && (
        <Helmet>
          <title>Frequently Asked Questions – Switzerland IPTV</title>
          <meta name="description" content="Find answers to all your questions about Switzerland IPTV, compatible devices, internet requirements, channel lineup, and our 4K streaming platform." />
          <link rel="canonical" href="https://iptvswitzerland.cloud/faq" />
        </Helmet>
      )}

      <section className="section" style={{ paddingTop: isEmbedded ? '60px' : '120px', paddingBottom: isEmbedded ? '60px' : undefined }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{ padding: '15px', background: 'rgba(232, 67, 147, 0.1)', borderRadius: '20px' }}>
                <MessageCircleQuestion size={40} color="var(--color-pink)" />
              </div>
            </div>
            {isEmbedded ? (
              <h2 className="section-title">Frequently Asked Questions</h2>
            ) : (
              <h1 className="section-title">Frequently Asked Questions</h1>
            )}
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>
              Everything you need to know about iptvswitzerland.cloud
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQ;
