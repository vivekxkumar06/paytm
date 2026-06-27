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
  { icon: Tag, label: "FASTag Recharge" },
  { icon: Tv, label: "DTH Recharge" },
  { icon: Zap, label: "Electricity Bill" },
  { icon: CreditCard, label: "Loan EMI" },
  { icon: Shield, label: "Insurance / LIC", active: true },
  { icon: Flame, label: "Piped Gas Bill" },
  { icon: Wind, label: "Book a Cylinder" },
  { icon: Droplets, label: "Water" },
  { icon: Wifi, label: "Broadband/Landline" },
  { icon: FileText, label: "Challan" },
  { icon: MoreHorizontal, label: "More" },
];

const insurers = [
  { name: "LIC of India Bill Payment", abbr: "LIC", bg: "#1A237E", color: "#F9A825" },
  { name: "SBI Life Insurance Company Limited Bill Payment", abbr: "SBI", bg: "#fff", color: "#1A237E" },
  { name: "HDFC Life Insurance Bill Payment", abbr: "HDFC", bg: "#B71C1C", color: "#fff" },
  { name: "TATA AIA Life Insurance Bill Payment", abbr: "TATA", bg: "#fff", color: "#1A237E" },
  { name: "ICICI Prudential Life Insurance Bill Payment", abbr: "ICICI", bg: "#fff", color: "#B71C1C" },
  { name: "United India Insurance Company Limited Bill Payment", abbr: "UII", bg: "#1565C0", color: "#fff" },
  { name: "Axis Max Life Insurance Co Ltd. Bill Payment", abbr: "AXIS", bg: "#fff", color: "#C62828" },
  { name: "Reliance General Insurance Company Limited (Health) Bill Payment", abbr: "RGI", bg: "#FCE4EC", color: "#880E4F" },
  { name: "Bajaj Allianz General Insurance Bill Payment", abbr: "BAJ", bg: "#fff", color: "#1565C0" },
  { name: "Aditya Birla Health Insurance Bill Payment", abbr: "ABHI", bg: "#fff", color: "#B71C1C" },
  { name: "Acko General Insurance Health Bill Payment", abbr: "ACKO", bg: "#fff", color: "#6A1B9A" },
  { name: "Acko General Insurance Motor Bill Payment", abbr: "ACKO", bg: "#fff", color: "#6A1B9A" },
  { name: "Aditya Birla Sun Life Insurance Bill Payment", abbr: "ABSL", bg: "#C62828", color: "#fff" },
  { name: "Ageas Federal Life Insurance Company Limited Bill Payment", abbr: "AGEAS", bg: "#fff", color: "#1565C0" },
  { name: "Agriculture Insurance Company of India Ltd Bill Payment", abbr: "AIC", bg: "#2E7D32", color: "#fff" },
  { name: "Aviva Life Insurance Bill Payment", abbr: "AVIVA", bg: "#fff", color: "#1A237E" },
  { name: "Bajaj Allianz Life Insurance Company Limited Bill Payment", abbr: "BAJ", bg: "#1565C0", color: "#fff" },
  { name: "Bajaj Finance Ltd - Corporate agent Bill Payment", abbr: "BFL", bg: "#fff", color: "#1565C0" },
  { name: "Bandhan Life Insurance Bill Payment", abbr: "BL", bg: "#fff", color: "#C62828" },
  { name: "Bharti AXA Life Insurance Bill Payment", abbr: "BAXA", bg: "#1565C0", color: "#fff" },
  { name: "Canara HSBC Life Insurance Co. Ltd Bill Payment", abbr: "CHLI", bg: "#fff", color: "#C62828" },
  { name: "Care Health Insurance Bill Payment", abbr: "CARE", bg: "#fff", color: "#F9A825" },
  { name: "Cholamandalam MS (PREMIUM COLLECTIONS) General", abbr: "CHOLA", bg: "#fff", color: "#E53935" },
  { name: "Cholamandalam MS General Insurance Co Ltd Bill Payment", abbr: "CHOLA", bg: "#fff", color: "#E53935" },
  { name: "CreditAccess Life Insurance Limited Bill Payment", abbr: "CALI", bg: "#fff", color: "#4A148C" },
  { name: "Edelweiss Tokio Life Insurance Bill Payment", abbr: "ETL", bg: "#1A237E", color: "#fff" },
  { name: "Future Generali India General Insurance Bill Payment", abbr: "FGGI", bg: "#C62828", color: "#fff" },
  { name: "Future Generali India Life Insurance Company Limited Bill Payment", abbr: "FGLI", bg: "#fff", color: "#C62828" },
  { name: "Go Digit General Insurance Bill Payment", abbr: "DIGIT", bg: "#FF6F00", color: "#fff" },
  { name: "HDFC Ergo General Insurance Bill Payment", abbr: "HDFC", bg: "#B71C1C", color: "#fff" },
  { name: "ICICI Lombard General Insurance Bill Payment", abbr: "ICICI", bg: "#B71C1C", color: "#fff" },
  { name: "IndiaFirst Life Insurance Bill Payment", abbr: "IFL", bg: "#1565C0", color: "#fff" },
  { name: "Kotak Life Insurance Bill Payment", abbr: "KOTAK", bg: "#C62828", color: "#fff" },
  { name: "Max Bupa Health Insurance Bill Payment", abbr: "MAX", bg: "#C62828", color: "#fff" },
  { name: "National Insurance Company Bill Payment", abbr: "NIC", bg: "#1A237E", color: "#fff" },
  { name: "New India Assurance Bill Payment", abbr: "NIA", bg: "#1565C0", color: "#fff" },
  { name: "Oriental Insurance Company Bill Payment", abbr: "OIC", bg: "#1A237E", color: "#fff" },
  { name: "PNB MetLife India Insurance Bill Payment", abbr: "PNB", bg: "#F57F17", color: "#fff" },
  { name: "Pramerica Life Insurance Bill Payment", abbr: "PLI", bg: "#1565C0", color: "#fff" },
  { name: "Royal Sundaram General Insurance Bill Payment", abbr: "RSG", bg: "#C62828", color: "#fff" },
  { name: "SBI General Insurance Bill Payment", abbr: "SBIG", bg: "#1A237E", color: "#fff" },
  { name: "Shriram Life Insurance Bill Payment", abbr: "SLI", bg: "#FF6F00", color: "#fff" },
  { name: "Star Health Insurance Bill Payment", abbr: "STAR", bg: "#C62828", color: "#fff" },
  { name: "Tata AIG General Insurance Bill Payment", abbr: "TAIG", bg: "#1A237E", color: "#fff" },
  { name: "United India Insurance Bill Payment", abbr: "UII", bg: "#1565C0", color: "#fff" },
];

