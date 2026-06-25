
// import Link from "next/link"
// import { ChevronDown } from "lucide-react"
// function MenuSection() {
//   return (
//     <div>
//          {/* Menu */}
//         <div className="flex items-center gap-8">
//           <Link
//             href="/Recharge-bills"
//             className="flex items-center gap-1 font-sans-serif font-bold text-[15px]"
//           >
//             Recharge & Bills
//             <ChevronDown size={15} />
//           </Link>

//           <Link
//             href="/ticket-booking"
//             className="flex items-center gap-1 font-semibold text-[15px]"
//           >
//             Ticket Booking
//             <ChevronDown size={15} />
//           </Link>

//           <Link
//             href="/payments"
//             className="flex items-center gap-1 font-semibold text-[15px]"
//           >
//             Payments & Services
//             <ChevronDown size={15} />
//           </Link>

//           <Link
//             href="/business"
//             className="flex items-center gap-1 font-semibold text-[15px]"
//           >
//             Paytm for Business
//             <ChevronDown size={15} />
//           </Link>

//           <Link
//             href="/company"
//             className="flex items-center gap-1 font-semibold text-[15px]"
//           >
//             Company
//             <ChevronDown size={15} />
//           </Link>
//         </div>
//     </div>
//   )
// }

// export default MenuSection

// import Link from "next/link";
// import { ChevronDown } from "lucide-react";

// const menuItems = [
//   {
//     title: "Recharge & Bills",
//     href: "/recharge-bills",
//     items: ["Mobile Recharge", "Electricity Bill", "DTH Recharge"],
//   },
//   {
//     title: "Ticket Booking",
//     href: "/ticket-booking",
//     items: ["Flights", "Bus Tickets", "Train Tickets"],
//   },
//   {
//     title: "Payments & Services",
//     href: "/payments",
//     items: ["Send Money", "Pay Bills", "UPI Payments"],
//   },
//   {
//     title: "Paytm for Business",
//     href: "/business",
//     items: ["POS Machine", "Soundbox", "Payment Gateway"],
//   },
//   {
//     title: "Company",
//     href: "/company",
//     items: ["About Us", "Careers", "Blog"],
//   },
// ];

// export default function MenuSection() {
//   return (
//     <div className="flex items-center gap-8">
//       {menuItems.map((menu) => (
//         <div key={menu.title} className="group relative">
//           <Link
//             href={menu.href}
//             className="flex items-center gap-1 font-semibold text-[15px]"
//           >
//             {menu.title}
//             <ChevronDown
//               size={15}
//               className="transition-transform duration-200 group-hover:rotate-180"
//             />
//           </Link>

//           {/* Dropdown */}
//           <div className="absolute top-full left-1/2 z-50 hidden min-w-[240px] -translate-x-1/2 pt-3 group-hover:block">
//             <div className="rounded-2xl bg-white shadow-2xl border py-2">
//               {menu.items.map((item) => (
//                 <Link
//                   key={item}
//                   href="/"
//                   className="block px-5 py-3 text-sm hover:bg-blue-50 hover:text-[#002970]"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";

// import Link from "next/link";
// import {
//   ChevronDown,
//   Smartphone,
//   Zap,
//   Tv,
//   Building2,
//   Droplets,
//   Flame,
//   CreditCard,
//   ShieldCheck,
//   Receipt,
// } from "lucide-react";

// const rechargeItems = [
//   { label: "Mobile Recharge", icon: Smartphone },
//   { label: "Electricity bill", icon: Zap },
//   { label: "DTH recharge", icon: Tv },
//   { label: "Municipal bill", icon: Building2 },
//   { label: "Water bill", icon: Droplets },
//   { label: "Gas & Cylinder", icon: Flame },
//   { label: "Loan EMI", icon: CreditCard },
//   { label: "Insurance Premium", icon: ShieldCheck },
//   { label: "Challan", icon: Receipt },
// ];

// function MenuSection() {
//   return (
//     <div className="flex items-center gap-8">
//       {/* Recharge & Bills */}
//       <div className="group relative py-5">
//         <Link
//           href="/recharge-bills"
//           className="flex items-center gap-1 font-semibold text-[15px]"
//         >
//           Recharge & Bills
//           <ChevronDown
//             size={15}
//             className="transition-transform duration-200 group-hover:rotate-180"
//           />
//         </Link>

//         {/* Dropdown */}
//         <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-2 group-hover:block">
//           {/* Arrow */}
//           <div className="absolute -top-1 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white" />

//           <div className="w-[320px] rounded-2xl border border-gray-100 bg-white py-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
//             {rechargeItems.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div key={item.label}>
//                   <Link
//                     href="/"
//                     className="flex items-center gap-4 px-6 py-4 text-[15px] font-semibold text-black transition hover:bg-[#f5f9ff]"
//                   >
//                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f8ff]">
//                       <Icon size={18} className="text-[#00BAF2]" />
//                     </div>

//                     <span>{item.label}</span>
//                   </Link>

//                   {/* Divider after Gas & Cylinder */}
//                   {index === 5 && (
//                     <div className="mx-5 border-t border-gray-100" />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Ticket Booking */}
//       <Link
//         href="/ticket-booking"
//         className="flex items-center gap-1 font-semibold text-[15px]"
//       >
//         Ticket Booking
//         <ChevronDown size={15} />
//       </Link>

//       {/* Payments & Services */}
//       <Link
//         href="/payments"
//         className="flex items-center gap-1 font-semibold text-[15px]"
//       >
//         Payments & Services
//         <ChevronDown size={15} />
//       </Link>

//       {/* Business */}
//       <Link
//         href="/business"
//         className="flex items-center gap-1 font-semibold text-[15px]"
//       >
//         Paytm for Business
//         <ChevronDown size={15} />
//       </Link>

//       {/* Company */}
//       <Link
//         href="/company"
//         className="flex items-center gap-1 font-semibold text-[15px]"
//       >
//         Company
//         <ChevronDown size={15} />
//       </Link>
//     </div>
//   );
// }

// export default MenuSection;
import RechargeDropdown from "./RechargeDropdown";
import TicketDropdown from "./TicketDropdown";
import PaymentDropdown from "./PaymentDropdown";
import BusinessDropdown from "./BusinessDropdown";
import CompanyDropdown from "./CompanyDropdown";
import DownloadQR from "./DownloadQR";
import SignInModal from "./SignInModal";

export default function MenuSection() {
  return (
    <div className="flex items-center gap-8">
      <RechargeDropdown />

      <TicketDropdown />

      <PaymentDropdown />

      <BusinessDropdown />

      <CompanyDropdown />
      <DownloadQR />
      <SignInModal />
    </div>
  );
}