import { Helmet } from 'react-helmet-async';
import { Check, Tv, Film, MonitorPlay, Smartphone, Users, RotateCcw, CalendarClock, Zap, ShieldCheck, HeadphonesIcon } from 'lucide-react';
// motion removed for performance
const message = encodeURIComponent("I want subscription for iptvswitzerland.cloud");
const whatsappUrl = `https://api.whatsapp.com/send?phone=447412300833&text=${message}`;
const Pricing = ({ isEmbedded = false }) => {
  const plans = [
    { title: '1 Month', price: 'CHF 15', duration: '/mo', highlight: false },
    { title: '3 Months', price: 'CHF 35', duration: '/3 mos', highlight: false },
    { title: '6 Months', price: 'CHF 60', duration: '/6 mos', highlight: true },
    { title: '12 Months', price: 'CHF 100', duration: '/yr', highlight: false }
  ];

  const features = [
    { text: 'Live TV Channels', icon: <Tv size={18} color="var(--color-green)" /> },
    { text: 'Video on Demand (VOD)', icon: <Film size={18} color="var(--color-green)" /> },
    { text: 'Stream Quality (HD / FHD / 4K)', icon: <MonitorPlay size={18} color="var(--color-green)" /> },
    { text: 'Compatible Devices', icon: <Smartphone size={18} color="var(--color-green)" /> },
    { text: 'Simultaneous Connections', icon: <Users size={18} color="var(--color-green)" /> },
    { text: '7-Day Catch-Up TV', icon: <RotateCcw size={18} color="var(--color-green)" /> },
    { text: 'Electronic Programme Guide (EPG)', icon: <CalendarClock size={18} color="var(--color-green)" /> },
    { text: 'Anti-Freeze & Buffer-Free Playback', icon: <Zap size={18} color="var(--color-green)" /> },
    { text: 'Uptime Guarantee', icon: <ShieldCheck size={18} color="var(--color-green)" /> },
    { text: '24/7 Customer Support', icon: <HeadphonesIcon size={18} color="var(--color-green)" /> }
  ];

  return (
    <>
      {!isEmbedded && (
        <Helmet>
          <title>Pricing Plans – Switzerland IPTV</title>
          <meta name="description" content="Choose the perfect IPTV subscription for your Swiss household. Flexible plans from monthly to yearly with full 4K and HD access on all devices." />
          <link rel="canonical" href="https://iptvswitzerland.cloud/pricing" />
        </Helmet>
      )}

      <section className="section" style={{ paddingTop: isEmbedded ? '60px' : '120px', paddingBottom: isEmbedded ? '60px' : undefined }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            {isEmbedded ? (
              <h2 className="section-title">Transparent & Flexible Prices</h2>
            ) : (
              <h1 className="section-title">Transparent & Flexible Prices</h1>
            )}
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Every plan includes the complete 10,000+ channel catalog, 50,000+ VODs, and 24/7 multilingual support. Pick a duration that suits your routine.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {plans.map((plan, index) => (
              <div
                key={plan.title}
                className="glass-panel fade-in"
                style={{
                  padding: '40px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transform: plan.highlight ? 'scale(1.05)' : 'none',
                  border: plan.highlight ? '2px solid var(--color-green)' : '1px solid var(--glass-border)',
                  boxShadow: plan.highlight ? '0 0 30px rgba(46, 204, 113, 0.2)' : 'none',
                  zIndex: plan.highlight ? 5 : 1
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--success-gradient)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    MOST POPULAR
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', alignSelf: 'center', marginBottom: '10px' }}>{plan.title}</h3>
                
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginBottom: '30px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800' }}>{plan.price}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '5px' }}>{plan.duration}</span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                  {features.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%', padding: '16px', display: 'block', textAlign: 'center', boxSizing: 'border-box' }} className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                  Choose {plan.title}
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Pricing;
