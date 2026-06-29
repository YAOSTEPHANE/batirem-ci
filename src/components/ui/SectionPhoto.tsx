import Image from "next/image";

interface SectionPhotoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function SectionPhoto({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SectionPhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`section-photo ${className}`}
      sizes={sizes}
      priority={priority}
    />
  );
}
