"use client"

import React, { useMemo, useState } from "react";
import {
  Smartphone,
  Car,
  Satellite,
  Zap,
  Landmark,
  Umbrella,
  Flame,
  CircleGauge,
  Droplets,
  Router,
  TrafficCone,
  MoreHorizontal,
  Search,
} from "lucide-react";

/**
 * Paytm-style Broadband / Landline Bill Payment page
 * -----------------------------------------------------------------------
 * Drop-in Next.js usage:
 *   1. Save as app/landline-bill-payment/page.jsx
 *      (or components/BroadbandBillPaymentPage.jsx)
 *   2. Add "use client" at the very top of the file (uses useState)
 *   3. npm i lucide-react
 *   4. The real Paytm page lists 400+ operators A→Z with individual brand
 *      logos. Reproducing every exact logo image isn't practical here,
 *      so each operator renders as a colour-coded initials avatar —
 *      same circular layout/grid as the real page. Swap `avatarUrl` in
 *      OPERATORS for real logo assets when you have them, and extend
 *      the array with the rest of the A–Z list from your data source.
 * -----------------------------------------------------------------------
 */

const CATEGORIES = [
  { label: "Mobile", icon: Smartphone },
  { label: "FASTag Recharge", icon: Car },
  { label: "DTH Recharge", icon: Satellite },
  { label: "Electricity Bill", icon: Zap },
  { label: "Loan EMI", icon: Landmark },
  { label: "Insurance / LIC", icon: Umbrella },
  { label: "Piped Gas Bill", icon: Flame },
  { label: "Book a Cylinder", icon: CircleGauge },
  { label: "Water", icon: Droplets },
  { label: "Broadband/Landline", icon: Router },
  { label: "Challan", icon: TrafficCone },
  { label: "More", icon: MoreHorizontal },
];

const AVATAR_COLORS = [
  "bg-rose-100 text-rose-700",
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
  "bg-cyan-100 text-cyan-700",
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
  "bg-lime-100 text-lime-700",
  "bg-indigo-100 text-indigo-700",
];

