import type { ReactNode } from "react";

interface SectionHeaderProps {
  number?: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
  action?: ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  number,
  label,
  title,
  subtitle,
  action,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`sec-hd${centered ? " sec-hd-center" : ""} ${className}`.trim()}>
      <div className="sec-hd-main">
        <div className="sec-hd-meta reveal">
          {number ? <span className="sec-hd-num">{number}</span> : null}
          <span className="lbl">{label}</span>
        </div>
        <h2 className="sec-title reveal d1">{title}</h2>
        {subtitle ? <p className="sec-hd-sub reveal d2">{subtitle}</p> : null}
      </div>
      {action ? <div className="sec-hd-action reveal">{action}</div> : null}
    </div>
  );
}
