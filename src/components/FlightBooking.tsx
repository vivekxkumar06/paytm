"use client";
import { X, IndianRupee } from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftRight, ChevronDown } from "lucide-react";

export default function FlightBooking() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="bg-white text-black min-w-[320px]">

      {/* Trip Type */}
      <div className="flex gap-6 sm:gap-10 px-4 sm:px-6 pt-4 sm:pt-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="trip"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
            className="w-4 h-4 sm:w-5 sm:h-5 accent-sky-500"
          />
          <span className="text-[15px] sm:text-[18px] font-medium">One Way</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="trip"
            checked={tripType === "roundtrip"}
            onChange={() => setTripType("roundtrip")}
            className="w-4 h-4 sm:w-5 sm:h-5 accent-sky-500"
          />
          <span className="text-[15px] sm:text-[18px] font-medium">Round Trip</span>
        </label>
      </div>

      {/* Flight Fields – scrollable on small screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-3 px-4 sm:px-6 py-4 sm:py-6">

        {/* From */}
        <div className="border-b sm:border-b-0 pb-3 sm:pb-0">
          <p className="text-gray-500 text-xs sm:text-sm mb-1">From</p>
          <h2 className="text-[16px] sm:text-[22px] font-bold">Delhi (DEL)</h2>
        </div>

        {/* Swap + To */}
        <div className="flex items-center gap-2 border-b sm:border-b-0 pb-3 sm:pb-0">
          <ArrowLeftRight className="text-sky-500 shrink-0" size={22} />
          <div>
            <p className="text-gray-500 text-xs sm:text-sm mb-1">To</p>
            <h2 className="text-[16px] sm:text-[22px] font-bold">Mumbai (BOM)</h2>
          </div>
        </div>

        {/* Depart */}
        <div className="sm:border-l sm:pl-6 border-b sm:border-b-0 pb-3 sm:pb-0">
          <p className="text-gray-500 text-xs sm:text-sm mb-1">Depart</p>
          <h2 className="text-[16px] sm:text-[22px] font-bold">Thu, 25 Jun 26</h2>
        </div>

        {/* Return */}
        <div className="sm:border-l sm:pl-6 border-b sm:border-b-0 pb-3 sm:pb-0">
          <p className="text-red-500 text-xs sm:text-sm mb-1">Return</p>
          {tripType === "oneway" ? (
            <h2 className="text-sky-500 text-[15px] sm:text-[20px] font-bold">Add Return</h2>
          ) : (
            <h2 className="text-sky-500 text-[15px] sm:text-[20px] font-bold flex items-center gap-1">
              Choose Date
              <X size={20} />
            </h2>
          )}
        </div>

        {/* Passenger */}
        <div className="sm:border-l sm:pl-6">
          <p className="text-gray-500 text-xs sm:text-sm mb-1">Passenger & Class</p>
          <Link className="flex items-center gap-1" href="/Traveller">
            <h2 className="font-bold text-[14px] sm:text-[18px] whitespace-nowrap">
              1 Traveller, Economy
            </h2>
            <ChevronDown size={18} />
          </Link>
        </div>

        {/* Search Button */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link
            href="/flights"
            className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl px-5 py-4 text-center text-base sm:text-xl"
          >
            Search Flights
          </Link>
        </div>
      </div>

      {/* Special Fares */}
      <div className="border-t px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
        <h3 className="text-[15px] sm:text-[18px] text-gray-600 shrink-0">
          Special Fares (optional)
          <div className="flex items-center mt-1 gap-1">
            <IndianRupee size={18} />
            <p className="text-sm">Extra Savings</p>
          </div>
        </h3>

        <div className="flex flex-wrap gap-3">
          <button className="border rounded-xl px-4 py-2 sm:px-5 sm:py-3 text-left">
            <h4 className="font-bold text-sm sm:text-base">Student</h4>
            <p className="text-xs sm:text-sm text-gray-500">Extra Baggage</p>
          </button>

          <button className="border rounded-xl px-4 py-2 sm:px-5 sm:py-3 text-left">
            <h4 className="font-bold text-sm sm:text-base">Armed Forces</h4>
            <p className="text-xs sm:text-sm text-gray-500">Up to ₹600 off</p>
          </button>

          <button className="border rounded-xl px-4 py-2 sm:px-5 sm:py-3 text-left">
            <h4 className="font-bold text-sm sm:text-base">Senior Citizen</h4>
            <p className="text-xs sm:text-sm text-gray-500">Up to ₹600 off</p>
          </button>
        </div>
      </div>
    </div>
  );
}