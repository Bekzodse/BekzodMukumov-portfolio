import { useEffect, useState } from "react";
import SlideResume from "./components/SlideResume";
import SlideSummary from "./components/SlideSummary";
import SlideEducation from "./components/SlideEducation";
import SlideCertification from "./components/SlideCertification";
import SlideContact from "./components/SlideContact";
import SlideSkills from "./components/SlideSkills";
import SlideAI from "./components/SlideAI";

const slides = [SlideResume, SlideSummary, SlideSkills, SlideAI, SlideEducation, SlideCertification, SlideContact];

export default function App() {
  const [i, setI] = useState(0);
  const [language, setLanguage] = useState("uz");
  const go = (n) => setI(Math.max(0, Math.min(slides.length - 1, n)));
  const names = language === "en"
    ? ["About Me", "Summary", "Skills", "AI", "Education", "Certification", "Contact"]
    : ["Men haqimda", "Qisqacha", "Ko‘nikmalar", "AI", "Ta’lim", "Sertifikatlar", "Aloqa"];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") setI((v) => Math.min(slides.length - 1, v + 1));
      if (e.key === "ArrowLeft" || e.key === "PageUp") setI((v) => Math.max(0, v - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Current = slides[i];

  return (
    <div className="app">
      <div className="slide-frame" key={i}>
        <Current language={language} onLanguageChange={setLanguage} />
        <nav className="controls">
          <div className="tabs">
            {names.map((n, idx) => (
              <button key={n} className={idx === i ? "tab active" : "tab"} onClick={() => go(idx)}>
                {n}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
