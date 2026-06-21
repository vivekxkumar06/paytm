import Link from "next/link";
import { ChevronDown, Download, User } from "lucide-react";
import Menusection from "./Menusection";

export default function Navbar() {
  return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white h-20 border-b text-black">
      <div className="max-w-[1400px] mx-auto h-full px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/images/paytm.png"
            alt="Paytm"
            className="w-[180px] object-contain"
          />
        </div>

      <Menusection/>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          <Link
            href="/download"
            className="flex items-center gap-2 font-semibold text-[15px]"
          >
            <Download size={18} />
            Download App
          </Link>

          <button className="flex items-center bg-[#002970] rounded-full pl-1 pr-5 py-1">
            <div className="w-10 h-10 rounded-full bg-[#00BAF2] flex items-center justify-center">
              <User
                size={20}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>

            <span className="ml-3 text-white font-semibold text-[16px] whitespace-nowrap">
              Sign In
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}