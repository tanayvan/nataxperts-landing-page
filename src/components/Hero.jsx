import React from 'react';
import { ArrowRight, Award, Shield, TrendingUp } from 'lucide-react';
import { companyInfo } from '../mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        background: 'var(--gradient-hero-warm)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        position: 'relative'
      }}
    >

      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Announcement Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '2rem',
              padding: '0.5rem 1rem',
              marginBottom: '1.5rem',
              fontFamily: "'SF Mono', monospace",
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}>

            <span>CRA-Certified Tax Experts</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-hero" style={{ marginBottom: '1.5rem' }}>
            {companyInfo.tagline}
          </h1>

          {/* Subtitle */}
          <p className="body-large" style={{ marginBottom: '2rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--text-secondary)' }}>
            Expert tax preparation, strategic planning, and comprehensive bookkeeping services for individuals, small businesses, and corporations across Canada.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button onClick={scrollToContact} className="btn-primary" style={{ gap: '0.5rem' }}>
              Get Free Consultation
              <ArrowRight size={16} />
            </button>
            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Explore Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid var(--border-light)'
            }}>

            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <Award size={32} color="var(--text-primary)" />
              </div>
              <div className="heading-3" style={{ marginBottom: '0.25rem' }}>5+ Years</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>Experience</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <TrendingUp size={32} color="var(--text-primary)" />
              </div>
              <div className="heading-3" style={{ marginBottom: '0.25rem' }}>1 to 1</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>Personalized Support</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <Shield size={32} color="var(--text-primary)" />
              </div>
              <div className="heading-3" style={{ marginBottom: '0.25rem' }}>100%</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>CRA Compliant</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .hero-section {
            padding-top: 10rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;