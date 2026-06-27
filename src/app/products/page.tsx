// "use client";

// import { X } from "lucide-react";
// import { useRouter } from "next/navigation";

// // ── SVG icon components (inline, no external deps) ──────────────────────────

// const icons: Record<string, JSX.Element> = {
//   MobileRecharge: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="12" y="4" width="24" height="40" rx="3" />
//       <path d="M20 8h8M24 38v2" strokeLinecap="round" />
//       <path d="M24 14v8l4-4" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M20 18h8" strokeLinecap="round" />
//     </svg>
//   ),
//   Broadband: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="8" y="28" width="32" height="14" rx="2" />
//       <path d="M14 35h2M18 35h2" strokeLinecap="round" />
//       <path d="M16 28c0-6 5-11 8-14M32 28c0-6-5-11-8-14" strokeLinecap="round" />
//       <path d="M20 28c0-3 2-6 4-8M28 28c0-3-2-6-4-8" strokeLinecap="round" />
//     </svg>
//   ),
//   FASTag: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="4" y="16" width="40" height="20" rx="3" />
//       <circle cx="14" cy="26" r="4" />
//       <path d="M22 22h14M22 30h10" strokeLinecap="round" />
//       <path d="M4 20l8-8h24l8 8" strokeLinejoin="round" />
//     </svg>
//   ),
//   DTH: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M10 34 Q24 10 38 34" strokeLinecap="round" />
//       <path d="M15 34 Q24 18 33 34" strokeLinecap="round" />
//       <path d="M20 34 Q24 24 28 34" strokeLinecap="round" />
//       <circle cx="24" cy="34" r="2" fill="#1565C0" />
//       <line x1="24" y1="36" x2="24" y2="44" strokeLinecap="round" />
//       <line x1="18" y1="44" x2="30" y2="44" strokeLinecap="round" />
//     </svg>
//   ),
//   Metro: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="8" y="10" width="32" height="28" rx="4" />
//       <path d="M8 20h32M16 10v10M32 10v10" />
//       <circle cx="16" cy="32" r="3" />
//       <circle cx="32" cy="32" r="3" />
//       <path d="M4 38h8M36 38h8" strokeLinecap="round" />
//     </svg>
//   ),
//   TollTag: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M4 32h40M20 32V16M20 16h12v16" />
//       <path d="M28 24h4" strokeLinecap="round" />
//       <path d="M4 32v6M44 32v6" strokeLinecap="round" />
//       <rect x="12" y="20" width="6" height="12" />
//     </svg>
//   ),
//   DataCard: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="14" y="4" width="20" height="40" rx="3" />
//       <path d="M20 8h8M24 38v2" strokeLinecap="round" />
//       <circle cx="32" cy="10" r="6" fill="#E3F2FD" stroke="#1565C0" />
//       <path d="M32 8v4M30 10h4" strokeLinecap="round" />
//     </svg>
//   ),
//   Electricity: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <circle cx="24" cy="24" r="18" />
//       <path d="M28 10l-8 14h8l-8 14" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   ),
//   LoanEMI: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="6" y="8" width="36" height="32" rx="3" />
//       <path d="M6 16h36M14 8v8M34 8v8" />
//       <path d="M14 24h8M14 30h14M14 36h6" strokeLinecap="round" />
//     </svg>
//   ),
//   CableTV: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="4" y="12" width="40" height="28" rx="3" />
//       <path d="M14 8l-6 4M34 8l6 4" strokeLinecap="round" />
//       <path d="M16 26l8-5v10l-8-5z" fill="#1565C0" />
//     </svg>
//   ),
//   LIC: (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <circle cx="24" cy="24" r="22" fill="#1A237E" />
//       <circle cx="24" cy="24" r="22" fill="url(#licGrad)" />
//       <defs>
//         <linearGradient id="licGrad" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="50%" stopColor="#1A237E" />
//           <stop offset="50%" stopColor="#F9A825" />
//         </linearGradient>
//       </defs>
//       <text x="24" y="29" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">LIC</text>
//     </svg>
//   ),
//   MunicipalTax: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M24 6L6 18v24h36V18L24 6z" />
//       <rect x="18" y="28" width="12" height="16" />
//       <path d="M18 28v-6a6 6 0 0 1 12 0v6" />
//       <path d="M6 18h36" strokeLinecap="round" />
//     </svg>
//   ),
//   WaterBill: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M24 6C24 6 8 22 8 32a16 16 0 0 0 32 0C40 22 24 6 24 6z" />
//       <path d="M16 36a8 8 0 0 0 12 0" strokeLinecap="round" />
//     </svg>
//   ),
//   GasCylinder: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="14" y="12" width="20" height="30" rx="8" />
//       <path d="M18 12V8h12v4" />
//       <path d="M22 6h4" strokeLinecap="round" />
//       <path d="M14 38a10 10 0 0 0 20 0" />
//     </svg>
//   ),
//   MovieTickets: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="4" y="14" width="40" height="26" rx="3" />
//       <path d="M4 22h6M38 22h6M4 30h6M38 30h6" strokeLinecap="round" />
//       <path d="M18 20l10 7-10 7V20z" fill="#1565C0" />
//     </svg>
//   ),
//   IMAX: (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <text x="4" y="30" fill="#1565C0" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">IMAX</text>
//     </svg>
//   ),
//   Gold: (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <circle cx="24" cy="24" r="20" fill="#F9A825" />
//       <circle cx="24" cy="24" r="14" fill="#FFD600" />
//       <text x="24" y="29" textAnchor="middle" fill="#5D4037" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Paytm</text>
//     </svg>
//   ),
//   MutualFunds: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M8 36l10-14 8 8 8-12 8 6" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M8 40h32" strokeLinecap="round" />
//     </svg>
//   ),
//   Stocks: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M6 36l10-12 8 6 10-14 8 8" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="38" cy="24" r="3" fill="#1565C0" />
//       <path d="M6 40h36" strokeLinecap="round" />
//     </svg>
//   ),
//   TrafficChallan: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="18" y="4" width="12" height="40" rx="2" />
//       <circle cx="24" cy="14" r="4" fill="#E53935" stroke="none" />
//       <circle cx="24" cy="24" r="4" fill="#F9A825" stroke="none" />
//       <circle cx="24" cy="34" r="4" fill="#43A047" stroke="none" />
//     </svg>
//   ),
//   Apartments: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <rect x="6" y="14" width="36" height="30" rx="2" />
//       <path d="M6 20h36M6 28h36M18 14v30M30 14v30" />
//       <path d="M12 34h4M22 34h4M32 34h4" strokeLinecap="round" />
//     </svg>
//   ),
//   Education: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M24 8L4 18l20 10 20-10L24 8z" strokeLinejoin="round" />
//       <path d="M8 22v10c0 4 7 8 16 8s16-4 16-8V22" strokeLinecap="round" />
//       <path d="M40 18v10" strokeLinecap="round" />
//     </svg>
//   ),
//   GooglePlay: (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <path d="M8 6l32 18L8 42V6z" fill="#4CAF50" />
//       <path d="M8 6l18 18L8 42V6z" fill="#2196F3" />
//       <path d="M8 6l32 18H8V6z" fill="#F44336" />
//       <path d="M8 42l32-18H8v18z" fill="#FFC107" />
//       <path d="M8 6l18 18-18 18V6z" fill="white" opacity="0.15" />
//     </svg>
//   ),
//   Devotion: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M8 20C8 12 14 6 22 8c4 1 6 4 6 4s2-3 6-4c8-2 14 4 14 12 0 10-20 22-20 22S8 30 8 20z" />
//     </svg>
//   ),
//   Donation: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <path d="M8 20a16 16 0 0 1 32 0c0 12-16 24-16 24S8 32 8 20z" />
//       <circle cx="24" cy="20" r="6" />
//       <path d="M24 14v12M18 20h12" strokeLinecap="round" />
//     </svg>
//   ),
//   CreditScore: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <circle cx="24" cy="24" r="18" />
//       <path d="M24 24l-12-6" strokeLinecap="round" />
//       <circle cx="24" cy="24" r="3" fill="#1565C0" />
//       <path d="M10 36a16 16 0 0 1 28 0" strokeLinecap="round" />
//     </svg>
//   ),
//   PNRStatus: (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <rect x="4" y="10" width="40" height="28" rx="3" fill="#E3F2FD" />
//       <text x="24" y="28" textAnchor="middle" fill="#1565C0" fontSize="10" fontWeight="900" fontFamily="sans-serif">PNR</text>
//       <text x="24" y="38" textAnchor="middle" fill="#1565C0" fontSize="7" fontFamily="sans-serif">STATUS</text>
//     </svg>
//   ),
//   LiveTrain: (
//     <svg viewBox="0 0 48 48" fill="none" stroke="#1565C0" strokeWidth="2" className="w-10 h-10">
//       <circle cx="16" cy="16" r="6" />
//       <path d="M16 22v10" strokeLinecap="round" />
//       <path d="M10 32l6-4 6 4" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M28 10h12M28 18h8M28 26h10" strokeLinecap="round" />
//     </svg>
//   ),
// };

