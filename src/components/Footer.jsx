import { Link } from 'react-router-dom';
import { Mail, Phone, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--color-dark-gray)',
      borderTop: '1px solid var(--glass-border)',
      paddingTop: '60px',
      paddingBottom: '20px',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        
        {/* Left Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--color-green)',
              boxShadow: '0 0 15px rgba(46, 204, 113, 0.3)'
            }}>
              <img src="/logo.avif" alt="Switzerland IPTV Logo" width="60" height="60" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', background: 'var(--success-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              IPTV Suisse
            </span>
          </Link>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '300px' }}>
            Switzerland's premier IPTV service delivering crystal-clear 4K entertainment straight to any screen.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
            <a href="mailto:support@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--color-white)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color='var(--color-green)'} onMouseLeave={(e) => e.target.style.color='var(--color-white)'}>
              <Mail size={20} color="var(--color-green)" /> support@gmail.com
            </a>
            <a href="https://wa.me/447412300833" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: 'var(--color-white)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color='var(--color-green)'} onMouseLeave={(e) => e.target.style.color='var(--color-white)'}>
              <Phone size={20} color="var(--color-green)" /> +44 7412 300833
            </a>
          </div>
        </div>

        {/* Right Side - Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: 'var(--color-white)' }}>Quick Links</h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Home', path: '/' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'Installation Guide', path: '/installation' },
              { name: 'Features', path: '/features' },
              { name: 'FAQ', path: '/faq' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--color-text-muted)',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  paddingLeft: '0'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-green)'; e.currentTarget.style.paddingLeft = '10px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.paddingLeft = '0'; }}
              >
                <ChevronRight size={16} /> {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: 'var(--color-white)' }}>Legal</h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[{ name: 'Terms of Service', path: '/terms' }, { name: 'Privacy Policy', path: '/privacy' }, { name: 'Refund Policy', path: '/refund' }].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--color-text-muted)',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  paddingLeft: '0'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-green)'; e.currentTarget.style.paddingLeft = '10px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.paddingLeft = '0'; }}
              >
                <ChevronRight size={16} /> {link.name}
              </Link>
            ))}
          </nav>
        </div>

      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--color-text-muted)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} IPTV Suisse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
