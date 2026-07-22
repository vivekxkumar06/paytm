import Link from "next/link";
import {
  Plane,
  Bus,
  Train,
  PlaneTakeoff,
} from "lucide-react";

const items = [
  {
    icon: <Plane size={24} />,
    title: "Flights",
    href: "/flight",
  },
  {
    icon: <Bus size={24} />,
    title: "Bus",
    href: "/bus",
  },
  {
    icon: <Train size={24} />,
    title: "Trains",
    href: "/Train",
  },
  {
    icon: <PlaneTakeoff size={24} />,
    title: "Intl. Flights",
    href: "/Intl-flight",
  },
];

function BookingCard() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 sm:gap-10 flex-wrap">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex flex-col items-center gap-2 pb-3 sm:pb-4 transition-all
              ${
                index === 0
                  ? "text-sky-500 border-b-[3px] border-sky-500"
                  : "text-gray-700"
              }`}
          >
            {item.icon}
            <span className="font-semibold text-sm sm:text-base">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BookingCard;