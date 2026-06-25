"use client";
import Link from "next/link";
import { Download, User, Menu, X } from "lucide-react";
import MenuSection from "./MenuSection";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white h-20 border-b text-black">
      <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href= "/"
        className="shrink-0"
        >
  <img
            src="/images/paytm.png"
            alt="Paytm"
            className="w-[130px] sm:w-[180px] object-contain"
          />
        </Link>
       

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <MenuSection />
        </div>

        {/* Right Side – Desktop */}
        {/* <div className="hidden lg:flex items-center gap-8">
        

          <button className="flex items-center bg-[#002970] rounded-full pl-1 pr-5 py-1">
            <div className="w-10 h-10 rounded-full bg-[#00BAF2] flex items-center justify-center">
              <User size={20} strokeWidth={2.5} className="text-white" />
            </div>
            <span className="ml-3 text-white font-semibold text-[16px] whitespace-nowrap">
              Sign In
            </span>
          </button>
        </div> */}

        {/* Mobile – Sign In + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button className="flex items-center bg-[#002970] rounded-full pl-1 pr-4 py-1">
            <div className="w-8 h-8 rounded-full bg-[#00BAF2] flex items-center justify-center">
              <User size={16} strokeWidth={2.5} className="text-white" />
            </div>
            <span className="ml-2 text-white font-semibold text-[14px] whitespace-nowrap">
              Sign In
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg px-6 py-4 flex flex-col gap-4">
          <Link
            href="/recharge-bills"
            className="font-semibold text-[15px] py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Recharge & Bills
          </Link>
          <Link
            href="/ticket-booking"
            className="font-semibold text-[15px] py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Ticket Booking
          </Link>
          <Link
            href="/payments"
            className="font-semibold text-[15px] py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Payments & Services
          </Link>
          <Link
            href="/business"
            className="font-semibold text-[15px] py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Paytm for Business
          </Link>
          <Link
            href="/company"
            className="font-semibold text-[15px] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Company
          </Link>
          <Link
            href="/download"
            className="flex items-center gap-2 font-semibold text-[15px] text-[#002970]"
            onClick={() => setMenuOpen(false)}
          >
            <Download size={18} />
            Download App
          </Link>
        </div>
      )}
    </nav>
  );
}