export default function OrganicBlob({ className = "", color = "var(--color-secondary)", opacity = 0.25 }) {
  return (
    <div className={`pointer-events-none absolute animate-float-slow ${className}`} style={{ opacity }}>
      <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color}
          d="M45.9,-58.6C58.9,-49.6,68.3,-34.4,72.1,-17.9C76,-1.4,74.3,16.4,66.5,30.9C58.7,45.4,44.8,56.6,29.1,63.2C13.4,69.8,-4.1,71.8,-20.9,68C-37.6,64.2,-53.6,54.6,-63.1,40.6C-72.6,26.6,-75.7,8.2,-72.4,-8.5C-69.1,-25.2,-59.4,-40.2,-46.3,-49.4C-33.2,-58.6,-16.6,-62,0.6,-62.8C17.8,-63.6,32.9,-67.6,45.9,-58.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
