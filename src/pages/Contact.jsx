import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    organisatie: '',
    rol: '',
    onderwerp: '',
    bericht: '',
    telefoon: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#plan' || hash === '#brochure') {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      
      if (hash === '#brochure') {
        setFormData(prev => ({ ...prev, onderwerp: 'Brochure aanvragen' }));
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <SEO 
        title="Contact"
        description="Neem contact op met Taai-Consult voor trainingen, workshops of OR-ondersteuning. Plan een kennismaking of vraag onze brochure aan."
        canonical="/contact"
      />

      <Hero 
        title="Plan een kennismaking"
        subtitle="Vertel kort waar jullie tegenaan lopen. Dan kijken we samen wat past: training, workshop of ondersteuning."
      />

      <PageSection>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F3F35' }}>Contactgegevens</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1F3F35' }}>Email</h3>
                    <a href="mailto:info@taai-consult.nl" style={{ color: '#2E2E2E' }}>
                      info@taai-consult.nl
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1F3F35' }}>Telefoon</h3>
                    <a href="tel:+31650742673" style={{ color: '#2E2E2E' }}>
                      +31 6 50 74 26 73
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1F3F35' }}>Bezoekadres</h3>
                    <p style={{ color: '#2E2E2E' }}>
                      Amsterdam<br />
                      Nederland
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#DCE5E0' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#1F3F35' }}>Responstijd</h3>
                <p className="text-sm" style={{ color: '#2E2E2E' }}>
                  We streven ernaar om binnen 1 werkdag te reageren op je bericht.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div id="plan" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F3F35' }}>Stuur ons een bericht</h2>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#DCE5E0', border: '1px solid #6F8F80', color: '#1F3F35' }}>
                  Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="naam">Naam *</Label>
                    <Input 
                      id="naam"
                      value={formData.naam}
                      onChange={(e) => setFormData({...formData, naam: e.target.value})}
                      required
                      placeholder="Je naam"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="je@email.nl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organisatie">Organisatie *</Label>
                    <Input 
                      id="organisatie"
                      value={formData.organisatie}
                      onChange={(e) => setFormData({...formData, organisatie: e.target.value})}
                      required
                      placeholder="Je organisatie"
                    />
                  </div>

                  <div>
                    <Label htmlFor="rol">Rol *</Label>
                    <Select value={formData.rol} onValueChange={(value) => setFormData({...formData, rol: value})}>
                      <SelectTrigger id="rol">
                        <SelectValue placeholder="Selecteer je rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="or-lid">OR-lid</SelectItem>
                        <SelectItem value="commissie">Commissielid</SelectItem>
                        <SelectItem value="bestuur">Bestuurder</SelectItem>
                        <SelectItem value="hr">HR</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div id="brochure" className="scroll-mt-20">
                    <Label htmlFor="onderwerp">Onderwerp *</Label>
                    <Select value={formData.onderwerp} onValueChange={(value) => setFormData({...formData, onderwerp: value})}>
                      <SelectTrigger id="onderwerp">
                        <SelectValue placeholder="Waar kunnen we je mee helpen?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="training-or">Training OR</SelectItem>
                        <SelectItem value="vaardigheden-or">Vaardigheden OR</SelectItem>
                        <SelectItem value="commissies">Commissies</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="masterclass">Masterclass</SelectItem>
                        <SelectItem value="or-ondersteuning">OR-ondersteuning</SelectItem>
                        <SelectItem value="thema">Thema (holdings/ambtelijk/vernieuwend)</SelectItem>
                        <SelectItem value="brochure">Brochure aanvragen</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="telefoon">Telefoon (optioneel)</Label>
                    <Input 
                      id="telefoon"
                      type="tel"
                      value={formData.telefoon}
                      onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                      placeholder="+31 6 12345678"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bericht">Bericht *</Label>
                  <Textarea 
                    id="bericht"
                    value={formData.bericht}
                    onChange={(e) => setFormData({...formData, bericht: e.target.value})}
                    required
                    rows={6}
                    placeholder="Vertel ons meer over je vraag of situatie..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-3 text-white"
                  style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
                  data-cta="contact_form_submit"
                >
                  Verstuur bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}