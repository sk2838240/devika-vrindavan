import { ReactNode } from "react";
import Ornament from "./Ornament";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  ornament?: boolean;
  variant?: "display" | "eyebrow-sans";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  ornament = false,
  variant = "display",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignClasses} ${className}`}>
      {ornament && (
        <Ornament className="text-copper mb-6 opacity-80" width={170} />
      )}

      {eyebrow && (
        <p className="eyebrow text-xs md:text-sm mb-3 text-copper">{eyebrow}</p>
      )}

      {variant === "display" ? (
        <h2 className="display-heading text-[28px] md:text-[40px] lg:text-[46px] text-copper">
          {title}
        </h2>
      ) : (
        <h2 className="eyebrow text-xl md:text-2xl text-copper-deep">{title}</h2>
      )}

      {subtitle && (
        <p
          className={`body-serif mt-4 text-[16px] md:text-[18px] text-ink/80 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
