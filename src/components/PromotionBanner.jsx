import React from 'react';
import { Gift, Calendar } from 'lucide-react';
import { promotion } from '../mock';

const PromotionBanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(186, 230, 253, 0.9) 0%, rgba(147, 197, 253, 0.8) 100%)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.15)'
          }}
        >
          {/* Background Decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Icon */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '50%',
                  padding: '1rem',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)'
                }}
              >
                <Gift size={32} color="var(--text-primary)" />
              </div>
            </div>

            {/* Title */}
            <div
              className="heading-2"
              style={{
                marginBottom: '0.5rem',
                fontFamily: "'SF Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.025em'
              }}
            >
              {promotion.title}
            </div>

            {/* Main Offer */}
            <h2 className="heading-1" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              {promotion.description}
            </h2>

            {/* Details */}
            <p className="body-medium" style={{ marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              {promotion.details}
            </p>

            {/* CTA Button */}
            <button onClick={scrollToContact} className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              {promotion.cta}
            </button>

            {/* Expiry Notice */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
              }}
            >
              <Calendar size={16} />
              Offer expires {promotion.expiry}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;