// const sections = [
//   {
//     title: "Recharges",
//     items: [
//       { label: "Mobile\nRecharge", icon: "MobileRecharge" },
//       { label: "Broadband\nRecharge", icon: "Broadband" },
//       { label: "FASTag\nRecharge", icon: "FASTag" },
//       { label: "DTH\nRecharge", icon: "DTH" },
//       { label: "Metro\nRecharge", icon: "Metro" },
//       { label: "Toll Tag\nRecharge", icon: "TollTag" },
//       { label: "Data Card\nRecharge", icon: "DataCard" },
//     ],
//   },
//   {
//     title: "Bill Payments",
//     items: [
//       { label: "Electricity\nBill", icon: "Electricity" },
//       { label: "Loan EMI\nPayment", icon: "LoanEMI" },
//       { label: "Cable TV", icon: "CableTV" },
//       { label: "LIC /\nInsurance", icon: "LIC" },
//       { label: "Municipal\nTax", icon: "MunicipalTax" },
//       { label: "Water Bill", icon: "WaterBill" },
//     ],
//   },
//   {
//     title: "Book & Buy",
//     items: [
//       { label: "Book Gas\nCylinder", icon: "GasCylinder" },
//       { label: "Movie\nTickets", icon: "MovieTickets" },
//       { label: "IMAX\nTickets", icon: "IMAX" },
//       { label: "Gold", icon: "Gold" },
//       { label: "Invest in\nMutual\nFunds", icon: "MutualFunds" },
//       { label: "Invest in\nStocks", icon: "Stocks" },
//     ],
//   },
//   {
//     title: "Other Services",
//     items: [
//       { label: "Traffic\nChallan", icon: "TrafficChallan" },
//       { label: "Apartments", icon: "Apartments" },
//       { label: "Education\nFees", icon: "Education" },
//       { label: "Google\nPlay", icon: "GooglePlay" },
//       { label: "Devotion", icon: "Devotion" },
//       { label: "Donation", icon: "Donation" },
//       { label: "Check\nCredit\nScore", icon: "CreditScore" },
//       { label: "PNR\nStatus", icon: "PNRStatus" },
//       { label: "Tracking\n(Live Train)", icon: "LiveTrain" },
//     ],
//   },
// ];

