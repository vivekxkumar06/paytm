"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

const businessItems = [
  "Payment Gateway",
  "Soundbox",
  "POS Machine",
  "Business Loan",
  "QR Code Payments",
  "Settlement Account",
  "Online Payments",
  "Merchant Support",
];

export default function BusinessDropdown() {
  return (
    <div className="group relative">
      {/* Trigger */}
      <div
       
        className="flex items-center gap-1 py-8 font-semibold text-[15px]"
      >
        Paytm for Business

        <ChevronDown
          size={15}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </div>

      {/* Dropdown */}
      <div className="invisible absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white" />

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          {businessItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="block px-6 py-2 text-[15px] font-semibold text-black hover:bg-[#f5f9ff] hover:text-[#002970]"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}