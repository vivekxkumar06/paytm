import Link from "next/link";
import {
  Plane,
  Bus,
  Train,
  PlaneTakeoff,
} from "lucide-react";
const items = [
  {
    icon: <Plane size={28} />,
    title: "Flights",
    href: "/flight",
  },
  {
    icon: <Bus size={28} />,
    title: "Bus",
    href: "/bus",
  },
  {
    icon: <Train size={28} />,
    title: "Trains",
    href: "/train",
  },
  {
    icon: <PlaneTakeoff size={28} />,
    title: "Intl. Flights",
    href: "/intl-flight",
  },
];

function BookingCard() {
  return (
    
 <div className="flex justify-between items-center">

          <div className="flex gap-12">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex flex-col items-center gap-2 pb-4 transition-all
                  ${
                    index === 0
                      ? "text-sky-500 border-b-[3px] border-sky-500"
                      : "text-gray-700"
                  }`}
              >
                {item.icon}
                <span className="font-semibold text-base">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
    </div>
  )
}

export default BookingCard