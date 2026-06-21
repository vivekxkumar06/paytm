
import Link from "next/link"
import { ChevronDown } from "lucide-react"
function Menusection() {
  return (
    <div>
         {/* Menu */}
        <div className="flex items-center gap-8">
          <Link
            href="/recharge-bills"
            className="flex items-center gap-1 font-sans-serif font-bold text-[15px]"
          >
            Recharge & Bills
            <ChevronDown size={15} />
          </Link>

          <Link
            href="/ticket-booking"
            className="flex items-center gap-1 font-semibold text-[15px]"
          >
            Ticket Booking
            <ChevronDown size={15} />
          </Link>

          <Link
            href="/payments"
            className="flex items-center gap-1 font-semibold text-[15px]"
          >
            Payments & Services
            <ChevronDown size={15} />
          </Link>

          <Link
            href="/business"
            className="flex items-center gap-1 font-semibold text-[15px]"
          >
            Paytm for Business
            <ChevronDown size={15} />
          </Link>

          <Link
            href="/company"
            className="flex items-center gap-1 font-semibold text-[15px]"
          >
            Company
            <ChevronDown size={15} />
          </Link>
        </div>
    </div>
  )
}

export default Menusection