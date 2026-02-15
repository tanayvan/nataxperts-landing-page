import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: isScrolled ? 'var(--bg-overlay)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      {/* Top Bar */}
      <div
        className="header-top-bar"
        style={{
          background: 'var(--text-primary)',
          color: 'white',
          padding: '0.5rem 0',
          fontSize: '0.75rem'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Phone size={12} />
              {companyInfo.phone}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Phone size={12} />
              {companyInfo.phone2}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Mail size={12} />
              {companyInfo.email}
            </span>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <MapPin size={12} />
            {companyInfo.hours}
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container header-nav-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', gap: '0.75rem' }}>
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            minWidth: 0,
            flex: '1 1 auto'
          }}
        >
          <img 
            src="/nataxperts-logo.png" 
            alt="North American Taxperts" 
            className="header-logo"
            style={{ 
              height: '110px',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <button onClick={() => scrollToSection('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-primary)', transition: 'color 0.2s' }}>Services</button>
          <button onClick={() => scrollToSection('testimonials')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-primary)', transition: 'color 0.2s' }}>Testimonials</button>
          <button onClick={() => scrollToSection('faq')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-primary)', transition: 'color 0.2s' }}>FAQ</button>
          <button onClick={() => scrollToSection('contact')} className="btn-primary">Free Consultation</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'flex',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            flexShrink: 0,
            padding: '0.25rem'
          }}
          className="mobile-menu-btn"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-card)',
            padding: '1.5rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
          className="mobile-menu"
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => scrollToSection('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', textAlign: 'left', padding: '0.5rem 0' }}>Services</button>
            <button onClick={() => scrollToSection('testimonials')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', textAlign: 'left', padding: '0.5rem 0' }}>Testimonials</button>
            <button onClick={() => scrollToSection('faq')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', textAlign: 'left', padding: '0.5rem 0' }}>FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary" style={{ marginTop: '0.5rem' }}>Free Consultation</button>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .header-logo {
            height: 56px !important;
          }
          .header-nav-row {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .header-top-bar {
            padding: 0.35rem 0 !important;
            font-size: 0.65rem !important;
          }
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn,
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;