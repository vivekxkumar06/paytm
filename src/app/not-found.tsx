import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
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

        {/* 404 Display */}
        <div className="relative mb-6">
          <p className="text-[160px] sm:text-[220px] font-extrabold leading-none text-[#002970] opacity-[0.06] select-none">
            404
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00BAF2]/10 flex items-center justify-center mb-4">
              <Search size={36} className="text-[#00BAF2]" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#002970]">
              Page Not Found
            </h1>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 px-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#002970] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#00204d] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#002970]/20"
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
