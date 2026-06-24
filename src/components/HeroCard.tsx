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

function HeroCard() {
  return (
    <div className="flex-1 bg-white rounded-3xl p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
        Recharges & Bill Payments
      </h2>

      {/* 3 cols on mobile, 6 on desktop */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex flex-col items-center justify-center text-center rounded-2xl p-3 sm:p-6 min-h-[100px] sm:min-h-[160px] lg:min-h-[180px] transition-all duration-300
                ${
                  item.active
                    ? "bg-[#f7f9fc]"
                    : "hover:bg-[#f7f9fc]"
                }`}
            >
              <Icon
                size={28}
                strokeWidth={1.7}
                className="text-[#0b66c3] mb-3 sm:mb-5 sm:w-10 sm:h-10"
              />

              <span className="text-[13px] sm:text-[16px] lg:text-[18px] font-medium leading-snug">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HeroCard;