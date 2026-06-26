"use client";

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

const operators = [
  {
    name: "Airtel",
    image: "/images/airtel.png",
  },
  {
    name: "BSNL",
    image: "/images/BSNL.png",
  },
  {
    name: "Jio",
    image: "/images/jio.png",
  },
  {
    name: "MTNL",
    image: "/images/MTNL.png",
  },
  {
    name: "VI",
    image: "/images/vi.png",
  },
];

export default function Page() {
    
  return (
    <main className="bg-[#f5f7fa] min-h-screen mt-20">
      {/* TOP NAVBAR */}

      <div className="bg-[#002970] text-white">
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-center gap-10 px-6 py-6">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Icon size={22} strokeWidth={1.8} />

                  <span className="text-sm mt-3 whitespace-nowrap">
                    {item.title}
                  </span>

                  {index === 0 && (
                    <div className="h-[2px] w-full bg-white mt-2 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* HERO */}

      <section className="relative">
        <div className="bg-[#002970] h-[180px] md:h-[220px]" />

        {/* RECHARGE CARD */}

        <div className="absolute left-1/2 lg:left-8 top-8 -translate-x-1/2 lg:translate-x-0">
          <div className="bg-white w-[95vw] max-w-[500px] rounded-3xl shadow-xl p-6 md:p-8">
            <h2 className="text-black text-2xl md:text-4xl font-bold mb-8">
              Recharge or Pay Mobile Bill
            </h2>

            {/* RADIO */}

            <div className="flex items-center gap-8 mb-8">
              <label className="flex items-center gap-2 text-black">
                <input
                  type="radio"
                  name="bill"
                  defaultChecked
                  className="accent-sky-500"
                />
                Prepaid
              </label>

              <label className="flex items-center gap-2 text-gray-500">
                <input
                  type="radio"
                  name="bill"
                  className="accent-sky-500"
                />
                Postpaid
              </label>
            </div>

            {/* INPUTS */}

            <div className="space-y-8">
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full border-b border-gray-200 pb-3 outline-none text-black placeholder:text-gray-400"
              />

              <input
                type="text"
                placeholder="Operator"
                className="w-full border-b border-gray-200 pb-3 outline-none text-black placeholder:text-gray-400"
              />

              <div className="relative">
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full border-b border-gray-200 pb-3 outline-none text-black placeholder:text-gray-400"
                />

                <div className="absolute right-0 top-0 text-right">
                  <p className="text-sky-500 font-semibold text-sm">
                    Browse Plans
                  </p>

                  <p className="text-xs text-gray-500">
                    of all operators
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}

            <button className="mt-10 w-full bg-[#00BAF2] hover:bg-[#00a5d8] transition text-white font-bold py-4 rounded-xl">
              Proceed to Recharge
            </button>
          </div>
        </div>

        {/* SPACING */}

        <div className="h-[520px] md:h-[450px]" />
      </section>

      {/* OPERATORS */}

      <section className="max-w-[1700px] mx-auto px-4 pb-10">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <h2 className="text-black text-2xl font-bold mb-10">
            Select an Operator
          </h2>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
  {operators.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      
      {/* Circle */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center bg-white">
        <img
          src={item.image}
          alt={item.name}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>

      <p className="mt-3 text-black font-medium">
        {item.name}
      </p>

    </div>
  ))}
</div>
        </div>
      </section>
    </main>
  );
}