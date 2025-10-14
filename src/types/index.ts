export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  continent: string;
}

export interface BookingFormData {
  departureAirport: string;
  arrivalAirport: string;
  needsChauffeur: boolean;
  departureAddress?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalNotes?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
  avatar?: string;
}