import Layout from '@/components/layout/Layout';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

export const metadata = {
  title: 'Contact Airport Luxuria | 24/7 Premium Support',
  description: 'Contact our premium support team 24/7 for personalized airport service consultations. Expert assistance in multiple languages worldwide.',
  keywords: 'contact airport luxuria, premium support, airport services contact, meet and greet support'
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </Layout>
  );
}