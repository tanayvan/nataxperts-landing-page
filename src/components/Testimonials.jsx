import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: 'var(--bg-section)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
            What Our Clients Say
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with NaTaxperts.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  opacity: 0.1
                }}
              >
                <Quote size={48} color="var(--text-primary)" />
              </div>

              {/* Rating */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                ))}
              </div>

              {/* Content */}
              <p className="body-medium" style={{ lineHeight: '1.6', marginBottom: '1rem', flex: 1 }}>
                "{testimonial.content}"
              </p>
              {/* Author — separate line, clear hierarchy */}
              <p
                className="body-small"
                style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginTop: 'auto',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2rem',
            background: 'var(--bg-card)',
            borderRadius: '0.75rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}
        >
          <p className="body-large" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>
            Trusted by thousands of Canadians
          </p>
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            Join our growing community of satisfied clients who trust us with their financial future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;