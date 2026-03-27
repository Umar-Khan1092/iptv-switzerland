import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const message = encodeURIComponent("I want subscription for iptvswitzerland.cloud");
  const whatsappUrl = `https://wa.me/447412300833?text=${message}`;
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Installation Guide', path: '/installation' },
    { name: 'Features', path: '/features' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(30, 39, 46, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--nav-height)'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--color-green)',
            boxShadow: '0 0 15px rgba(46, 204, 113, 0.3)'
          }}>
            <img src="/logo.avif" alt="Switzerland IPTV Logo" width="50" height="50" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', background: 'var(--success-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            IPTV Switzerland
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontWeight: '500',
                color: location.pathname === link.path ? 'var(--color-green)' : 'var(--color-white)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-green)'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === link.path ? 'var(--color-green)' : 'var(--color-white)'}
            >
              {link.name}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          style={{ display: 'none', cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', padding: '10px' }} 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          width: '100%',
          background: 'var(--color-dark-gray)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          borderBottom: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.2rem',
                fontWeight: '500',
                color: location.pathname === link.path ? 'var(--color-green)' : 'var(--color-white)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            Get Started
          </a>
        </div>
      )}
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
