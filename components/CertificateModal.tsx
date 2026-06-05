"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface CertificateModalProps {
  imageSrc: string;
  alt: string;
  onClose: () => void;
}

export const CertificateModal = ({ imageSrc, alt, onClose }: CertificateModalProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Certificate preview"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 transition"
        aria-label="Close certificate"
      >
        <X className="w-5 h-5" />
      </button>
      <div
        className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={1200}
          height={848}
          className="w-full h-auto max-h-[90vh] object-contain bg-[#2563eb]"
          priority
        />
      </div>
    </div>
  );
};
