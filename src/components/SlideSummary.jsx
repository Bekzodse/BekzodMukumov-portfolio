import Icon from "./Icons";
import Photo from "./Photo";
import { profile, experience, socials } from "../data";
import LanguageToggle from "./LanguageToggle";

export default function SlideSummary({ language, onLanguageChange }) {
  const english = language === "en";
  const summary = english
    ? profile.summary
    : profile.summaryUz;
  return (
    <section className="slide slide-summary">
      <Photo className="summary-ghost" src="/me.png" fallback="" />

      <aside className="summary-side">
        <div className="navy-card summary-card">
          <span className="eyebrow light">{english ? "SUMMARY" : "QISQACHA"}</span>
          <h2 className="name-cyan">{profile.name}</h2>
          <ul className="dot-list">
            <li>{english ? profile.role : "Full Stack dasturchi"}</li>
            <li>{english ? "21 years old" : "21 yosh"}</li>
            <li>{english ? profile.city : "Toshkent"}</li>
          </ul>
          <div className="contact-rows">
            <div><Icon name="phone" /> <span>{profile.phone}</span></div>
            <div><Icon name="mail" /> <span>{profile.email}</span></div>
            <div><Icon name="globe" /> <span>{profile.site}</span></div>
          </div>
        </div>
        <div className="summary-socials">
          {socials.map((social) => (
            <a
              key={social.key}
              className="social-tile"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.key}
            >
              <Icon name={social.key} />
            </a>
          ))}
        </div>
      </aside>

      <div className="summary-main">
        <div className="summary-intro">
          <span className="eyebrow dark">{english ? "PROFILE" : "PROFIL"}</span>
          <p className="summary-text">{summary}</p>
        </div>

        <h3 className="block-title">{english ? "Experience History" : "Ish tajribasi"}</h3>
        <div className="exp-grid">
          {experience.map((e, i) => (
            <div key={i} className="exp-item">
              <span className="badge-green">{english ? e.type : "To‘liq stavka"}</span>
              {e.url ? (
                <a className="exp-company" href={e.url} target="_blank" rel="noreferrer">
                  {e.company}
                </a>
              ) : (
                <p className="exp-company">{e.company}</p>
              )}
              <h4 className="exp-title">
                {english
                  ? e.title
                  : e.title === "Workly, Web Developer"
                    ? "Workly, Veb-dasturchi"
                    : e.title === "Quality Assurance Engineer"
                      ? "Sifat nazorati muhandisi"
                      : "Full Stack dasturchi"}
              </h4>
              <span className="exp-years">{e.years}</span>
            </div>
          ))}
        </div>

      </div>
      <LanguageToggle language={language} onChange={onLanguageChange} />
    </section>
  );
}
