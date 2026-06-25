"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const rechargeItems = [
  { label: "Mobile Recharge", href: "/recharge-bills/mobile" },
  { label: "Electricity bill", href: "/recharge-bills/electricity" },
  { label: "DTH recharge", href: "/recharge-bills/dth" },
  { label: "Municipal bill", href: "/recharge-bills/municipal" },
  { label: "Water bill", href: "/recharge-bills/water" },
  { label: "Gas & Cylinder", href: "/recharge-bills/gas" },
  { label: "Loan EMI", href: "/recharge-bills/loan-emi" },
  { label: "Insurance Premium", href: "/recharge-bills/insurance" },
  { label: "Challan", href: "/recharge-bills/challan" },
];

export default function RechargeDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button className="flex items-center gap-1 font-bold text-[15px] text-black">
        Recharge & Bills
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown — exact Paytm style */}
      {open && (
        <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-white rounded-2xl z-50"
          style={{
            minWidth: "220px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          }}
        >
          {/* Caret triangle */}
          <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0
            border-l-[9px] border-l-transparent
            border-r-[9px] border-r-transparent
            border-b-[9px] border-b-white"
          />

          {/* Items */}
          <ul className="py-2">
            {rechargeItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="block px-6 py-[11px] text-[14px] font-medium text-gray-900
                    hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}