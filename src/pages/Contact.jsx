import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import SEO from '../components/SEO';
import { useSeoOverride } from '../components/useSeoOverride';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  const seoOverride = useSeoOverride('/Contact');
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    organisatie: '',
    rol: '',
    onderwerp: '',
    bericht: '',
    telefoon: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#plan' || hash === '#brochure') {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await base44.entities.ContactSubmission.create(formData);
      setSubmitStatus('success');
      setFormData({
        naam: '',
        email: '',
        organisatie: '',
        rol: '',
        onderwerp: '',
        bericht: '',
        telefoon: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Neem contact op met Taai-Consult voor trainingen, workshops of OR-ondersteuning. Plan een kennismaking of vraag onze brochure aan."
        canonical="/contact"
        override={seoOverride} />


      <Hero
        title="Plan een kennismaking"
        subtitle="Vertel kort waar jullie tegenaan lopen. Dan kijken we samen wat past: training, workshop of ondersteuning." />


      <PageSection>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F3F35' }}>Kennismaking & Afstemming</h2>
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
                    <p style={{ color: '#2E2E2E' }} className="">Erichem


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
              <div className="bg-white rounded-lg shadow-lg p-8" id="plan">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F3F35' }}>Stuur ons een bericht</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#DCE5E0', color: '#1F3F35' }}>
                    <p className="font-semibold">Bedankt voor je bericht!</p>
                    <p className="text-sm mt-1">We nemen zo snel mogelijk contact met je op.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#fee', color: '#c00' }}>
                    <p className="font-semibold">Er ging iets mis.</p>
                    <p className="text-sm mt-1">Probeer het opnieuw of neem direct contact met ons op.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="naam">Naam *</Label>
                    <Input
                      id="naam"
                      value={formData.naam}
                      onChange={(e) => setFormData({...formData, naam: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="organisatie">Organisatie *</Label>
                    <Input
                      id="organisatie"
                      value={formData.organisatie}
                      onChange={(e) => setFormData({...formData, organisatie: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="rol">Rol *</Label>
                    <Select value={formData.rol} onValueChange={(value) => setFormData({...formData, rol: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer uw rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="or-lid">OR-lid</SelectItem>
                        <SelectItem value="commissie">Commissielid</SelectItem>
                        <SelectItem value="bestuur">Bestuurder</SelectItem>
                        <SelectItem value="hr">HR-medewerker</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input
                      id="telefoon"
                      type="tel"
                      value={formData.telefoon}
                      onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="onderwerp">Onderwerp *</Label>
                    <Input
                      id="onderwerp"
                      value={formData.onderwerp}
                      onChange={(e) => setFormData({...formData, onderwerp: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="bericht">Bericht *</Label>
                    <Textarea
                      id="bericht"
                      value={formData.bericht}
                      onChange={(e) => setFormData({...formData, bericht: e.target.value})}
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
                  >
                    {isSubmitting ? 'Versturen...' : 'Verstuur bericht'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>);

}