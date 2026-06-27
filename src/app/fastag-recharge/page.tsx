"use client";

import { useState } from "react";
import {
  Smartphone,
  Tag,
  Tv,
  Zap,
  CreditCard,
  Shield,
  Flame,
  Wind,
  Droplets,
  Wifi,
  FileText,
  MoreHorizontal,
  ChevronDown,
  Search,
  X,
} from "lucide-react";

const navItems = [
  { icon: Smartphone, label: "Mobile" },
  { icon: Tag, label: "FASTag Recharge", active: true },
  { icon: Tv, label: "DTH Recharge" },
  { icon: Zap, label: "Electricity Bill" },
  { icon: CreditCard, label: "Loan EMI" },
  { icon: Shield, label: "Insurance / LIC" },
  { icon: Flame, label: "Piped Gas Bill" },
  { icon: Wind, label: "Book a Cylinder" },
  { icon: Droplets, label: "Water" },
  { icon: Wifi, label: "Broadband/Landline" },
  { icon: FileText, label: "Challan" },
  { icon: MoreHorizontal, label: "More" },
];

const banks = [
  {
    name: "IDFC First Bank Recharge",
    bg: "#7B1D1D",
    abbr: "IDFC",
    color: "#fff",
    style: "text",
  },
  {
    name: "State Bank of India Recharge",
    bg: "#1A237E",
    abbr: "SBI",
    color: "#fff",
    style: "dot",
  },
  {
    name: "ICICI Bank Recharge",
    bg: "#FF6F00",
    abbr: "i",
    color: "#fff",
    style: "text",
  },
  {
    name: "HDFC Bank Recharge",
    bg: "#B71C1C",
    abbr: "H",
    color: "#fff",
    style: "square",
  },
  {
    name: "Airtel Payments Bank Recharge",
    bg: "#E53935",
    abbr: "Airtel",
    color: "#fff",
    style: "text",
  },
  {
    name: "Kotak Mahindra Bank Recharge",
    bg: "#1A237E",
    abbr: "KMB",
    color: "#fff",
    style: "text",
  },
  {
    name: "IndusInd Bank Recharge",
    bg: "#0288D1",
    abbr: "IND",
    color: "#fff",
    style: "text",
  },
  {
    name: "AU Small Finance Bank",
    bg: "#6A1B9A",
    abbr: "AU",
    color: "#fff",
    style: "text",
  },
  {
    name: "Axis Bank Recharge",
    bg: "#880E4F",
    abbr: "A",
    color: "#fff",
    style: "text",
  },
  {
    name: "Bajaj Pay Recharge",
    bg: "#1565C0",
    abbr: "B",
    color: "#fff",
    style: "text",
  },
  {
    name: "Bandhan Bank Recharge",
    bg: "#BF360C",
    abbr: "BB",
    color: "#fff",
    style: "text",
  },
  {
    name: "Bank of Baroda",
    bg: "#E65100",
    abbr: "BoB",
    color: "#fff",
    style: "text",
  },
  {
    name: "Bank of Maharashtra",
    bg: "#1A237E",
    abbr: "BoM",
    color: "#fff",
    style: "text",
  },
  {
    name: "Blackbuck Recharge",
    bg: "#C62828",
    abbr: "BB",
    color: "#fff",
    style: "text",
  },
  {
    name: "Canara Bank Recharge",
    bg: "#F9A825",
    abbr: "CB",
    color: "#333",
    style: "text",
  },
  {
    name: "City Union Bank Recharge",
    bg: "#E91E8C",
    abbr: "CUB",
    color: "#fff",
    style: "text",
  },
  {
    name: "Equitas Small Finance Bank Recharge",
    bg: "#1B5E20",
    abbr: "e",
    color: "#fff",
    style: "text",
  },
  {
    name: "Federal Bank Recharge",
    bg: "#0D47A1",
    abbr: "F",
    color: "#fff",
    style: "text",
  },
  {
    name: "IDBI Bank Recharge",
    bg: "#E65100",
    abbr: "IDBI",
    color: "#fff",
    style: "text",
  },
  {
    name: "Indian Bank Recharge",
    bg: "#F57F17",
    abbr: "IB",
    color: "#fff",
    style: "text",
  },
  {
    name: "Indian Highways Management Company Recharge",
    bg: "#263238",
    abbr: "IHMCL",
    color: "#fff",
    style: "text",
  },
  {
    name: "Indian Overseas Bank Recharge",
    bg: "#1A237E",
    abbr: "IOB",
    color: "#fff",
    style: "text",
  },
  {
    name: "Jammu and Kashmir Bank Recharge",
    bg: "#fff",
    abbr: "J&K",
    color: "#333",
    style: "text",
  },
  {
    name: "KVB Fastag Recharge",
    bg: "#F9A825",
    abbr: "KVB",
    color: "#1B5E20",
    style: "text",
  },
  {
    name: "Karnataka Bank Recharge",
    bg: "#4A148C",
    abbr: "★",
    color: "#fff",
    style: "text",
  },
  {
    name: "LivQuik Technology Recharge",
    bg: "#AD1457",
    abbr: "LQ",
    color: "#fff",
    style: "text",
  },
  {
    name: "Punjab National Bank Recharge",
    bg: "#F57F17",
    abbr: "pnb",
    color: "#fff",
    style: "text",
  },
  {
    name: "South Indian Bank Recharge",
    bg: "#fff",
    abbr: "SIB",
    color: "#C62828",
    style: "text",
  },
  {
    name: "UCO Bank Recharge",
    bg: "#1565C0",
    abbr: "UCO",
    color: "#fff",
    style: "text",
  },
  {
    name: "Union Bank of India Recharge",
    bg: "#fff",
    abbr: "UBI",
    color: "#C62828",
    style: "text",
  },
  {
    name: "Yes Bank Recharge",
    bg: "#fff",
    abbr: "✓",
    color: "#E91E8C",
    style: "text",
  },
];

