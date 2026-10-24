import Icon from "./Icons";
import Photo from "./Photo";
import { profile, education } from "../data";
import LanguageToggle from "./LanguageToggle";

export default function SlideEducation({ language, onLanguageChange }) {
  const english = language === "en";
  return (
    <section className="slide slide-education">
      <div className="navy-card edu-card">
        <span className="eyebrow light">{english ? "HISTORY" : "TARIX"}</span>
        <h2 className="name-cyan big">{english ? "Education" : "Ta’lim"}</h2>
        <p className="edu-card-note">{english ? "My academic journey" : "Mening ta’lim yo‘lim"}</p>
      </div>

      <header className="edu-header">
        <p>
          <b className="indigo">{profile.name}</b> <b>- {english ? profile.role : "Full Stack dasturchi"}</b>
          <span className="muted"> {english ? "21 years old" : "21 yosh"}, {english ? profile.city : "Toshkent"}</span>
        </p>
        <div className="edu-contacts">
          <span><Icon name="phone" /> {profile.phone}</span>
          <span><Icon name="mail" /> {profile.email}</span>
          <span><Icon name="globe" /> {profile.site}</span>
        </div>
      </header>

      <div className="timeline">
        {education.map((e, i) => (
          <article key={i} className="timeline-item">
            <div className="edu-photo-wrap">
              <Photo className="edu-photo" src={e.image} tone={e.tone} fallback="🎓" />
            </div>
            <div className="edu-content">
              <span className="edu-years">{e.years}</span>
              <h4 className="edu-school">{e.school}</h4>
              <p className="edu-degree">
                <b>{english ? e.degree : "Bakalavr darajasi,"}</b>
                <br />
                {english ? e.field : e.field === "Software Engineering" ? "Dasturiy ta’minot muhandisligi" : "Kompyuter fanlari"}
              </p>
              <a className="edu-url" href={e.url} target="_blank" rel="noreferrer">
                {english ? "Visit university" : "Universitet saytiga kirish"} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <LanguageToggle language={language} onChange={onLanguageChange} />
    </section>
  );
}
