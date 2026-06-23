import HeroCard from "./HeroCard";


export default function HeroSection() {
  return (
    <section className="bg-[#f5f7fa] py-8 text-black mt-20">
      <div className="max-w-[1400px] mx-auto flex gap-6">
        
       
<HeroCard/>
        {/* Right Ad Banner */}
        <div className="w-[380px] shrink-0">
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