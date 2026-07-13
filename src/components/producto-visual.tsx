// Placeholder visual del producto (frasco). Se reemplaza por la foto/render real
// del frasco de Giapura cuando el usuario lo tenga. Es un SVG para que se vea
// nítido en cualquier tamaño mientras tanto.
export function ProductoVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Frasco de pasta de maní Giapura"
    >
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a2c1e" />
          <stop offset="1" stopColor="#241a11" />
        </linearGradient>
        <linearGradient id="mani" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6a94b" />
          <stop offset="1" stopColor="#b97f2c" />
        </linearGradient>
        <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c65a" />
          <stop offset="1" stopColor="#c9922f" />
        </linearGradient>
      </defs>
      {/* Tapa */}
      <rect x="58" y="22" width="84" height="26" rx="7" fill="url(#lid)" />
      <rect x="62" y="46" width="76" height="10" rx="3" fill="#8f6a24" />
      {/* Cuerpo del frasco */}
      <rect x="50" y="56" width="100" height="212" rx="20" fill="url(#glass)" />
      {/* Contenido (pasta de maní) */}
      <rect x="58" y="96" width="84" height="164" rx="12" fill="url(#mani)" />
      {/* Etiqueta */}
      <rect x="62" y="130" width="76" height="96" rx="8" fill="#f6efe2" />
      <text
        x="100"
        y="168"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill="#1e1712"
      >
        giapura
      </text>
      <text
        x="100"
        y="190"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        letterSpacing="1.5"
        fill="#9a8b78"
      >
        100% MANÍ
      </text>
      <rect x="80" y="204" width="40" height="4" rx="2" fill="#d9a441" />
      {/* Brillo del vidrio */}
      <rect x="60" y="66" width="10" height="190" rx="5" fill="#ffffff" opacity="0.06" />
    </svg>
  );
}
