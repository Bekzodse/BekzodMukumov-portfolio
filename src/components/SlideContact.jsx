import Icon from "./Icons";
import Photo from "./Photo";
import { profile, socials } from "../data";
import LanguageToggle from "./LanguageToggle";

export default function SlideContact({ language, onLanguageChange }) {
  const english = language === "en";
  return (
    <section className="slide slide-contact">
      <Photo className="contact-photo" src="/me.png" fallback="BM" />
      <div className="navy-card contact-card">
        <span className="eyebrow">{english ? "CONTACT" : "ALOQA"}</span>
        <h2 className="hero-title">
          {english ? "Let’s Talk" : "Bog‘lanamiz"}
          <br />
          {english ? "Or Follow Me" : "Yoki kuzating"}
        </h2>

        <ul className="contact-list">
          <li><Icon name="phone" /> {profile.phoneAlt}</li>
          <li><Icon name="mail" /> {profile.email}</li>
          <li><Icon name="globe" /> {profile.site}</li>
          <li><Icon name="home" /> {english ? profile.address : "TOSHKENT, O‘ZBEKISTON"}</li>
        </ul>

        <div className="social-grid">
          {socials.map((s) => (
            <a key={s.key} className="social-row" href={s.url} target="_blank" rel="noreferrer">
              <span className="social-badge" style={{ background: s.color }}>
                <Icon name={s.key} />
              </span>
              <span>{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
      <LanguageToggle language={language} onChange={onLanguageChange} />
    </section>
  );
}
