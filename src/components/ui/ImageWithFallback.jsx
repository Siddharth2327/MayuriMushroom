import { useState } from "react";
import { GiMushroomGills } from "react-icons/gi";

export default function ImageWithFallback({ src, alt = "", className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-secondary/50 via-primary/30 to-accent/40 ${className}`}
      >
        <GiMushroomGills className="text-primary/60" size={42} />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
