import React from 'react';
import { FileText, Briefcase, Building2, Calculator, TrendingUp, Globe } from 'lucide-react';
import { services } from '../mock';

const iconMap = {
  FileText: FileText,
  Briefcase: Briefcase,
  Building2: Building2,
  Calculator: Calculator,
  TrendingUp: TrendingUp,
  Globe: Globe
};

const Services = () => {
  return (
    <section id="services" style={{ padding: '5rem 0', background: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
            Comprehensive Tax & Accounting Services
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            From personal tax returns to corporate financial management, we provide expert services tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="service-card"
                style={{
                  background: `var(--${service.color})`,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                >
                  <IconComponent size={24} color="var(--text-primary)" />
                </div>

                {/* Title */}
                <h3 className="heading-3" style={{ marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="body-small" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'var(--bg-card)',
            borderRadius: '0.75rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}
        >
          <h3 className="heading-2" style={{ marginBottom: '0.75rem' }}>
            Not sure which service you need?
          </h3>
          <p className="body-medium" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Book a free consultation and we'll help you find the perfect solution for your tax and accounting needs.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;