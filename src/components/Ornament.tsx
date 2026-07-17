type OrnamentProps = {
  className?: string;
  width?: number;
};

export default function Ornament({ className = "", width = 180 }: OrnamentProps) {
  return (
    <svg
      width={width}
      height={(width * 22) / 180}
      viewBox="0 0 180 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="11" x2="62" y2="11" stroke="currentColor" strokeWidth="0.8" />
      <line x1="118" y1="11" x2="180" y2="11" stroke="currentColor" strokeWidth="0.8" />

      <path
        d="M70 11 C 74 4, 82 4, 86 11 C 82 18, 74 18, 70 11 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M94 11 C 98 4, 106 4, 110 11 C 106 18, 98 18, 94 11 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <rect
        x="87.5"
        y="8.5"
        width="5"
        height="5"
        transform="rotate(45 90 11)"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}
