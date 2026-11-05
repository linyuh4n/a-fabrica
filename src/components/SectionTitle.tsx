import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  divider?: boolean;
}

export function SectionTitle({ title, subtitle, align = "center", divider = true }: SectionTitleProps) {
  return (
    <div className={`section-header ${align === "left" ? "left" : ""}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {divider && <div className="section-divider" aria-hidden="true" />}
    </div>
  );
}
