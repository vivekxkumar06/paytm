"use client";
import { X, IndianRupee } from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftRight, ChevronDown } from "lucide-react";

export default function FlightBooking() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="bg-white text-black">

    
      <div className="flex gap-10 px-6 pt-6">
        <label className="flex items-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="trip"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
            className="w-5 h-5 accent-sky-500"
          />
          <span className="text-[18px] font-medium">
            One Way
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="trip"
            checked={tripType === "roundtrip"}
            onChange={() => setTripType("roundtrip")}
            className="w-5 h-5 accent-sky-500"
          />
          <span className="text-[18px] font-medium">
            Round Trip
          </span>
        </label>
      </div>

    
      <div className="grid grid-cols-6 items-center px-6 py-6">

       
        <div>
          <p className="text-gray-500 text-sm mb-2">
            From
          </p>

          <h2 className="text-[22px] font-bold">
            Delhi (DEL)
          </h2>
        </div>

       
        <div className="flex items-center gap-3">
          <ArrowLeftRight
            className="text-sky-500"
            size={28}
          />

          <div>
            <p className="text-gray-500 text-sm mb-2">
              To
            </p>

            <h2 className="text-[22px] font-bold">
              Mumbai (BOM)
            </h2>
          </div>
        </div>

    
        <div className="border-l pl-6">
          <p className="text-gray-500 text-sm mb-2">
            Depart
          </p>

          <h2 className="text-[22px] font-bold">
            Thu, 25 Jun 26
          </h2>
        </div>

        
        <div className="border-l pl-6">
          <p className="text-red-500 text-sm mb-2">
            Return
          </p>

          {tripType === "oneway" ? (
            <h2 className="text-sky-500 text-[20px] font-bold">
              Add Return
            </h2>
          ) : (
           <h2 className="text-sky-500 text-[20px] font-bold flex">
              Chosse Date
              <X size={24} />
            </h2>
          )}
        </div>

        
        <div className="border-l pl-6">
          <p className="text-gray-500 text-sm mb-2">
            Passenger & Class
          </p>
          <Link  className="flex items-center gap-2"
          href= "/Traveller"
          >
               <h2 className="font-bold text-[18px] whitespace-nowrap">
              1 Traveller, Economy
            </h2>

            <ChevronDown size={22} />
          </Link>

        
        </div>

        {/* Button */}
        <div>
          <Link
            href="/flights"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl px-8 py-5 flex items-center justify-center text-xl"
          >
            Search Flights
          </Link>
        </div>
      </div>

      {/* Special Fares */}
      <div className="border-t px-6 py-4 flex space-x-4">
        <h3 className="text-[18px] text-gray-600 mb-3">
          Special Fares (optional)
          <div className="flex">
                <IndianRupee size={24} />

            <p>Extra Savings</p>
          </div>
        </h3>

        <div className="flex gap-4">

          <button className="border rounded-xl px-5 py-3 text-left">
            <h4 className="font-bold">
              Student
            </h4>
            <p className="text-sm text-gray-500">
              Extra Baggage
            </p>
          </button>

          <button className="border rounded-xl px-5 py-3 text-left">
            <h4 className="font-bold">
              Armed Forces
            </h4>
            <p className="text-sm text-gray-500">
              Up to ₹600 off
            </p>
          </button>

          <button className="border rounded-xl px-5 py-3 text-left">
            <h4 className="font-bold">
              Senior Citizen
            </h4>
            <p className="text-sm text-gray-500">
              Up to ₹600 off
            </p>
          </button>

        </div>
      </div>
    </div>
  );
}