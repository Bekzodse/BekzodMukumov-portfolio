import Photo from "./Photo";
import { certifications } from "../data";
import LanguageToggle from "./LanguageToggle";

export default function SlideCertification({ language, onLanguageChange }) {
  const english = language === "en";
  return (
    <section className="slide slide-cert">
      <div className="cert-left">
        <span className="eyebrow dark">{english ? "ACHIEVEMENTS" : "YUTUQLAR"}</span>
        <h2 className="cert-title">{english ? "Certification" : "Sertifikatlar"}</h2>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <div key={i} className="cert-item">
              <h4><span className="dash" />{c.title}</h4>
              <p>{english ? c.sub : c.sub === "Backend Development" ? "Backend dasturlash" : c.sub === "Exploring technology and innovation" ? "Texnologiya va innovatsiyalarni o‘rganish" : c.sub === "JAVA Spring Boot," ? "JAVA Spring Boot," : "Backend dasturlash"} <b>{c.year}</b></p>
            </div>
          ))}
        </div>

      </div>
      <LanguageToggle language={language} onChange={onLanguageChange} />

      <Photo className="cert-photo" src="/certification.png" fallback="BM" />
    </section>
  );
}
