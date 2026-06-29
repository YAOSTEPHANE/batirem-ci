import Image from "next/image";
import Link from "next/link";
import logoSrc from "@/assets/logo.png";
import { siteConfig } from "@/lib/constants";

type LogoVariant = "header" | "footer";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
  link?: boolean;
  onClick?: () => void;
}

const sizes: Record<LogoVariant, { width: number; height: number; className: string }> = {
  header: { width: 1024, height: 437, className: "nav-logo-img" },
  footer: { width: 1024, height: 437, className: "foot-logo-img" },
};

export function Logo({
  variant = "header",
  className = "",
  priority = false,
  link = true,
  onClick,
}: LogoProps) {
  const { width, height, className: variantClass } = sizes[variant];
  const image = (
    <Image
      src={logoSrc}
      alt={siteConfig.name}
      width={width}
      height={height}
      className={`${variantClass} ${className}`.trim()}
      priority={priority}
    />
  );

  if (!link) {
    return image;
  }

  return (
    <Link href="/" className={variant === "header" ? "nav-logo" : undefined} onClick={onClick}>
      {image}
    </Link>
  );
}
