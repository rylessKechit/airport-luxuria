import Layout from '@/components/layout/Layout';
import BookingForm from '@/components/sections/BookingForm';

export const metadata = {
  title: 'Book Your Premium Airport Experience | Airport Luxuria',
  description: 'Request a personalized quote for our exclusive Meet & Greet services. Professional consultation within 2 hours.',
};

export default function BookingPage() {
  return (
    <Layout>
      <BookingForm />
    </Layout>
  );
}