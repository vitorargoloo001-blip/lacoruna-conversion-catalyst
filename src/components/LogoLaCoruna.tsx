const LogoLaCoruna = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="La Coruña Edifício Residencial"
    >
      {/* Símbolo ornamental — losango central com pétalas */}
      <g transform="translate(160 70)">
        {/* Centro azul */}
        <rect x="-9" y="-9" width="18" height="18" transform="rotate(45)" fill="hsl(var(--primary-foreground))" />

        {/* Pétalas laranjas — cantos */}
        <g fill="hsl(var(--accent))">
          <path d="M -38 -2 L -22 -18 L -22 14 Z" />
          <path d="M 38 -2 L 22 -18 L 22 14 Z" />
          <path d="M -2 -38 L -18 -22 L 14 -22 Z" />
          <path d="M -2 38 L -18 22 L 14 22 Z" />
        </g>

        {/* Pontas brancas/bege externas */}
        <g fill="hsl(var(--primary-foreground))">
          <rect x="-50" y="-5" width="10" height="10" transform="rotate(45 -45 0)" />
          <rect x="40" y="-5" width="10" height="10" transform="rotate(45 45 0)" />
          <rect x="-5" y="-50" width="10" height="10" transform="rotate(45 0 -45)" />
          <rect x="-5" y="40" width="10" height="10" transform="rotate(45 0 45)" />
        </g>
      </g>

      {/* Wordmark "LA CORUÑA" */}
      <text
        x="160"
        y="160"
        textAnchor="middle"
        fill="hsl(var(--primary-foreground))"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="38"
        fontWeight="500"
        letterSpacing="6"
      >
        LA CORUÑA
      </text>

      {/* Tagline */}
      <text
        x="160"
        y="184"
        textAnchor="middle"
        fill="hsl(var(--primary-foreground))"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="5"
        opacity="0.75"
      >
        EDIFÍCIO RESIDENCIAL
      </text>
    </svg>
  );
};

export default LogoLaCoruna;
