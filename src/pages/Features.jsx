import { Helmet } from 'react-helmet-async';
// motion removed for performance
import { Zap, MonitorPlay, Tv, Smartphone, ShieldCheck, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = ({ isEmbedded = false }) => {
  // variants removed for performance

  return (
    <>
      {!isEmbedded && (
        <Helmet>
          <title>Features – Premium IPTV Service Switzerland</title>
          <meta name="description" content="Discover why we are the top-rated IPTV service for Switzerland. Enjoy 4K streaming, 7-day catch-up, EPG, VOD, and multi-device support without buffering." />
          <link rel="canonical" href="https://iptvswitzerland.cloud/features" />
        </Helmet>
      )}

      <section className="section" style={{ paddingTop: isEmbedded ? '60px' : '120px', paddingBottom: isEmbedded ? '60px' : undefined }}>
        <div className="container markdown-content">
          <div className="fade-in">
            {isEmbedded ? (
              <h2 className="section-title">Why IPTV Smarters Is the Best IPTV Player for Switzerland Subscribers</h2>
            ) : (
              <h1 className="section-title">Why IPTV Smarters Is the Best IPTV Player for Switzerland Subscribers</h1>
            )}
            <p className="lead" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '50px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
              Stop settling for unstable streams, outdated interfaces, and IPTV apps that crash under pressure. Our comprehensive platform is purpose-built for subscribers who demand consistent HD and 4K performance, intuitive navigation, and the flexibility to watch on any device — anywhere in Switzerland or around the world.
            </p>

            <div 
              className="features-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}
            >
              
              <div className="glass-panel" style={{ padding: '30px', borderTop: '4px solid var(--color-green)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ padding: '15px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '15px' }}><Zap size={32} color="var(--color-green)" /></div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Zero-Buffer Playback</h3>
                </div>
                <p>Buffering is the single biggest frustration for IPTV users — and we eliminate it entirely. Our platform features an adaptive bitrate (ABR) infrastructure that monitors your connection and dynamically adjusts stream quality to prevent freezes.</p>
                <div style={{ marginTop: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  <strong>Why it matters:</strong> No frozen screens during Champions League finals. Just smooth, responsive streaming.
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '30px', borderTop: '4px solid var(--color-yellow)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ padding: '15px', background: 'rgba(241, 196, 15, 0.1)', borderRadius: '15px' }}><MonitorPlay size={32} color="var(--color-yellow)" /></div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>4K Ultra HD & 1080p</h3>
                </div>
                <p>Enjoy the complete resolution spectrum — from Standard Definition right through to Full HD 1080p and 4K Ultra HD. We leverage built-in hardware acceleration and advanced multi-format video decoding (H.264, H.265/HEVC, AV1).</p>
                <div style={{ marginTop: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  <strong>Why it matters:</strong> Your 4K television deserves 4K content, delivering the sharpest picture without downscaling.
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '30px', borderTop: '4px solid var(--color-pink)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ padding: '15px', background: 'rgba(232, 67, 147, 0.1)', borderRadius: '15px' }}><Tv size={32} color="var(--color-pink)" /></div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>All-in-One: TV, VOD, Catch-Up</h3>
                </div>
                <p>Access over 10,000 live channels spanning Swiss national television, European sports, international news, plus 50,000+ VOD titles organized with a searchable EPG and 7-day catch-up capability.</p>
                <ul style={{ listStyle: 'none', marginLeft: 0, marginTop: '15px', fontSize: '0.9rem' }}>
                  <li><CheckCircle size={14} color="var(--color-green)" style={{ marginRight: '5px' }} /> 10,000+ live channels</li>
                  <li><CheckCircle size={14} color="var(--color-green)" style={{ marginRight: '5px' }} /> 7-day catch-up TV</li>
                  <li><CheckCircle size={14} color="var(--color-green)" style={{ marginRight: '5px' }} /> 50,000+ VOD titles</li>
                </ul>
              </div>

              <div className="glass-panel" style={{ padding: '30px', borderTop: '4px solid var(--color-orange)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ padding: '15px', background: 'rgba(230, 126, 34, 0.1)', borderRadius: '15px' }}><Smartphone size={32} color="var(--color-orange)" /></div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Universal Device Compatibility</h3>
                </div>
                <p>Engineered to follow you across every screen. Fully optimized for Smart TVs (Tizen, WebOS, Android), Smartphones (iOS/Android), Streaming Boxes (Fire TV, Nvidia Shield, MAG), and Desktops.</p>
                <div style={{ marginTop: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  <strong>Why it matters:</strong> One single Switzerland IPTV subscription for up to 5 simultaneous multi-device connections.
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '30px', borderTop: '4px solid var(--color-red)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ padding: '15px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '15px' }}><ShieldCheck size={32} color="var(--color-red)" /></div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Security & Parental Controls</h3>
                </div>
                <p>Take the security of your account seriously. Enjoy PIN-protected parental controls to restrict adult content, secure Xtream Codes API authentication, and multi-profile support for personalized viewing.</p>
                <div style={{ marginTop: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  <strong>Why it matters:</strong> Total peace of mind that your subscription is secure and your children are protected.
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '30px', borderTop: '4px solid #3498db' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ padding: '15px', background: 'rgba(52, 152, 219, 0.1)', borderRadius: '15px' }}><HeadphonesIcon size={32} color="#3498db" /></div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>24/7 Professional Support</h3>
                </div>
                <p>Dedicated professional technical support team available 24/7/365, including Swiss public holidays. Multilingual support natively handles English, German, French, and Italian.</p>
                <div style={{ marginTop: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  <strong>Why it matters:</strong> You're never left troubleshooting alone. Fast, expert, human support anytime you need it.
                </div>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--color-white)' }}>Ready to Experience Smarter Television?</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
                Join thousands of satisfied Switzerland IPTV subscribers who have already made the switch to smarter, faster, more flexible television.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/447412300833" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 32px' }}>View Pricing Plans</a>
                <a href="https://wa.me/447412300833" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '16px 32px' }}>Contact Support</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
