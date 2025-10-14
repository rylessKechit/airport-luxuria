'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  CheckCircle, 
  MessageCircle,
  User,
  Mail,
  Phone,
  Building
} from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactReason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactReasons = [
    'Demande de devis personnalisé',
    'Information sur nos services',
    'Nouveau partenariat aéroport',
    'Support client existant',
    'Réclamation ou feedback',
    'Demande de présentation',
    'Autre demande'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi (remplace par ta vraie logique)
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="bg-white flex items-center justify-center min-h-screen lg:min-h-[600px]">
        <div className="container-custom p-8">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Message Envoyé avec Succès !
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Merci pour votre message. Notre équipe d'experts vous contactera dans les 
                <span className="font-semibold text-air-france-red-600"> 2 heures suivantes</span> pour 
                discuter de vos besoins en détail.
              </p>
              <div className="bg-royal-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-royal-blue-900 mb-4">Prochaines étapes :</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-royal-blue-700">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    Analyse de votre demande par notre équipe
                  </div>
                  <div className="flex items-center text-royal-blue-700">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    Appel de consultation personnalisée
                  </div>
                  <div className="flex items-center text-royal-blue-700">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    Proposition sur mesure adaptée à vos besoins
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-royal-blue-900 hover:bg-royal-blue-800">
                  <a href="/">Retour à l'Accueil</a>
                </Button>
                <Button asChild variant="outline" className="border-air-france-red-600 text-air-france-red-600 hover:bg-air-france-red-600 hover:text-white">
                  <a href="/services">Découvrir Nos Services</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 lg:py-0 lg:flex lg:items-center lg:min-h-[800px]">
      <div className="container-custom lg:container-none lg:px-8 lg:py-16 w-full">
        <Card className="border-0 shadow-2xl lg:shadow-none">
          <CardHeader className="pb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-royal-blue-900 rounded-xl flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-display text-gray-900">
                  Contactez-Nous
                </CardTitle>
                <p className="text-gray-600">Partagez vos besoins, nous créons la solution</p>
              </div>
            </div>
            <Badge className="w-fit bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
              Réponse garantie sous 2 heures
            </Badge>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type de demande */}
              <div className="space-y-2">
                <Label htmlFor="contactReason" className="text-sm font-semibold text-gray-700">
                  Type de Demande *
                </Label>
                <Select onValueChange={(value) => handleInputChange('contactReason', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le motif de votre contact" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactReasons.map((reason, index) => (
                      <SelectItem key={index} value={reason}>
                        {reason}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Informations personnelles */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                    <User className="w-4 h-4 inline mr-2" />
                    Prénom *
                  </Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                    Nom *
                  </Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Entreprise et Sujet */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                    <Building className="w-4 h-4 inline mr-2" />
                    Entreprise (optionnel)
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                    Sujet *
                  </Label>
                  <Input
                    id="subject"
                    required
                    placeholder="Sujet de votre demande"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Décrivez vos besoins en détail : dates de voyage, aéroports, nombre de personnes, services souhaités..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-air-france-red-600 hover:bg-air-france-red-700 text-white h-14 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le Message
                      <Send className="w-5 h-5 ml-3" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe pour répondre à votre demande.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;