import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const scanItems = [
  {
    title: "Swipe left\nto keep it hush",
    description: "Hide your past payments\nwith a left swipe",
    img: "/images/card1.png",
    bg: "bg-[#EADFC3]",
  },
  {
    title: "Expense tracking\nmade smarter!",
    description: "Now, download your statement in\nExcel/PDF format",
    img: "/images/card2.png",
    bg: "bg-[#C8D7EE]",
  },
  {
    title: "We do the math,\nyou do the spending.",
    description: "Check total balance of all your\nlinked bank accounts",
    img: "/images/card3.png",
    bg: "bg-[#D5E7F0]",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#F3F5F7] py-10">
      <div className="mx-auto max-w-[1500px] px-5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {scanItems.map((item, index) => (
            <Link
              href="/Download"
              key={index}
              className={`${item.bg} relative overflow-hidden rounded-[22px] min-h-[205px] h-auto sm:h-[240px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Left Content */}
              <div className="max-w-[58%] sm:max-w-[60%]">
                <h2 className="whitespace-pre-line text-[18px] sm:text-[20px] font-bold leading-[1.1] text-[#002970]">
                  {item.title}
                </h2>

                <p className="mt-3 whitespace-pre-line text-[13px] sm:text-[14px] leading-[1.3] text-[#4B5C7A]">
                  {item.description}
                </p>

                <button className="mt-4 flex items-center gap-2 rounded-full bg-[#002970] px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:scale-105">
                  Download App Now
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Phone Image */}
              <div className="absolute bottom-0 right-4 sm:right-6 pointer-events-none">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={140}
                  height={160}
                  className="object-contain sm:w-[160px] sm:h-[180px]"
                />
              </div>

              {/* Decorative Stars */}
              <div className="absolute right-40 top-8 text-white text-2xl opacity-70">
                ✦
              </div>
              <div className="absolute right-24 top-14 text-white text-xl opacity-60">
                ✦
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}