"use client";

import { useEffect, useState } from "react";

const DEFAULT_FALLBACK = "/images/hero-video-area-shopify-01.webp";

export default function FallbackImage({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt = "",
  ...props
}) {
  const resolvedSrc = src || fallbackSrc;
  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);

  useEffect(() => {
    setCurrentSrc(resolvedSrc);
  }, [resolvedSrc]);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
