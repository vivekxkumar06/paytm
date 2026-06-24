import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BoxSection2() {
  return (
    <section className="bg-[#f5f7fa] p-4">
      <div className="relative overflow-hidden rounded-[40px] bg-[#f7fafc]">

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d8e7f7_1px,transparent_1px),linear-gradient(to_bottom,#d8e7f7_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Glow */}
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-100 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">

          <div className="grid min-h-[850px] items-center gap-4 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT CONTENT */}
            <div className="max-w-[580px] py-16">

              <Image
                src="/images/hero4.png"
                alt="Paytm Money"
                width={170}
                height={50}
                className="mb-8"
              />

              <h2 className="text-[30px] md:text-[44px] lg:text-[56px] font-bold leading-[1.05] tracking-[-2px] text-black">
                Switch to Paytm Money.
                <br />
                Pay Less, Trade More.
              </h2>

              <h1 className="mt-5 text-[40px] md:text-[56px] lg:text-[68px] font-bold leading-[0.95] tracking-[-3px] text-[#00BAF2]">
                Margin Trading
                <br />
                Facility (MTF) at
                <br />
                7.99%* p.a.
              </h1>

              <p className="mt-8 max-w-[560px] text-[18px] leading-[1.5] text-[#101010]">
                Get up to 4X Buying Power on 1200+ Stocks at Low
                Interest Rates with Margin Trading Facility by
                Paytm Money.
              </p>

              <Link
                href="/"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#002970] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Invest With MTF

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <p className="mt-10 max-w-[700px] text-[11px] leading-4 text-gray-500">
                Investment in securities market are subject to market risks,
                read all the related documents carefully before investing.
                The securities are quoted as an example and not as a
                recommendation. Margin Funding as subject to the provisions
                of SEBI Circular CIR/MRD/DP/54/2017 dated June 13, 2017,
                and the terms and conditions mentioned in rights and
                obligations statement issued by the Paytm Money Limited.
                For detailed disclaimer please visit:
                <span className="ml-1 text-blue-600">
                  https://www.paytmmoney.com
                </span>
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative min-h-[800px] flex items-center justify-end">

              {/* Phone Image */}
              <Image
                src="/images/hero5.png"
                alt="Phone"
                width={650}
                height={900}
                priority
                className="
                  absolute
                  right-[-80px]
                  top-1/2
                  -translate-y-1/2
                  z-10
                  h-auto
                  w-[650px]
                  object-contain
                "
              />

     

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}