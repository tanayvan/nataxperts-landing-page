import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '../mock';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  return (
    <section id="faq" style={{ padding: '5rem 0', background: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'var(--accent-blue-200)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <HelpCircle size={28} color="var(--text-primary)" />
            </div>
          </div>
          <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Get answers to common questions about Canadian tax filing, deductions, and our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger
                  style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    textAlign: 'left'
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    color: 'var(--text-secondary)',
                    paddingTop: '0.5rem'
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p className="body-medium" style={{ marginBottom: '1rem' }}>
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;