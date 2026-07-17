type InsigniaProps = {
  size?: number;
  variant?: "copper" | "white";
  withLockup?: boolean;
  className?: string;
};

export default function Insignia({
  size = 80,
  variant = "copper",
  withLockup = false,
  className = "",
}: InsigniaProps) {
  const stroke = variant === "white" ? "#FFFFFF" : "#8B4A2B";
  const fill = variant === "white" ? "#FFFFFF" : "#8B4A2B";

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg
        width={size}
        height={size * 1.45}
        viewBox="0 0 100 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The White Butter Residences"
      >
        {/* Outer oval (japa mala beads) */}
        <ellipse
          cx="50"
          cy="72.5"
          rx="32"
          ry="60"
          stroke={stroke}
          strokeWidth="1.4"
          fill="none"
        />

        {/* Bead dots around the ring */}
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 32;
          const y = 72.5 + Math.sin(angle) * 60;
          return <circle key={i} cx={x} cy={y} r="1.1" fill={fill} />;
        })}

        {/* Central tilak motif (inverted U + droplet) */}
        <path
          d="M44 38 Q44 30, 50 30 Q56 30, 56 38 L56 84 Q56 95, 50 95 Q44 95, 44 84 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.4"
        />
        {/* Inner teardrop fill */}
        <path
          d="M47 60 Q47 70, 50 92 Q53 70, 53 60 Q53 56, 50 56 Q47 56, 47 60 Z"
          fill={fill}
        />
      </svg>

      {withLockup && (
        <div
          className="flex items-center gap-3 mt-2"
          style={{ color: variant === "white" ? "#FFFFFF" : "#8B4A2B" }}
        >
          <span
            className="font-serif italic text-[11px] tracking-[0.18em]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            THE
          </span>
          <span
            className="font-display text-[15px] tracking-[0.22em] font-medium"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            WHITE BUTTER
          </span>
          <span
            className="font-serif italic text-[11px] tracking-[0.18em]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
          </span>
        </div>
      )}
      {withLockup && (
        <div
          className="text-[9px] tracking-[0.5em] mt-0.5"
          style={{
            color: variant === "white" ? "#FFFFFF" : "#8B4A2B",
            fontFamily: "var(--font-cinzel)",
          }}
        >
          RESIDENCES
        </div>
      )}
    </div>
  );
}
