import { useState } from "react";

/**
 * Rasmni /public/photo.jpg dan oladi.
 * Fayl bo'lmasa, chiroyli placeholder ko'rsatiladi.
 */
export default function Photo({ src = "/photo.jpg", className = "", style, fallback = "JH", tone }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo ${className}`} style={{ ...style, ...(failed && tone ? { background: tone } : {}) }}>
      {!failed && <img src={src} alt="" onError={() => setFailed(true)} />}
      {failed && <span className="photo-fallback">{fallback}</span>}
    </div>
  );
}