export default function InsuranceLICPayment() {
  const [selectedInsurer, setSelectedInsurer] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = insurers.filter((ins) =>
    ins.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans mt-20">
      {/* Top Nav */}
      <div className="bg-[#002970] w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-2 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`flex flex-col items-center gap-1 min-w-[80px] px-2 py-2 rounded transition-colors ${
                    item.active ? "text-white" : "text-blue-200 hover:text-white"
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
        <div className="max-w-7xl mx-auto px-4  ">
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
            <h2 className="text-[17px] font-semibold text-gray-800 mb-5">
              Insurance / LIC
            </h2>

            {/* Insurer Dropdown */}
            <div className="mb-5 relative">
              <label className="block text-[12px] text-gray-400 mb-1">
                Insurer
              </label>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between border-b border-gray-300 pb-2 text-sm focus:outline-none hover:border-blue-500 transition-colors"
              >
                <span className={selectedInsurer ? "text-gray-800" : "text-gray-400"}>
                  {selectedInsurer || "Select Insurer"}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 mt-1 max-h-72 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 sticky top-0 bg-white">
                    <Search size={14} className="text-gray-400" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search insurer..."
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
                      <p className="text-sm text-gray-400 text-center py-4">No insurer found</p>
                    ) : (
                      filtered.map((ins) => (
                        <button
                          key={ins.name}
                          onClick={() => {
                            setSelectedInsurer(ins.name);
                            setDropdownOpen(false);
                            setSearch("");
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 text-left transition-colors"
                        >
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 border border-gray-200"
                            style={{ background: ins.bg, color: ins.color }}
                          >
                            {ins.abbr.slice(0, 4)}
                          </div>
                          <span className="text-sm text-gray-700">{ins.name}</span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <button className="w-full bg-[#00BAF2] hover:bg-[#00a8d8] text-white font-semibold py-3 rounded-lg transition-colors text-[15px]">
              Proceed
            </button>
          </div>
        </div>
      </div>

      {/* Insurers Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-[15px] font-semibold text-gray-800 mb-6">
            Insurer
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-4 gap-y-7">
            {insurers.map((ins) => (
              <button
                key={ins.name}
                onClick={() => {
                  setSelectedInsurer(ins.name);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex flex-col items-center gap-2 group"
              >
                {/* Circle */}
                <div
                  className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-[11px] font-bold shadow-sm group-hover:border-blue-300 group-hover:shadow-md transition-all"
                  style={{ background: ins.bg, color: ins.color }}
                >
                  {ins.abbr.slice(0, 5)}
                </div>
                <span className="text-[11px] text-gray-600 text-center leading-tight group-hover:text-blue-600 transition-colors">
                  {ins.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}