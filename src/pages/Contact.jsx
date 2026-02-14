import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#plan' || hash === '#brochure') {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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

            {/* ActiveCampaign Contact form */}
            <div className="lg:col-span-2">
              <div id="plan" className="scroll-mt-20" dangerouslySetInnerHTML={{__html: `
                <style>@import url(https://fonts.bunny.net/css?family=roboto:400,600,700|IBM+Plex+Sans:400);</style>
                <style>
                #_form_1_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0;box-shadow:0px 1px 13px 0px rgba(0, 0, 0, 0.3)}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_1_._form-top{top:0}#_form_1_._form-bottom{bottom:0}#_form_1_._form-left{left:0}#_form_1_._form-right{right:0}#_form_1_ input[type="text"],#_form_1_ input[type="tel"],#_form_1_ input[type="date"],#_form_1_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_1_ textarea{resize:none}#_form_1_ input::placeholder{color:#333333}#_form_1_ ._submit{cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#004CFF !important;border:2px solid #004CFF !important;-moz-border-radius:30px !important;-webkit-border-radius:30px !important;border-radius:30px !important;width:100%;color:#FFFFFF !important;padding:12px !important}#_form_1_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_1_ ._submit.processing{position:relative}#_form_1_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#004CFF, #004CFF), conic-gradient(#004CFF, #FFFFFF);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_1_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_1_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_1_ ._close-icon:before{position:relative}#_form_1_ ._form-body{margin-bottom:30px}#_form_1_ ._form-image-left{width:150px;float:left}#_form_1_ ._form-content-right{margin-left:164px}#_form_1_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_1_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_1_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_1_ ._form-label,#_form_1_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_1_._dark ._form-branding{color:#333}#_form_1_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_1_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_1_ ._form_element *{font-size:14px}#_form_1_ ._form_element._clear{clear:both;width:100%;float:none}#_form_1_ ._form_element._clear:after{clear:left}#_form_1_ ._form_element textarea,#_form_1_ ._form_element select,#_form_1_ ._form_element input[type="text"],#_form_1_ ._form_element input[type="date"],#_form_1_ ._form_element input[type="phone"],#_form_1_ ._form_element input[type="email"]{background:white;color:#333333 !important;border-top:1px solid #E0E0E0;border-left:1px solid #E0E0E0;border-right:1px solid #E0E0E0;border-bottom:1px solid #E0E0E0;border-radius:4px;padding:12px}#_form_1_ ._form_element input[type="text"],#_form_1_ ._form_element input[type="date"],#_form_1_ ._form_element select,#_form_1_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_1_ ._field-wrapper{position:relative}#_form_1_ ._inline-style{float:left}#_form_1_ ._inline-style input[type="text"]{width:150px}#_form_1_ ._inline-style:not(._clear){margin-right:20px}#_form_1_ ._form_element img._form-image{max-width:100%}#_form_1_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_1_ ._clear-element{clear:left}#_form_1_ ._full_width{width:100%}#_form_1_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_1_ input[type="text"]._has_error,#_form_1_ textarea._has_error{border:#F37C7B 1px solid}#_form_1_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_1_ ._show_be_error{float:left}#_form_1_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_1_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_1_ ._error._below{padding-top:8px;top:100%;right:0}#_form_1_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_1_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_1_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_1_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_1_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_1_ ._button-wrapper ._error-inner._form_error{position:static}#_form_1_ ._error-inner._no_arrow{margin-bottom:10px}#_form_1_ ._error-arrow{position:absolute;width:0;height:0}#_form_1_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_1_ input[type="text"].datetime_date{width:69%;display:inline}#_form_1_ select.datetime_time{width:29%;display:inline;height:32px}#_form_1_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_1_ input[type="time"].datetime_time{width:29%;display:inline-flex}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_1_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_1_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_1_ ._form-content{margin:0;width:100%}#_form_1_ ._form-inner{display:block;min-width:100%}#_form_1_ ._form-title,#_form_1_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_1_ ._form-title{font-size:1.2em}#_form_1_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_1_ ._form-element,#_form_1_ ._inline-style,#_form_1_ input[type="text"],#_form_1_ label,#_form_1_ p,#_form_1_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_1_ ._row._checkbox-radio label{display:inline}#_form_1_ ._row,#_form_1_ p,#_form_1_ label{margin-bottom:0.7em;width:100%}#_form_1_ ._row input[type="checkbox"],#_form_1_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_1_ ._row input[type="checkbox"]+span label{display:inline}#_form_1_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_1_ ._form-image{max-width:100%;height:auto !important}#_form_1_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16px;line-height:1.3em}#_form_1_ input[type="radio"],#_form_1_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;font-size:1em;margin:0 0.3em 0 0;vertical-align:baseline}#_form_1_ button[type="submit"]{padding:20px;font-size:1.5em}#_form_1_ ._inline-style{margin:20px 0 0 !important}#_form_1_ ._inline-style input[type="text"]{width:100%}}#_form_1_ .sms_consent_checkbox{position:relative;width:100%;display:flex;align-items:flex-start;padding:20px 0}#_form_1_ .sms_consent_checkbox input[type="checkbox"]{float:left;margin:5px 10px 10px 0}#_form_1_ .sms_consent_checkbox .sms_consent_message{display:inline;float:left;text-align:left;margin-bottom:10px;font-size:14px;color:#7D8799}#_form_1_ .sms_consent_checkbox .sms_consent_message.sms_consent_mini{width:90%}#_form_1_ .sms_consent_checkbox ._error._above{right:auto;bottom:0}#_form_1_ .sms_consent_checkbox ._error._above ._error-arrow{right:auto;left:5px}@media (min-width:320px) and (max-width:667px){#_form_1_ .sms_consent_checkbox ._error._above{top:-30px;left:0;bottom:auto}}#_form_1_ .field-required{color:#FF0000}#_form_1_{position:relative;text-align:left;margin:25px auto 0;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#FFFFFF !important;border:1px solid #E0E0E0 !important;max-width:400px;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#333333}#_form_1_ ._show_be_error{min-width:100%}#_form_1_._inline-form,#_form_1_._inline-form ._form-content{font-family:Roboto;font-size:14px;font-weight:400}#_form_1_._inline-form ._row span:not(.field-required),#_form_1_._inline-form ._row label{font-family:Roboto;font-size:14px;font-weight:400;line-height:1.6em;color:#333 !important}#_form_1__inlineform input[type="text"],#_form_1__inlineform input[type="date"],#_form_1__inlineform input[type="tel"],#_form_1__inlineform select,#_form_1__inlineform textarea:not(.g-recaptcha-response){font-family:Roboto;font-size:14px;font-weight:400;font-color:#000000;line-height:1.6em}#_form_1_._inline-form ._html-code *:not(h1, h2, h3, h4, h5, h6),#_form_1_._inline-form .sms_consent_message,#_form_1_._inline-form ._form-thank-you{font-family:Roboto;font-size:14px;font-weight:400;color:#333 !important}#_form_1_._inline-form ._form-label,#_form_1_._inline-form ._form-emailidentifier,#_form_1_._inline-form ._form-checkbox-option-label{font-family:Roboto;font-size:14px;font-weight:700;line-height:1.6em;color:#333 !important}#_form_1_._inline-form ._submit{margin-top:12px;font-family:Roboto;font-size:16px;font-weight:600}#_form_1_._inline-form ._html-code h1,#_form_1_._inline-form ._html-code h2,#_form_1_._inline-form ._html-code h3,#_form_1_._inline-form ._html-code h4,#_form_1_._inline-form ._html-code h5,#_form_1_._inline-form ._html-code h6,#_form_1_._inline-form ._form-title{font-family:Roboto;font-size:24px;line-height:normal;font-weight:700;color:#333;margin-bottom:0;display:block}#_form_1_._inline-form ._form-branding{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:13px;font-weight:100;font-style:normal;text-decoration:none}#_form_1_:before,#_form_1_:after{content:" ";display:table}#_form_1_:after{clear:both}#_form_1_._inline-style{width:auto;display:inline-block}#_form_1_._inline-style input[type="text"],#_form_1_._inline-style input[type="date"]{padding:10px 12px}#_form_1_._inline-style button._inline-style{position:relative;top:27px}#_form_1_._inline-style p{margin:0}#_form_1_._inline-style ._button-wrapper{position:relative;margin:16px 12.5px 0 20px}#_form_1_._inline-style ._button-wrapper:not(._clear){margin:0}#_form_1_ ._form-thank-you{position:relative;left:0;right:0;text-align:center;font-size:18px}#_form_1_ ._form-pc-confirmation ._submit{margin-top:16px}@media (min-width:320px) and (max-width:667px){#_form_1_._inline-form._inline-style ._inline-style._button-wrapper{margin-top:20px !important;margin-left:0 !important}}#_form_1_ .iti{width:100%}#_form_1_ .iti.iti--allow-dropdown.iti--separate-dial-code{width:100%}#_form_1_ .iti input{width:100%;border:#979797 1px solid;border-radius:4px}#_form_1_ .iti--separate-dial-code .iti__selected-flag{background-color:#FFFFFF;border-radius:4px}#_form_1_ .iti--separate-dial-code .iti__selected-flag:hover{background-color:rgba(0, 0, 0, 0.05)}#_form_1_ .iti__country-list{border-radius:4px;margin-top:4px;min-width:460px}#_form_1_ .iti__country-list--dropup{margin-bottom:4px}#_form_1_ .phone-error-hidden{display:none}#_form_1_ .phone-error{color:#E40E49}#_form_1_ .phone-input-error{border:1px solid #E40E49 !important}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field fieldset{margin:0;margin-bottom:1.1428571429em;border:none;padding:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field fieldset:last-child{margin-bottom:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field legend{margin-bottom:1.1428571429em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field label{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:0.8571428571em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field label:last-child{margin-bottom:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field input{margin:0;margin-right:8px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label{display:block;font-weight:400;margin-top:-4px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label-with-description{display:block;font-weight:700;margin-top:-4px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-description{margin:0;font-size:0.8571428571em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-subscriptions-unsubscribe-all-description{line-height:normal;margin-top:-2px}
                </style>
                <form method="POST" action="https://taaiconsult.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form  _dark" novalidate data-styles-version="5">
                  <input type="hidden" name="u" value="1" />
                  <input type="hidden" name="f" value="1" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <input type="hidden" name="or" value="eaa061e5-e64a-4a7d-bb46-d0708f536d17" />
                  <div class="_form-content">
                    <div class="_form_element _field_header _full_width _clear">
                      <h2 class="_form-title">Stuur ons een bericht</h2>
                    </div>
                    <div class="_form_element _field_name _full_width">
                      <label for="fullname" class="_form-label">Volledige Naam<span class="field-required">*</span></label>
                      <div class="_field-wrapper">
                        <input type="text" id="fullname" name="fullname" placeholder="Voer uw volledige naam in" required/>
                      </div>
                    </div>
                    <div class="_form_element _field_email _full_width">
                      <label for="email" class="_form-label">E-mailadres<span class="field-required">*</span></label>
                      <div class="_field-wrapper">
                        <input type="text" id="email" name="email" placeholder="Voer uw e-mailadres in" required/>
                      </div>
                    </div>
                    <div class="_form_element _x37698951 _full_width">
                      <input type="hidden" id="ca[12][t]" name="ca[12][t]" value="text"/>
                      <label for="ca[12][v]" class="_form-label">Organisatie<span class="field-required">*</span></label>
                      <div class="_field-wrapper">
                        <input type="text" id="ca[12][v]" name="ca[12][v]" value="" placeholder="" required/>
                      </div>
                    </div>
                    <div class="_form_element _x29914029 _full_width">
                      <input type="hidden" id="ca[13][t]" name="ca[13][t]" value="text"/>
                      <label for="ca[13][v]" class="_form-label">Rol<span class="field-required">*</span></label>
                      <div class="_field-wrapper">
                        <input type="text" id="ca[13][v]" name="ca[13][v]" value="" placeholder="" required/>
                      </div>
                    </div>
                    <div class="_form_element _x80811232 _full_width">
                      <label for="phone" class="_form-label">Telefoonnummer</label>
                      <div class="_field-wrapper">
                        <input type="text" id="phone" name="phone" placeholder="Typ je telefoonnummer in"/>
                      </div>
                    </div>
                    <div class="_form_element _x05976282 _full_width">
                      <label for="customer_account" class="_form-label">Account<span class="field-required">*</span></label>
                      <div class="_field-wrapper">
                        <input type="text" id="customer_account" name="customer_account" placeholder="Typ uw account" required/>
                      </div>
                    </div>
                    <div class="_form_element _x30703468 _full_width">
                      <input type="hidden" id="ca[14][t]" name="ca[14][t]" value="textarea"/>
                      <label for="ca[14][v]" class="_form-label">Bericht</label>
                      <div class="_field-wrapper">
                        <textarea id="ca[14][v]" name="ca[14][v]" placeholder=""></textarea>
                      </div>
                    </div>
                    <div class="_button-wrapper _full_width">
                      <button id="_form_1_submit" class="_submit" type="submit">Verstuur bericht</button>
                    </div>
                    <div class="_clear-element"></div>
                  </div>
                  <div class="_form-thank-you" style="display:none;"></div>
                  <div class="_form-branding">
                    <div class="_marketing-by">Marketing door</div>
                    <a href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms" class="_logo">
                      <span class="form-sr-only">ActiveCampaign</span>
                    </a>
                  </div>
                </form>
                <script>
                window.cfields = [];
                window._show_thank_you = function(id, message, trackcmp_url, email) {
                    var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
                    form.querySelector('._form-content').style.display = 'none';
                    thank_you.innerHTML = message;
                    thank_you.style.display = 'block';
                    const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
                    var visitorObject = window[vgoAlias];
                    if (email && typeof visitorObject !== 'undefined') {
                        visitorObject('setEmail', email);
                        visitorObject('update');
                    } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                        _load_script(trackcmp_url);
                    }
                    if (typeof window._form_callback !== 'undefined') window._form_callback(id);
                    thank_you.setAttribute('tabindex', '-1');
                    thank_you.focus();
                };
                window._show_error = function(id, message, html) {
                    var form = document.getElementById('_form_' + id + '_'),
                        err = document.createElement('div'),
                        button = form.querySelector('button[type="submit"]'),
                        old_error = form.querySelector('._form_error');
                    if (old_error) old_error.parentNode.removeChild(old_error);
                    err.innerHTML = message;
                    err.className = '_error-inner _form_error _no_arrow';
                    var wrapper = document.createElement('div');
                    wrapper.className = '_form-inner _show_be_error';
                    wrapper.appendChild(err);
                    button.parentNode.insertBefore(wrapper, button);
                    var submitButton = form.querySelector('[id^="_form"][id$="_submit"]');
                    submitButton.disabled = false;
                    submitButton.classList.remove('processing');
                    if (html) {
                        var div = document.createElement('div');
                        div.className = '_error-html';
                        div.innerHTML = html;
                        err.appendChild(div);
                    }
                };
                window._load_script = function(url, callback, isSubmit) {
                    var head = document.querySelector('head'), script = document.createElement('script'), r = false;
                    var submitButton = document.querySelector('#_form_1_submit');
                    script.charset = 'utf-8';
                    script.src = url;
                    if (callback) {
                        script.onload = script.onreadystatechange = function() {
                            if (!r && (!this.readyState || this.readyState == 'complete')) {
                                r = true;
                                callback();
                            }
                        };
                    }
                    script.onerror = function() {
                        if (isSubmit) {
                            if (script.src.length > 10000) {
                                _show_error("1", "Sorry, je inzending is mislukt. Kort je antwoorden en probeer het opnieuw.");
                            } else {
                                _show_error("1", "Sorry, je inzending is mislukt. Probeer het opnieuw.");
                            }
                            submitButton.disabled = false;
                            submitButton.classList.remove('processing');
                        }
                    }
                    head.appendChild(script);
                };
                (function() {
                    var iti;
                    if (window.location.search.search("excludeform") !== -1) return false;
                    var form_to_submit = document.getElementById('_form_1_');
                    var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;
                    var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti__selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
                    var form_submit = function(e) {
                        e.preventDefault();
                        var submitButton = e.target.querySelector('#_form_1_submit');
                        submitButton.disabled = true;
                        submitButton.classList.add('processing');
                        var serialized = _form_serialize(document.getElementById('_form_1_')).replace(/%0A/g, '\\\\n');
                        _load_script('https://taaiconsult.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
                        return false;
                    };
                    form_to_submit.addEventListener('submit', form_submit);
                })();
                </script>
              `}} />
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}