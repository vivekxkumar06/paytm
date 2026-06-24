import { BadgeIndianRupee, Wifi, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RechargeOffers() {
  const offers = [
    {
      icon: <BadgeIndianRupee size={28} className="text-blue-600" />,
      title: "Do Mobile Recharge and Win ₹100",
      subtitle: "cashback. Promo: TAKEITALL",
      button: "Recharge Now",
      href: "/Recharge Now",
    },
    {
      icon: <Wifi size={28} className="text-blue-600" />,
      title: "Broadband Recharge",
      subtitle: "Bill due? Pay now & get rewarded",
      button: "Pay Now",
      href: "/Pay Now",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-2">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-8 grid-cols-1 md:grid-cols-2">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border bg-white px-4 sm:px-6 py-3 shadow-sm transition-all duration-300 hover:shadow-md gap-3"
          >
            <Link className="flex items-center gap-3 sm:gap-4 min-w-0" href={offer.href}>
              <div className="rounded-xl bg-blue-50 p-2 sm:p-3 shrink-0">
                {offer.icon}
              </div>

              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 leading-tight">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{offer.subtitle}</p>
              </div>
            </Link>

            <button className="shrink-0 flex items-center gap-1 sm:gap-2 rounded-full border-2 border-blue-600 px-3 sm:px-6 py-2 sm:py-3 font-bold text-blue-600 text-sm sm:text-base whitespace-nowrap transition-all">
              <span className="hidden sm:inline">{offer.button}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}