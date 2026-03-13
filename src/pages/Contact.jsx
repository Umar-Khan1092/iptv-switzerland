import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message. We'll be in touch shortly.");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – Switzerland IPTV Support</title>
        <meta name="description" content="Reach out to the Switzerland IPTV 24/7 technical support team. Contact us via email or WhatsApp for installation, troubleshooting, and setup." />
        <link rel="canonical" href="https://iptvswitzerland.cloud/contact" />
      </Helmet>

      <section className="section" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Get in Touch</h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>
              Our dedicated multilingual customer support team is available 24 hours a day, 7 days a week to assist Switzerland IPTV subscribers with installation, troubleshooting, and account management.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '15px' }}>
                  <Mail size={32} color="var(--color-green)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-white)', marginBottom: '5px' }}>Email Support</h4>
                  <a href="mailto:support@gmail.com" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>support@gmail.com</a>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(232, 67, 147, 0.1)', borderRadius: '15px' }}>
                  <Phone size={32} color="var(--color-pink)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-white)', marginBottom: '5px' }}>WhatsApp (24/7)</h4>
                  <a href="https://wa.me/447412300833" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>+44 7412 300833</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass-panel" style={{ padding: '40px', borderTop: '4px solid var(--color-yellow)' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px' }}>Send a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'rgba(255,255,255,0.9)' }}>Full Name</label>
                  <input type="text" id="name" required style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--color-white)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-green)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'rgba(255,255,255,0.9)' }}>Email Address</label>
                  <input type="email" id="email" required style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--color-white)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-green)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'rgba(255,255,255,0.9)' }}>Your Message</label>
                  <textarea id="message" required rows="5" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--color-white)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-green)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}></textarea>
                </div>

                <a href="https://wa.me/447412300833" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', boxSizing: 'border-box' }}>
                  <Send size={18} /> Send Message
                </a>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;
