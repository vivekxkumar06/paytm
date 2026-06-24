import HeroCard from "./HeroCard";

export default function HeroSection() {
  return (
    <section className="bg-[#f5f7fa] py-6 text-black mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-6">
        
        <div className="flex-1">
          <HeroCard />
        </div>

        {/* Right Ad Banner – hidden on mobile */}
        <div className="hidden lg:block w-[380px] shrink-0">
          <img
            src="/images/hero.png"
            alt="Advertisement"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}