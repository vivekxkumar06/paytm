"use client";

import Link from "next/link";
import {
  ChevronDown,
  Plane,
  Train,
  Bus,
  Film,
  Hotel,
  Car,
} from "lucide-react";

const ticketItems = [
  { label: "Flight Tickets", icon: Plane },
  { label: "Train Tickets", icon: Train },
  { label: "Bus Tickets", icon: Bus },
  { label: "Movie Tickets", icon: Film },
  { label: "Hotel Booking", icon: Hotel },
  { label: "Cab Booking", icon: Car },
];

export default function TicketDropdown() {
  return (
    <div className="group relative">
      {/* Trigger */}
      <div
      
        className="flex items-center gap-1 py-8 font-semibold text-[15px]"
      >
        Ticket Booking

        <ChevronDown
          size={15}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </div>

      {/* Dropdown */}
      <div className="invisible absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        
        {/* Arrow */}
        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white" />

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          {ticketItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href="/"
                className="flex items-center gap-2 px-6 py-2 hover:bg-[#f5f9ff] transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f8ff]">
                  <Icon
                    size={18}
                    className="text-[#00BAF2]"
                  />
                </div>

                <span className="text-[15px] font-semibold text-black">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}