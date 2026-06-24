import Link from "next/link";
import { ArrowRight } from "lucide-react";

function CardSection() {

  return (
    <section className="w-full bg-[#f3f3f3] py-4">
        <Link href= "/Card"
        className="mx-auto max-w-[1500px] px-4"
        >
      {/* <div className="mx-auto max-w-[1500px] px-4"> */}
        <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4">
          
          
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 overflow-hidden rounded-full bg-white flex items-center justify-center">
              <img
                src="/images/paytm.png"
                alt="Paytm UPI"
                className="h-20 w-20 object-contain"
              />
            </div>

            <h2 className="text-white text-2xl font-bold">
              24×7 Trusted customer support to assist and help you in every
              step of your journey
            </h2>
          </div>

          
          <div
          
            className="flex items-center gap-2 rounded-full border border-white px-8 py-3 text-xl font-semibold text-white transition hover:bg-white hover:text-blue-600"
          >
            Learn More
            <ArrowRight size={22} />
            </div>
          
        </div>
        </Link>
      {/* </div> */}
    </section>
  );
  
}

export default CardSection