function colorFor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function initialsFor(name) {
  const clean = name.replace(/\(.*?\)/g, "").trim();
  const parts = clean.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// Representative slice of the full A–Z operator directory. Extend freely —
// every entry only needs a `name`; avatar colour/initials are derived.
const OPERATORS = [
  "Airtel", "BSNL", "BSNL Landline Corporate", "ACT Fibernet", "Alliance Broadband",
  "Tata Play Fiber", "Microscan Infocommtech Pvt. Ltd.", "Multicraft Broadband",
  "Tikona Infinet Pvt Ltd", "Connect Broadband", "777 Network Broadband",
  "AAA Internet Services Pvt Ltd", "ACNS Pvt Ltd", "Linkio", "ANI Network",
  "ANONET Partner", "ANU Broadband", "APB Broadband", "AT Broadband",
  "Aanirids Technologies", "Adaptive Networks", "Adigital", "AirConnect",
  "AirJaldi - Rural Broadband", "Airgenie Communications", "Airicon Broadband",
  "Airnet Networks", "Alegra Communication", "Amber Online Services",
  "Anonet Communications Private Limited", "Anthariksha Fiber",
  "Aparna Star TV Network", "Apex", "Apple Fibernet", "Apsara Communications",
  "Baroda Broadband", "Benvar", "Bijis Internet Private Limited",
  "Bindas Network", "Broadband 24X7", "Catla Broadband", "Cherrinet",
  "Cityline Networks", "Clicknet Communication", "Cloud ISP",
  "Cloudlasers Broadband", "Cloudsky Superfast Broadband & Services Pvt Ltd",
  "Comway Broadband", "Confiar Broadband", "Correl Internet",
  "Crystal Broadband", "Crystalclear Network", "Cyber Broadband Pvt Ltd",
  "DHL Fibernet", "DJio Net", "DVPL", "DVR Broadband Services",
  "Dainik Savera Net", "Daksh Telecom", "Deco Broadband", "Den Broadband",
  "Diginet Services", "Dreamnet Gigafiber", "ELL Fibernet", "Earthlink Net",
  "Esto Media", "Ethernet Broadband", "Eway FiberNet", "Excell Broadband",
  "Express Wire", "Extreme Broadband", "FABNET", "Feathers",
  "Fibra Netway", "Fusionnet Web Services Private Limited",
  "Future Connect Broadband", "G Link Fibernet", "GBPL",
  "GEFO Fibernet", "GNET", "GRB Infotech", "GSR Broadband",
  "GTPL Broadband", "GTPL KCBPL Broadband Pvt Ltd", "Galactic Internet",
  "Galaxynet", "Garuda Groups", "Gateway Networks", "GenZ Broadband",
  "Globalfibertel", "Globnet Broadband", "Goodwill Broadband",
  "Grey Sky Internet", "Gtech Broadband", "Gtech Partner",
  "Starlings Broadband", "Starnetworks", "Suraj Networks",
  "Syncevo Broadband Scify", "TIC FIBER", "TJ Broadband Network Pvt Ltd",
  "TSK Giga Fibber", "TTN Broadband", "Tachyon Communications",
  "Technosys Teleservices", "Telex Broadband", "Threesa",
  "Timbl Broadband", "Treelink Broadband", "Trisha Enterprises",
  "Trunet Broadband", "UCN Fibernet Pvt Ltd", "UTG One Telecom",
  "Varsha Fibernet", "Velocity Giga Fiber Net", "Vijayalakshmi Net Services Private Limited",
  "Vision Fibernet", "Vision Hi Speed", "Way2Net IT Services Pvt Ltd",
  "Weone Broadband", "Win Communications", "Wish Net", "Worldnet Broadband",
  "Xpress Fiber", "YOU Broadband", "Zapbytes Fibernet", "Zees",
  "Zenith Broadband Services", "Zita Telecom", "Zyetek Stream",
];

export default function BroadbandBillPaymentPage() {
  const [query, setQuery] = useState("");
  const [operatorInput, setOperatorInput] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return OPERATORS;
    return OPERATORS.filter((o) => o.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div className="min-h-screen bg-[#F3F5F7] text-gray-900 mt-20">
      {/* ---------------------------------------------------------- Header */}
      <header className="bg-[#012A72] px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <nav className="flex gap-8 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map(({ label, icon: Icon }) => {
              const isActive = label === "Broadband/Landline";
              return (
                <button
                  key={label}
                  className={`flex shrink-0 flex-col items-center gap-2 text-xs font-medium ${
                    isActive ? "text-white" : "text-white/60 hover:text-white/85"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                  <span className="whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* -------------------------------------------------- Search / Pay card */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto -mt-12 max-w-6xl">
          <div className="max-w-sm rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h1 className="mb-5 text-lg font-bold text-gray-900">
              Pay Wifi, Broadband or Landline Bill
            </h1>
            <input
              value={operatorInput}
              onChange={(e) => setOperatorInput(e.target.value)}
              placeholder="Broadband / Landline Operator"
              className="mb-6 w-full border-b border-gray-200 pb-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#00BAF2] focus:outline-none"
            />
            <button className="w-full rounded-xl bg-[#00BAF2] py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]">
              Proceed
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Operator directory */}
      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-bold text-gray-900">Broadband / Landline Operator</h2>
              <div className="relative w-full sm:w-64">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search operator"
                  className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm focus:border-[#00BAF2] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 lg:grid-cols-6">
              {filtered.map((name) => (
                <button key={name} className="flex flex-col items-center gap-2 text-center">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full text-sm font-bold ${colorFor(
                      name
                    )}`}
                  >
                    {initialsFor(name)}
                  </span>
                  <span className="text-xs leading-snug text-gray-600">{name} Bill Payment</span>
                </button>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-gray-400">
                No operator found for "{query}"
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}