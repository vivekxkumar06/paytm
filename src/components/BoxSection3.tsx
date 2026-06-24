import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BoxSection3() {
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
                src="/images/hero6.png"
                alt="Paytm Money"
                width={170}
                height={50}
                className="mb-8"
              />

              <h2 className="text-[30px] md:text-[44px] lg:text-[56px] font-bold leading-[1.05] tracking-[-2px] text-black">
            Accept payments<br/>
            <span className="text-blue-600">
                 online & offline
            </span>
            
              </h2>

             <p className="mt-5 max-w-[680px] text-[32px] md:text-[42px] lg:text-[28px] font-bold leading-[1.15] tracking-[-2px] text-[#111827]">
  Millions of small & big businesses use Paytm to <br/>accept payments
  
  anywhere, anytime with  <br/> a wide range of solutions for all kinds of merchants.
  </p>


            

              <Link
                href="/"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#002970] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Learn More

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative min-h-[800px] flex items-center justify-end">

              {/* Phone Image */}
              <Image
                src="/images/hero7.png"
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