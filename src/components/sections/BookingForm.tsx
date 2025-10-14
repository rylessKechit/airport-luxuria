'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  MapPin, 
  Car, 
  Clock, 
  Phone,
  Mail,
  User,
  CheckCircle,
  AlertCircle,
  Send
} from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    departureAirport: '',
    arrivalAirport: '',
    needsChauffeur: false,
    departureAddress: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Aéroports populaires pour l'exemple
  const popularAirports = [
    { code: 'CDG', name: 'Charles de Gaulle, Paris' },
    { code: 'LHR', name: 'Heathrow, London' },
    { code: 'JFK', name: 'John F. Kennedy, New York' },
    { code: 'LAX', name: 'Los Angeles International' },
    { code: 'DXB', name: 'Dubai International' },
    { code: 'NRT', name: 'Narita, Tokyo' },
    { code: 'FRA', name: 'Frankfurt am Main' },
    { code: 'SIN', name: 'Changi, Singapore' },
    { code: 'HKG', name: 'Hong Kong International' },
    { code: 'DOH', name: 'Hamad International, Doha' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send booking request');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-royal-blue-50 to-sky-blue-50 min-h-screen flex items-center">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Request Sent Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for choosing Airport Luxuria. Our premium travel experts will contact you within 2 hours to discuss your personalized quote and finalize your booking.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    Expert consultation call within 2 hours
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    Personalized quote based on your needs
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    Confirmation and detailed travel instructions
                  </div>
                </div>
              </div>
              <Button asChild className="bg-royal-blue-900 hover:bg-royal-blue-800">
                <a href="/">Return to Homepage</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-royal-blue-50 to-sky-blue-50 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
            <Plane className="w-4 h-4 mr-2" />
            Premium Booking Request
          </Badge>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Request Your
            <span className="block text-royal-blue-900">Personalized Quote</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your travel plans and we'll create a custom Meet & Greet experience 
            tailored to your needs. No upfront payment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Travel Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Travel Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="departure" className="text-sm font-semibold text-gray-700">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Departure Airport
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('departureAirport', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select departure airport" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularAirports.map((airport) => (
                            <SelectItem key={airport.code} value={`${airport.code} - ${airport.name}`}>
                              {airport.code} - {airport.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="arrival" className="text-sm font-semibold text-gray-700">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Arrival Airport
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('arrivalAirport', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select arrival airport" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularAirports.map((airport) => (
                            <SelectItem key={airport.code} value={`${airport.code} - ${airport.name}`}>
                              {airport.code} - {airport.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Chauffeur Service */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="chauffeur"
                        checked={formData.needsChauffeur}
                        onCheckedChange={(checked) => handleInputChange('needsChauffeur', checked as boolean)}
                      />
                      <Label htmlFor="chauffeur" className="text-sm font-semibold text-gray-700">
                        <Car className="w-4 h-4 inline mr-2" />
                        Add Private Chauffeur Service
                      </Label>
                    </div>
                    
                    {formData.needsChauffeur && (
                      <div className="ml-6 space-y-2">
                        <Label htmlFor="address" className="text-sm font-semibold text-gray-700">
                          Departure Address (to airport)
                        </Label>
                        <Input
                          id="address"
                          placeholder="Enter your departure address"
                          value={formData.departureAddress}
                          onChange={(e) => handleInputChange('departureAddress', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Personal Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      <User className="w-5 h-5 inline mr-2" />
                      Contact Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-semibold text-gray-700">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requirements, dietary restrictions, or preferences..."
                      rows={4}
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    />
                  </div>

                  {/* Submit */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-air-france-red-600 hover:bg-air-france-red-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Request Personalized Quote
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Reminder */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Meet & Greet Premium Includes:</h3>
                <div className="space-y-3">
                  {[
                    'Personal agent at airport',
                    'Fast Track security',
                    'VIP lounge access',
                    'Luggage assistance',
                    'Seamless transfers'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-air-france-red-400 mr-3 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-air-france-red-600 mr-3" />
                  <h3 className="text-lg font-semibold">Quick Response</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our experts will contact you within 2 hours during business hours 
                  to discuss your personalized quote.
                </p>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Average response: 45 minutes
                </Badge>
              </CardContent>
            </Card>

            {/* Contact Alternative */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent bookings or questions, call our 24/7 premium support line.
                </p>
                <Button asChild variant="outline" className="w-full border-air-france-red-600 text-air-france-red-600 hover:bg-air-france-red-600 hover:text-white">
                  <a href="tel:+33123456789">
                    <Phone className="w-4 h-4 mr-2" />
                    Call +33 1 XX XX XX XX
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;