export default function FasTagRecharge() {
  const [selectedBank, setSelectedBank] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = banks.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans mt-20">
      {/* Top Nav */}
      <div className="bg-[#002970] w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-2 overflow-x-auto scrollbar-hide py-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`flex flex-col items-center gap-1 min-w-[80px] px-2 py-2 rounded transition-colors ${
                    item.active
                      ? "text-white"
                      : "text-blue-200 hover:text-white"
                  }`}
                >
                  <Icon size={22} className="flex-shrink-0" />
                  <span className="text-[11px] leading-tight text-center whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-7xl mx-auto px-4 pb-10">
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
            <h2 className="text-[17px] font-semibold text-gray-800 mb-5">
              FasTag Recharge
            </h2>

            {/* Bank Dropdown */}
            <div className="mb-5 relative">
              <label className="block text-[12px] text-gray-400 mb-1">
                Bank
              </label>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between border-b border-gray-300 pb-2 text-sm text-gray-700 focus:outline-none hover:border-blue-500 transition-colors"
              >
                <span className={selectedBank ? "text-gray-800" : "text-gray-400"}>
                  {selectedBank || "Select Bank"}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 mt-1 max-h-72 overflow-hidden">
                  {/* Search inside dropdown */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 sticky top-0 bg-white">
                    <Search size={14} className="text-gray-400" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search bank..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="flex-1 text-sm outline-none text-gray-700"
                    />
                    {search && (
                      <button onClick={() => setSearch("")}>
                        <X size={14} className="text-gray-400" />
                      </button>
                    )}
                  </div>
                  <div className="overflow-y-auto max-h-56">
                    {filtered.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-4">
                        No bank found
                      </p>
                    ) : (
                      filtered.map((bank) => (
                        <button
                          key={bank.name}
                          onClick={() => {
                            setSelectedBank(bank.name);
                            setDropdownOpen(false);
                            setSearch("");
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 text-left transition-colors"
                        >
                          {/* Mini avatar */}
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 border border-gray-100"
                            style={{ background: bank.bg, color: bank.color }}
                          >
                            {bank.abbr.slice(0, 3)}
                          </div>
                          <span className="text-sm text-gray-700">
                            {bank.name}
                          </span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <p className="text-[13px] text-[#00BAF2] mb-5 cursor-pointer hover:underline">
              How to find FASTag Bank?
            </p>

            <button className="w-full bg-[#00BAF2] hover:bg-[#00a8d8] text-white font-semibold py-3 rounded-lg transition-colors text-[15px]">
              Proceed
            </button>
          </div>
        </div>
      </div>

      {/* Banks Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-[15px] font-semibold text-gray-800 mb-6">
            Bank
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-4 gap-y-6">
            {banks.map((bank) => (
              <button
                key={bank.name}
                onClick={() => {
                  setSelectedBank(bank.name);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex flex-col items-center gap-2 group"
              >
                {/* Circle Avatar */}
                <div
                  className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-[13px] font-bold shadow-sm group-hover:border-blue-300 group-hover:shadow-md transition-all"
                  style={{ background: bank.bg, color: bank.color }}
                >
                  {bank.abbr.length > 4 ? bank.abbr.slice(0, 4) : bank.abbr}
                </div>
                <span className="text-[11px] text-gray-600 text-center leading-tight group-hover:text-blue-600 transition-colors">
                  {bank.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}