"use client";

import { useState } from "react";

const DEFAULT_FALLBACK = "/images/hero-video-area-shopify-01.webp";

export default function FallbackImage({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt = "",
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

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
