import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: 'var(--text-primary)', color: 'white', padding: '4rem 0 2rem' }}>
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}
        >
          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    opacity: 0.8,
                    transition: 'opacity 0.2s',
                    padding: 0,
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.8}
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    opacity: 0.8,
                    transition: 'opacity 0.2s',
                    padding: 0,
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.8}
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    opacity: 0.8,
                    transition: 'opacity 0.2s',
                    padding: 0,
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.8}
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    opacity: 0.8,
                    transition: 'opacity 0.2s',
                    padding: 0,
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.8}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ fontSize: '0.875rem', opacity: 0.8 }}>Personal Tax</li>
              <li style={{ fontSize: '0.875rem', opacity: 0.8 }}>Business Tax</li>
              <li style={{ fontSize: '0.875rem', opacity: 0.8 }}>Corporate Tax</li>
              <li style={{ fontSize: '0.875rem', opacity: 0.8 }}>Bookkeeping</li>
              <li style={{ fontSize: '0.875rem', opacity: 0.8 }}>Tax Planning</li>
              <li style={{ fontSize: '0.875rem', opacity: 0.8 }}>Cross-Border Tax</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href="https://wa.me/12269660072?text=Hi, I would like to inquire about your tax filing."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', opacity: 0.8, color: 'white', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
              >
                <MessageCircle size={16} style={{ color: '#25D366' }} />
                <Phone size={16} />
                {companyInfo.phone}
              </a>
              <a 
                href="https://wa.me/15197818286?text=Hi, I would like to inquire about your tax filing."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', opacity: 0.8, color: 'white', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
              >
                <MessageCircle size={16} style={{ color: '#25D366' }} />
                <Phone size={16} />
                {companyInfo.phone2}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
                <Mail size={16} />
                {companyInfo.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
                <MapPin size={16} style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                <span>{companyInfo.address}</span>
              </div>
            </div>

            {/* Social Media */}
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.75rem' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://www.facebook.com/profile.php?id=61587149252578"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/nataxperts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            fontSize: '0.875rem',
            opacity: 0.8
          }}
        >
          <p>© {currentYear} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;