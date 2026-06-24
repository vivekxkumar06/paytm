import Link from "next/link";
import { ArrowRight } from "lucide-react";

function CardSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-4">
      <Link
        href="/Card"
        className="block mx-auto max-w-[1500px] px-4"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl sm:rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-5 sm:py-4 gap-4 sm:gap-0">

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full bg-white flex items-center justify-center shrink-0">
              <img
                src="/images/paytm.png"
                alt="Paytm UPI"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </div>

            <h2 className="text-white text-base sm:text-2xl font-bold leading-snug">
              24×7 Trusted customer support to assist and help you in every
              step of your journey
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-xl font-semibold text-white transition hover:bg-white hover:text-blue-600 whitespace-nowrap self-end sm:self-auto">
            Learn More
            <ArrowRight size={20} />
          </div>
        </div>
      </Link>
    </section>
  );
}

export default CardSection;