import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../mock';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_0l0ykdx';
      const templateId = 'template_46urwdf';
      const publicKey = 'RwiGVNHX8l9cHbpGg';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success notification
      toast({
        title: "Thank You! 🎉",
        description: "Your message has been sent successfully. We will contact you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly via phone.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'var(--bg-section)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
            Get Your Free Consultation
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Ready to maximize your tax savings? Fill out the form below and one of our expert tax professionals will contact you within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Contact Form */}
          <div
            style={{
              background: 'var(--bg-card)',
              padding: '2rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}
          >
            {isSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 2rem'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem'
                  }}
                >
                  <CheckCircle2 size={48} color="white" />
                </div>
                <h3 className="heading-2" style={{ marginBottom: '1rem', color: '#10B981' }}>
                  Thank You!
                </h3>
                <p className="body-medium" style={{ marginBottom: '1rem' }}>
                  Your message has been sent successfully.
                </p>
                <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                  We will contact you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-input)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    transition: 'border-color 0.2s',
                    background: 'var(--bg-page)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-input)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    transition: 'border-color 0.2s',
                    background: 'var(--bg-page)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-input)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    transition: 'border-color 0.2s',
                    background: 'var(--bg-page)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                />
              </div>

              <div>
                <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-input)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    transition: 'border-color 0.2s',
                    background: 'var(--bg-page)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                >
                  <option value="">Select a service</option>
                  <option value="personal">Personal Tax Preparation</option>
                  <option value="small-business">Small Business Tax</option>
                  <option value="corporate">Corporate Tax Services</option>
                  <option value="bookkeeping">Bookkeeping & Payroll</option>
                  <option value="planning">Tax Planning & Strategy</option>
                  <option value="cross-border">Cross-Border Tax</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-input)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    transition: 'border-color 0.2s',
                    background: 'var(--bg-page)',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
            )}
          </div>

          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Contact Cards */}
            <div
              style={{
                background: 'var(--bg-card)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--accent-blue-200)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <Phone size={20} color="var(--text-primary)" />
                </div>
                <div>
                  <div className="heading-3" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Phone</div>
                  <div className="body-medium">{companyInfo.phone}</div>
                  <div className="body-medium">{companyInfo.phone2}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--accent-green-200)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <Mail size={20} color="var(--text-primary)" />
                </div>
                <div>
                  <div className="heading-3" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email</div>
                  <div className="body-medium">{companyInfo.email}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--accent-orange-200)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <MapPin size={20} color="var(--text-primary)" />
                </div>
                <div>
                  <div className="heading-3" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Address</div>
                  <div className="body-medium">{companyInfo.address}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                <div style={{ background: 'var(--accent-purple-200)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <Clock size={20} color="var(--text-primary)" />
                </div>
                <div>
                  <div className="heading-3" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Hours</div>
                  <div className="body-medium">{companyInfo.hours}</div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div
              style={{
                background: 'var(--bg-card)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                textAlign: 'center'
              }}
            >
              <CheckCircle2 size={40} color="#10B981" style={{ marginBottom: '0.75rem', marginLeft: 'auto', marginRight: 'auto' }} />
              <div className="heading-3" style={{ marginBottom: '0.5rem' }}>24-Hour Response Guarantee</div>
              <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                We respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;