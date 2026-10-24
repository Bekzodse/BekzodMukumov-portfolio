import { skills } from "../data";
import LanguageToggle from "./LanguageToggle";

export default function SlideSkills({ language, onLanguageChange }) {
  const english = language === "en";
  return (
    <section className="slide slide-skills">
      <div className="skills-heading">
        <span className="eyebrow dark">{english ? "EXPERTISE" : "KO‘NIKMALAR"}</span>
        <h2 className="skills-title">{english ? "Skills" : "Ko‘nikmalar"}</h2>
        <p className="skills-intro">{english ? "Technologies and tools I use to build reliable digital experiences." : "Ishonchli raqamli tajribalar yaratishda foydalanadigan texnologiyalar."}</p>
      </div>
      <LanguageToggle language={language} onChange={onLanguageChange} />

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skills-card" key={skill.name}>
            <div className="skills-card-head">
              <h3>{skill.name}</h3>
              <strong>{skill.value}%</strong>
            </div>
            <div className="skills-track" aria-label={`${skill.name}: ${skill.value}%`}>
              <div className="skills-progress" style={{ width: `${skill.value}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
