"use client";

import { handleContactSubmit } from "@/components/client/SiteEffects";
import { FacebookIcon, MessengerIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { phoneHref, siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/images";

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-left">
          {showHeading ? (
          <div className="contact-hd">
            <span className="lbl reveal">Nous Contacter</span>
            <h2 className="sec-title reveal d1">
              Parlons de votre <em>projet</em>
            </h2>
            <p className="contact-txt reveal d2">
              {siteConfig.displayName} vous répond à Cocody. {siteConfig.hours.note}
            </p>
          </div>
          ) : (
            <p className="contact-txt reveal d2" style={{ marginBottom: 8 }}>
              {siteConfig.displayName} vous répond à Cocody. {siteConfig.hours.note}
            </p>
          )}

          <div className="contact-details reveal d2">
            <div className="cdet">
              <div className="cdet-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Adresse</div>
                <div className="cdet-val">
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.district}, {siteConfig.contact.city}
                </div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Téléphone</div>
                <div className="cdet-val">
                  <a href={phoneHref(siteConfig.contact.phone)}>{siteConfig.contact.phone}</a>
                  <br />
                  <a href={phoneHref(siteConfig.contact.phoneMobile)}>
                    {siteConfig.contact.phoneMobile}
                  </a>
                </div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Email</div>
                <div className="cdet-val">
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-ico cdet-ico--facebook">
                <FacebookIcon size={18} />
              </div>
              <div>
                <div className="cdet-lbl">Facebook</div>
                <div className="cdet-val">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    facebook.com/batiremgroup
                  </a>
                </div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-ico cdet-ico--messenger">
                <MessengerIcon size={18} />
              </div>
              <div>
                <div className="cdet-lbl">Messenger</div>
                <div className="cdet-val">
                  <a
                    href={siteConfig.social.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    m.me/batiremgroup
                  </a>
                </div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-ico cdet-ico--whatsapp">
                <WhatsAppIcon size={18} />
              </div>
              <div>
                <div className="cdet-lbl">WhatsApp</div>
                <div className="cdet-val">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.contact.phoneMobile}
                  </a>
                </div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Horaires</div>
                <div className="cdet-val">
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.saturday}
                </div>
              </div>
            </div>
          </div>

          <a
            href={siteConfig.contact.mapsUrl}
            className="contact-map reveal d3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir BATIREM GROUP sur Google Maps"
          >
            <SectionPhoto
              src={siteImages.contact.map}
              alt={`Localisation ${siteConfig.name} — Cocody, Abidjan`}
              sizes="400px"
            />
            <div className="contact-map-overlay" />
            <div className="map-pin">
              <div className="map-pin-dot" />
              <div className="map-pin-lbl">BATIREM — Cocody</div>
            </div>
          </a>
        </div>

        <form className="contact-form reveal r-right" onSubmit={handleContactSubmit}>
          <div className="form-row">
            <div className="fg">
              <label htmlFor="prenom">Prénom</label>
              <input id="prenom" type="text" placeholder="Kouassi" />
            </div>
            <div className="fg">
              <label htmlFor="nom">Nom</label>
              <input id="nom" type="text" placeholder="Diallo" />
            </div>
          </div>
          <div className="fg">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder={siteConfig.contact.email} />
          </div>
          <div className="fg">
            <label htmlFor="telephone">Téléphone</label>
            <input
              id="telephone"
              type="tel"
              placeholder={siteConfig.contact.phoneMobile}
            />
          </div>
          <div className="fg">
            <label htmlFor="sujet">Objet de la demande</label>
            <div className="fg-select-wrap">
              <select id="sujet" defaultValue="">
                <option value="">Sélectionner un objet</option>
                <option>Achat / Location immobilière</option>
                <option>Lotissement &amp; terrains</option>
                <option>Achat de matériaux de construction</option>
                <option>Devis BTP / construction</option>
                <option>Visite d&apos;un bien</option>
                <option>Partenariat professionnel</option>
                <option>Autre demande</option>
              </select>
              <div className="fg-select-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
          <div className="fg">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Décrivez votre projet ou votre demande..." />
          </div>
          <button type="submit" className="form-submit">
            Envoyer le message
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
