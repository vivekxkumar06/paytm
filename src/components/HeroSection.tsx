import Link from "next/link";
import {
  Smartphone,
  SatelliteDish,
  Car,
  Lightbulb,
  CreditCard,
  Grid2x2,
} from "lucide-react";

const services = [
  {
    
    icon: Smartphone,
    title: "Mobile Recharge",
    href: "/mobile-recharge",
  },
  {
    icon: SatelliteDish,
    title: "DTH Recharge",
    href: "/dth-recharge",
  },
  {
    icon: Car,
    title: "FastTag Recharge",
    href: "/fastag-recharge",
  },
  {
    icon: Lightbulb,
    title: "Electricity Bill",
    href: "/electricity-bill",
    active: true,
  },
  {
    icon: CreditCard,
    title: "Loan EMI Payment",
    href: "/loan-emi",
  },
  {
    icon: Grid2x2,
    title: "View All Products",
    href: "/products",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#f5f7fa] py-8 text-black mt-20">
      <div className="max-w-[1400px] mx-auto flex gap-6">
        
        {/* Left Section */}
        <div className="flex-1 bg-white rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-8">
            Recharges & Bill Payments
          </h2>

          <div className="grid grid-cols-6 gap-4">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex flex-col items-center justify-center text-center rounded-2xl p-6 min-h-[180px] transition-all duration-300
                    ${
                      item.active
                        ? "bg-[#f7f9fc]"
                        : "hover:bg-[#f7f9fc]"
                    }`}
                >
                  <Icon
                    size={42}
                    strokeWidth={1.7}
                    className="text-[#0b66c3] mb-5"
                  />
                  

                  <span className="text-[18px] font-medium leading-7">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Ad Banner */}
        <div className="w-[380px] shrink-0">
          <img
            src="/images/hero.png"
            alt="Advertisement"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}