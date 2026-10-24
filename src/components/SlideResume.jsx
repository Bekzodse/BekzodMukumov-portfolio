import Photo from "./Photo";
import { profile } from "../data";
import LanguageToggle from "./LanguageToggle";

export default function SlideResume({ language, onLanguageChange }) {
  const english = language === "en";
  return (
    <section className="slide slide-resume">
      <Photo className="resume-photo" src="/me.png" fallback="BM" />
      <div className="navy-card resume-card">
        <span className="eyebrow">{english ? "About Me" : "Men haqimda"}</span>
        <h1 className="hero-title">
          {english ? (
            <>
              Hi There,
              <br />
              I’m {profile.name}
            </>
          ) : (
            <>
              Assalomu Aleykum,
              <br />
              Men Mukumov Bekzod
            </>
          )}
        </h1>
        <div className="role-line">
          <span className="line" />
          <span>{english ? profile.role : "Full Stack dasturchi"}</span>
        </div>
      </div>
      <LanguageToggle language={language} onChange={onLanguageChange} />
      
    </section>
  );
}
