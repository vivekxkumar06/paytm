"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function DownloadQR() {
  return (
    <div className="group relative">
      <div
        
        className="flex items-center gap-2 font-semibold text-[15px]"
      >
        <Download size={18} />
        Download App
      </div>

      <div className="invisible absolute right-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="relative w-[260px] rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          
          <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 border-l border-t border-gray-200 bg-white" />

          <h3 className="text-center text-[16px] font-bold">
            Scan to Download
          </h3>

          <div className="mt-4 flex justify-center">
            <Image
              src="/images/Q-code.png"
              alt="QR Code"
              width={170}
              height={170}
            />
          </div>

          <p className="mt-3 text-center text-sm text-gray-500">
            Scan QR code to install Paytm App
          </p>
        </div>
      </div>
    </div>
  );
}