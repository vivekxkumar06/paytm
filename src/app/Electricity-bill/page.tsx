"use client";

import { useState } from "react";
import {
  Smartphone,
  Car,
  Tv,
  Zap,
  HandCoins,
  Umbrella,
  Flame,
  Cylinder,
  Droplets,
  Wifi,
  Receipt,
  MoreHorizontal,
} from "lucide-react";

const categories = [
  { title: "Mobile", icon: Smartphone },
  { title: "FASTag Recharge", icon: Car },
  { title: "DTH Recharge", icon: Tv },
  { title: "Electricity Bill", icon: Zap },
  { title: "Loan EMI", icon: HandCoins },
  { title: "Insurance / LIC", icon: Umbrella },
  { title: "Piped Gas Bill", icon: Flame },
  { title: "Book a Cylinder", icon: Cylinder },
  { title: "Water", icon: Droplets },
  { title: "Broadband/Landline", icon: Wifi },
  { title: "Challan", icon: Receipt },
  { title: "More", icon: MoreHorizontal },
];

const states = [
  "Andhra Pradesh Bill Payment",
  "Arunachal Pradesh Bill Payment",
  "Assam Bill Payment",
  "Bihar Bill Payment",
  "Chandigarh Bill Payment",
  "Chhattisgarh Bill Payment",
  "Dadra and Nagar Haveli and Daman and Diu Bill Payment",
  "Goa Bill Payment",
  "Gujarat Bill Payment",
  "Haryana Bill Payment",
  "Himachal Pradesh Bill Payment",
  "Jammu & Kashmir Bill Payment",
  "Jharkhand Bill Payment",
  "Karnataka Bill Payment",
  "Kerala Bill Payment",
  "Lakshadweep Bill Payment",
  "Madhya Pradesh Bill Payment",
  "Maharashtra Bill Payment",
  "Manipur Bill Payment",
  "Meghalaya Bill Payment",
  "Mizoram Bill Payment",
  "Nagaland Bill Payment",
  "New Delhi Bill Payment",
  "Odisha Bill Payment",
  "Pondicherry Bill Payment",
  "Punjab Bill Payment",
  "Rajasthan Bill Payment",
  "Sikkim Bill Payment",
  "Tamil Nadu Bill Payment",
  "Telangana Bill Payment",
  "Tripura Bill Payment",
  "Uttar Pradesh Bill Payment",
  "Uttarakhand Bill Payment",
  "West Bengal Bill Payment",
];

const cities = [
  "Mumbai Apartment Payment",
  "Delhi Apartment Payment",
  "Bangalore Apartment Payment",
  "Hyderabad Apartment Payment",
  "Chennai Apartment Payment",
  "Pune Apartment Payment",
  "Kolkata Apartment Payment",
  "Ahmedabad Apartment Payment",
  "Jaipur Apartment Payment",
  "Lucknow Apartment Payment",
  "Noida Apartment Payment",
  "Gurugram Apartment Payment",
];

export default function ElectricityBillPage() {
  const [type, setType] = useState("boards");

  return (
    <main className="min-h-screen bg-[#f5f7fa] mt-20">
      {/* TOP NAVBAR */}

      <div className="bg-[#002970] text-white">
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-center gap-10 px-8 py-7">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Icon size={22} strokeWidth={1.8} />

                  <span className="mt-3 text-sm whitespace-nowrap">
                    {item.title}
                  </span>

                  {item.title === "Electricity Bill" && (
                    <div className="w-full h-[2px] bg-white mt-2 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* HERO */}

      <section className="relative">
        <div className="h-[220px] bg-[#002970]" />

        {/* CARD */}

        <div className="absolute top-10 left-1/2 lg:left-14 -translate-x-1/2 lg:translate-x-0">
          <div className="bg-white w-[95vw] max-w-[500px] rounded-3xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
              Pay Electricity Bill
            </h2>

            {/* RADIO */}

            <div className="flex items-center gap-8 mb-10">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="billType"
                  checked={type === "boards"}
                  onChange={() => setType("boards")}
                  className="accent-sky-500"
                />

                <span className="text-black text-base md:text-lg">
                  Electricity Boards
                </span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="billType"
                  checked={type === "apartments"}
                  onChange={() => setType("apartments")}
                  className="accent-sky-500"
                />

                <span className="text-gray-500 text-base md:text-lg">
                  Apartments
                </span>
              </label>
            </div>

            {/* INPUT */}

            <input
              type="text"
              placeholder={type === "boards" ? "State" : "City"}
              className="w-full border-b border-gray-200 pb-4 outline-none text-black placeholder:text-gray-400"
            />

            {/* BUTTON */}

            <button className="w-full mt-8 bg-[#00BAF2] hover:bg-[#00a8db] transition text-white font-bold py-4 rounded-xl text-lg">
              Proceed
            </button>
          </div>
        </div>

        <div className="h-[180px]" />
      </section>

      {/* LIST SECTION */}

      <section className="max-w-[1700px] mx-auto px-4 pb-10">
        <div className="bg-white rounded-3xl p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">
            {type === "boards" ? "State" : "City"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-4">
            {(type === "boards" ? states : cities).map(
              (item, index) => (
                <button
                  key={index}
                  className="text-left text-gray-600 hover:text-[#00BAF2] transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}