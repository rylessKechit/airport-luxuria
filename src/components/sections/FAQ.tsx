'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is included in the Meet & Greet Premium service?",
      answer: "Our Meet & Greet Premium service includes: personal agent assistance, Fast Track Security access, VIP Lounge entry, luggage assistance from check-in to baggage claim, and 24/7 multilingual support throughout your journey.",
      category: "Services"
    },
    {
      question: "How far in advance should I book Meet & Greet services?",
      answer: "We recommend booking at least 24 hours in advance to guarantee availability. However, we can often accommodate same-day requests depending on airport capacity and service availability.",
      category: "Booking"
    },
    {
      question: "Which airports offer your services?",
      answer: "We operate at 500+ airports worldwide including major hubs like CDG Paris, Heathrow London, JFK New York, Dubai International, and many more. Check our destinations page for the complete list.",
      category: "Locations"
    },
    {
      question: "What languages do your agents speak?",
      answer: "Our agents are multilingual and speak over 10 languages including English, French, Spanish, German, Italian, Arabic, Chinese, Japanese, Russian, and Portuguese.",
      category: "Support"
    },
    {
      question: "Can you assist with connecting flights?",
      answer: "Yes, our agents specialize in smooth connections. We'll escort you between terminals, help with re-check procedures, and ensure you reach your connecting gate on time.",
      category: "Services"
    },
    {
      question: "How do I recognize my Meet & Greet agent?",
      answer: "Your agent will be waiting at the designated meeting point with a clearly visible Airport Luxuria sign displaying your name. You'll receive their contact details and photo before arrival.",
      category: "Process"
    },
    {
      question: "What if my flight is delayed or cancelled?",
      answer: "We monitor all flights in real-time. If your flight is delayed, we adjust our schedule automatically. For cancellations, we offer full refunds or can reschedule your service at no extra cost.",
      category: "Policies"
    },
    {
      question: "Is the Private Chauffeur service available at all airports?",
      answer: "Private Chauffeur service is available at most major airports. Availability depends on local regulations and our partner network. Contact us to confirm availability for your specific airport.",
      category: "Chauffeur"
    },
    {
      question: "Do you offer corporate rates for business travelers?",
      answer: "Yes, we offer special corporate rates and dedicated account management for businesses. Contact our corporate sales team for customized packages and volume discounts.",
      category: "Pricing"
    },
    {
      question: "What happens if I miss my Meet & Greet agent?",
      answer: "If you can't locate your agent, call our 24/7 hotline immediately. We have backup procedures and will quickly arrange alternative assistance to ensure your journey continues smoothly.",
      category: "Support"
    }
  ];

  // Structured data pour FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
              <HelpCircle className="w-4 h-4 mr-2" />
              Questions Fréquentes
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Tout Savoir sur
              <span className="block text-air-france-red-600">Nos Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos services premium 
              et notre processus de réservation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          {faq.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                      </div>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                      )}
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;