import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, Monitor, Shield, Zap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Pricing from './Pricing';
import Features from './Features';
import FAQ from './FAQ';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Switzerland IPTV – Stream 10,000+ Channels in HD & 4K</title>
        <meta name="description" content="Discover a smarter way to watch television with premium Switzerland IPTV. Stream 10,000+ live Swiss and global channels in HD & 4K without buffer." />
        <link rel="canonical" href="https://iptvswitzerland.cloud/" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '80px',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(232, 67, 147, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }} className="floating"></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(46, 204, 113, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          animationDelay: '2s'
        }} className="floating"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', alignSelf: 'flex-start' }}>
              <span style={{ color: 'var(--color-yellow)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} fill="var(--color-yellow)" /> #1 Rated IPTV Provider in Switzerland
              </span>
            </div>
            
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1.1 }}>
              Switzerland IPTV <br/>
              <span className="text-gradient">Stream 10,000+ Channels</span> <br/>
              in Crystal-Clear HD & 4K
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', lineHeight: 1.6 }}>
              Discover a smarter way to watch television with our premium Switzerland IPTV service, purpose-built for Swiss households and expats craving seamless, high-definition entertainment. From live Swiss national broadcasts to global sports, news, and cinema — all delivered instantly over your existing internet connection without bulky hardware or long-term contracts.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '10px' }}>
              <a href="https://wa.me/447412300833" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                <Play size={20} fill="currentColor" /> Start Watching Now
              </a>
              <a href="https://wa.me/447412300833" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                Setup Guide
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="var(--color-green)" /> No long-term contracts
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="var(--color-green)" /> Instant Activation
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="var(--color-green)" /> 99.9% Uptime Server
              </div>
            </div>
            </div>

          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div className="glass-panel" style={{ 
              padding: '30px', 
              borderRadius: '24px', 
              position: 'relative', 
              zIndex: 2,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>Premium Features Overview</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '20px', lineHeight: 1.6 }}>
                Our IPTV Switzerland platform supports every major device including <strong>Smart TVs, Firestick, Android boxes, iPhones, and MAG devices</strong>, giving you total freedom over how and where you watch. Activate your subscription within minutes and enjoy a zero-buffer streaming experience backed by servers optimized specifically for Switzerland's network infrastructure.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(46, 204, 113, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Monitor size={24} color="var(--color-green)" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '1.2rem' }}>All Devices</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Smart TV, PC, Mobile</p>
                  </div>
                </div>
                
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(232, 67, 147, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shield size={24} color="var(--color-pink)" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '1.2rem' }}>Anti-Freeze</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Zero Buffering Tech</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(241, 196, 15, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Calendar size={24} color="var(--color-yellow)" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '1.2rem' }}>Catch-Up</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>7 Days Replay TV</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(230, 126, 34, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Zap size={24} color="var(--color-orange)" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '1.2rem' }}>4K/HD Quality</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Crystal Clear Picture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background shapes for card */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              background: 'var(--accent-gradient)',
              zIndex: 1,
              transform: 'rotate(15deg)'
            }} className="floating"></div>
             <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-20px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'var(--color-green)',
              zIndex: 1,
              opacity: 0.6,
              animationDelay: '1s'
            }} className="floating"></div>
          </motion.div>
        </div>
        
        {/* Mobile stacking adjustments via inline style tags for simplicity in standard react */}
        <style>{`
          @media (max-width: 992px) {
            .hero .container {
              grid-template-columns: 1fr !important;
              text-align: center;
              padding-top: 40px;
            }
            .hero h1 {
              font-size: 2.8rem !important;
            }
            .hero p {
              margin: 0 auto;
            }
            .hero .btn {
              width: 100%;
            }
            .hero > div > div:first-child {
              align-items: center;
            }
            .hero > div > div:first-child > div:first-child {
              align-self: center !important;
            }
            .hero > div > div:first-child > div:last-child {
              justify-content: center;
            }
            .hero > div > div:nth-child(2) > div:first-child > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
      
      <Pricing isEmbedded={true} />
      <Features isEmbedded={true} />
      <FAQ isEmbedded={true} />
    </>
  );
};

export default Home;