// export default function ViewAllProducts() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-white relative mt-20">
//       {/* Close Button */}
//       <button
//         onClick={() => router.back()}
//         className="absolute top-4 right-4 w-9 h-9 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors z-10 shadow-lg"
//         aria-label="Close"
//       >
//         <X size={18} />
//       </button>

//       {/* Content */}
//       <div className="max-w-5xl mx-auto px-8 py-10">
//         {sections.map((section) => (
//           <div key={section.title} className="mb-10">
//             <h2 className="text-[19px] font-bold text-gray-900 mb-6">
//               {section.title}
//             </h2>
//             <div className="grid grid-cols-7 gap-y-8 gap-x-2">
//               {section.items.map((item) => (
//                 <button
//                   key={item.label}
//                   className="flex flex-col items-center gap-3 group"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-[#EBF3FF] flex items-center justify-center group-hover:bg-[#D0E6FF] transition-colors">
//                     {icons[item.icon]}
//                   </div>
//                   <span className="text-[12px] text-gray-700 text-center leading-tight whitespace-pre-line group-hover:text-blue-600 transition-colors">
//                     {item.label}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import {
  X,
  Smartphone,
  Wifi,
  Tag,
  Tv,
  TrainFront,
  TicketCheck,
  CreditCard,
  Zap,
  Landmark,
  ShieldCheck,
  Home,
  Droplets,
  Flame,
  Clapperboard,
  Coins,
  TrendingUp,
  BarChart2,
  AlertTriangle,
  Building2,
  GraduationCap,
  Play,
  Heart,
  HandHeart,
  Gauge,
  BookOpen,
  MapPin,
} from "lucide-react";

