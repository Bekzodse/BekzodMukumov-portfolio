export default function LanguageToggle({ language, onChange }) {
  return (
    <div className="language-toggle" aria-label="Tilni tanlash">
      <button
        type="button"
        className={language === "uz" ? "active" : ""}
        onClick={() => onChange("uz")}
        aria-label="O‘zbek tili"
        title="O‘zbek tili"
      >
        🇺🇿
      </button>
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => onChange("en")}
        aria-label="English"
        title="English"
      >
        🇬🇧
      </button>
    </div>
  );
}
