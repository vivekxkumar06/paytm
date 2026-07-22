"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error to console (can be replaced with a logging service)
    console.error("[Paytm Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/paytm.png"
            alt="Paytm"
            className="w-[160px] object-contain"
          />
        </div>

        {/* Error Icon */}
        <div className="relative mb-6">
          <p className="text-[160px] sm:text-[220px] font-extrabold leading-none text-[#e53e3e] opacity-[0.05] select-none">
            500
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <AlertTriangle
                size={36}
                className="text-red-500"
                strokeWidth={1.5}
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#002970]">
              Something Went Wrong
            </h1>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4 px-4">
          We hit an unexpected error. Our team has been notified. Please try
          again or return to the homepage.
        </p>

        {/* Error Digest (technical, shown small) */}
        {error.digest && (
          <p className="text-xs text-gray-400 mb-8 font-mono bg-gray-100 px-4 py-2 rounded-lg inline-block">
            Error ID: {error.digest}
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-[#00BAF2] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#0099cc] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00BAF2]/20"
          >
            <RefreshCw size={20} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border-2 border-[#002970] text-[#002970] font-semibold px-8 py-4 rounded-full hover:bg-[#002970] hover:text-white transition-all duration-300"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="h-px w-16 bg-gray-300" />
          <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">
            Paytm &mdash; India&apos;s Payments App
          </span>
          <div className="h-px w-16 bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