const sections = [
  {
    title: "Recharges",
    items: [
      { label: "Mobile\nRecharge", icon: Smartphone },
      { label: "Broadband\nRecharge", icon: Wifi },
      { label: "FASTag\nRecharge", icon: Tag },
      { label: "DTH\nRecharge", icon: Tv },
      { label: "Metro\nRecharge", icon: TrainFront },
      { label: "Toll Tag\nRecharge", icon: TicketCheck },
      { label: "Data Card\nRecharge", icon: CreditCard },
    ],
  },
  {
    title: "Bill Payments",
    items: [
      { label: "Electricity\nBill", icon: Zap },
      { label: "Loan EMI\nPayment", icon: Landmark },
      { label: "Cable TV", icon: Tv },
      { label: "LIC /\nInsurance", icon: ShieldCheck },
      { label: "Municipal\nTax", icon: Home },
      { label: "Water Bill", icon: Droplets },
    ],
  },
  {
    title: "Book & Buy",
    items: [
      { label: "Book Gas\nCylinder", icon: Flame },
      { label: "Movie\nTickets", icon: Clapperboard },
      { label: "IMAX\nTickets", icon: Clapperboard },
      { label: "Gold", icon: Coins },
      { label: "Invest in\nMutual\nFunds", icon: TrendingUp },
      { label: "Invest in\nStocks", icon: BarChart2 },
    ],
  },
  {
    title: "Other Services",
    items: [
      { label: "Traffic\nChallan", icon: AlertTriangle },
      { label: "Apartments", icon: Building2 },
      { label: "Education\nFees", icon: GraduationCap },
      { label: "Google\nPlay", icon: Play },
      { label: "Devotion", icon: Heart },
      { label: "Donation", icon: HandHeart },
      { label: "Check\nCredit\nScore", icon: Gauge },
      { label: "PNR\nStatus", icon: BookOpen },
      { label: "Tracking\n(Live Train)", icon: MapPin },
    ],
  },
];

export default function ViewAllProducts() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white relative mt-20">
      {/* Close Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 right-4 w-9 h-9 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors z-10 shadow-lg"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-10">
        {sections.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="text-[19px] font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            <div className="grid grid-cols-7 gap-y-8 gap-x-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#EBF3FF] flex items-center justify-center group-hover:bg-[#D0E6FF] transition-colors">
                      <Icon size={28} className="text-[#1565C0]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[12px] text-gray-700 text-center leading-tight whitespace-pre-line group-hover:text-blue-600 transition-colors">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}