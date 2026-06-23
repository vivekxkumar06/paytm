import Link from "next/link";
import { Apple, Play } from "lucide-react";

function TextSection() {
  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Section */}
        <div className="max-w-[600px]">
          <img
            src="/images/paytm.png"
            alt="Paytm UPI"
            className="w-[180px] mb-10"
          />

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-black">
            Pay anyone directly
            <br />
            from your{" "}
            <span className="text-[#00BAF2]">
              bank
              <br />
              account
            </span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-black">
            Pay anyone, everywhere. Make contactless & secure
            payments in-stores or online using Paytm UPI or
            Directly from your Bank Account. Plus, send &
            receive money from anyone.
          </p>

          {/* Download Buttons */}
          <div className="flex gap-4 mt-10">
            <Link
              href="/play"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition"
            >
              <Apple size={28} />
              <div>
                <p className="text-[10px] uppercase">
                  Download on the
                </p>
                <p className="font-semibold text-lg">
                  App Store
                </p>
              </div>
            </Link>

            <Link
              href="/Google"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition"
            >
              <Play size={24} />
              <div>
                <p className="text-[10px] uppercase">
                  Get it on
                </p>
                <p className="font-semibold text-lg">
                  Google Play
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-end flex-1">
          <img
            src="/images/hero2.png"
            alt="Paytm Hero"
            className="w-full max-w-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default TextSection;