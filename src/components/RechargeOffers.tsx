import { BadgeIndianRupee, Wifi, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RechargeOffers() {
  const offers = [
    {
      icon: <BadgeIndianRupee size={28} className="text-blue-600" />,
      title: "Do Mobile Recharge and Win ₹100",
      subtitle: "cashback. Promo: TAKEITALL",
      button: "Recharge Now",
      href : "/Recharge Now",
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
    <section className="w-full bg-gray-100 py-2 ">
      <div className="mx-auto grid max-w-7xl gap-6 px-8 md:grid-cols-2">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border bg-white px-6 py-1 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <Link className="flex items-center gap-4"
            href= {offer.href}
            >
            <div className="rounded-xl bg-blue-50 p-3">
                {offer.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {offer.title}
                </h3>
                <p className="text-gray-600">{offer.subtitle}</p>
              </div>
            </Link>
            <div >
              
            </div>

            <button className="flex items-center gap-2 rounded-full border-2 border-blue-600 px-6 py-3 font-bold text-blue-600 transition-all   whitespace-nowrap">
              {offer.button}
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}