import Link from "next/link";
import { ArrowRight } from "lucide-react";

const boxItems = [
  {
    logo: "/images/Credit.png",
    title1: "One destination for",
    title2: "Credit Cards",
    description:
      "Paytm HDFC, SBI Card & Axis Bank Credit Card with assured Cashback and incredible offers.",
    button: "Apply Now",
    image: "/images/Atm.png",
    bg: "bg-[#F1F7FD]",
    logos: [
      "/images/sbi.png",
      "/images/hdfc.png",
      "/images/kotak.png",
    ],
  },
  {
    logo: "/images/Paytm2.png",
    title1: "Insurance ka",
    title2: "Super Market",
    description:
      "A Smart, Simple & Transparent Platform to Explore & Purchase Insurance.",
    button: "Get It Now",
    image: "/images/hero3.png",
    bg: "bg-[#EAF8FC]",
    logos: [],
  },
];

export default function BoxSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8">
        {boxItems.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-6 sm:p-8 lg:p-12 min-h-[480px] sm:min-h-[600px] lg:min-h-[760px] flex flex-col rounded-3xl overflow-hidden`}
          >
            {/* Logo */}
            <div>
              <img
                src={item.logo}
                alt={item.title2}
                className="h-10 sm:h-14 object-contain"
              />
            </div>

            {/* Heading */}
            <div className="mt-6 sm:mt-10">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {item.title1}
              </h2>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#00BAF2] leading-tight">
                {item.title2}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-5 sm:mt-8 max-w-[600px] text-base sm:text-xl text-black leading-relaxed">
              {item.description}
            </p>

            {/* Button + Bank Logos */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#002970] px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-[#002970] transition-all hover:bg-[#002970] hover:text-white"
              >
                {item.button}
                <ArrowRight size={18} />
              </Link>

              {item.logos?.map((logo, idx) => (
                <div
                  key={idx}
                  className="h-10 sm:h-11 w-[70px] sm:w-[80px] rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center p-1"
                >
                  <img
                    src={logo}
                    alt="Bank Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Image */}
            <div className="mt-auto flex justify-center pt-8 sm:pt-10">
              <img
                src={item.image}
                alt={item.title2}
                className="w-full max-w-[350px] sm:max-w-[550px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}