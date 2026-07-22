
"use client"
import React, { useState } from "react";
import {
  Plane,
  Bus as BusIcon,
  TrainFront,
  Globe2,
  ChevronRight,
  Calendar,
  ArrowLeftRight,
  Briefcase,
  MapPinned,
  UtensilsCrossed,
  Calculator,
  HelpCircle,
  BadgeCheck,
  CalendarCheck2,
  Route,
  MapPin,
  Ticket,
  MousePointerClick,
} from "lucide-react";

/**
 * Paytm-style Train Booking page
 * -----------------------------------------------------------------------
 * Drop-in Next.js usage:
 *   1. Save as app/trains/page.jsx (or components/TrainBookingPage.jsx)
 *   2. Add "use client" at the very top of the file (uses useState)
 *   3. npm i lucide-react
 *   4. Images point at picsum.photos placeholders (real photography, not
 *      gradients). Swap the `img` fields in POPULAR_ROUTES / BANNERS for
 *      your real assets, ideally via next/image, once ready.
 * -----------------------------------------------------------------------
 */

const NAV_ITEMS = [
  { label: "Flights", icon: Plane },
  { label: "Bus", icon: BusIcon },
  { label: "Trains", icon: TrainFront },
  { label: "Intl. Flights", icon: Globe2 },
];

const DATES = [
  { date: "22 Jul", day: "Today" },
  { date: "23 Jul", day: "Thu" },
  { date: "24 Jul", day: "Fri" },
  { date: "25 Jul", day: "Sat" },
  { date: "26 Jul", day: "Sun" },
];

const CLASS_FILTERS = ["AC & non-AC", "AC only", "Non-AC only"];

const SERVICES = [
  { label: "My Trips", icon: Briefcase },
  { label: "PNR Status", icon: Ticket, tag: "PNR" },
  { label: "Train Status", icon: MapPinned },
  { label: "Order Food", icon: UtensilsCrossed },
  { label: "Fare Calculator", icon: Calculator },
];

const INFO_POINTS = [
  { icon: TrainFront, text: "Book trains for any destination, class or train type with Paytm." },
  { icon: Ticket, text: "Travellers can with no trouble find relevant trains, fares for various classes, schedules, seat availability and eventually make a reservation online." },
  { icon: CalendarCheck2, text: "Check out the details about train departure & arrival time between two particular destinations with the LTS feature and the train's PNR status on Paytm." },
  { icon: MousePointerClick, text: "We aim to offer easy services, rewarding you with a hassle-free train booking experience." },
];

const STEPS = [
  { step: 1, text: "Visit tickets.paytm.com/trains" },
  { step: 2, text: 'Select Source and Destination cities, Date of the journey, then click "Search" button' },
  { step: 3, text: "Choose your train and check seat availability for the same" },
  { step: 4, text: "Select the seat, class and date that suit you the best" },
  { step: 5, text: 'Click on "Book" button and enter your IRCTC login ID (If you do not have a login Id then choose "Sign-up with IRCTC" option or reset it by clicking on "Forgot IRCTC Password" button)' },
  { step: 6, text: 'Fill the requisite form and click "Book" button' },
  { step: 7, text: "Now proceed for payment, Choose method of your preference i.e. Debit/Credit Card or Net banking" },
  { step: 8, text: "You will be redirected to the IRCTC website to enter the password" },
  { step: 9, text: "Enter your IRCTC password. You have now completed your online train ticket booking!" },
];

const POPULAR_ROUTES = [
  { city: "Bangalore", links: ["Chennai Bangalore", "Mysore Bangalore", "Hyderabad Bangalore", "Delhi Bangalore"], img: "https://picsum.photos/seed/bangalore-church/80/80" },
  { city: "Chennai", links: ["Bangalore Chennai", "Coimbatore Chennai", "Madurai Chennai", "Hyderabad Chennai"], img: "https://picsum.photos/seed/chennai-temple/80/80" },
  { city: "Mumbai", links: ["Ahmedabad Mumbai", "Delhi Mumbai", "Bangalore Mumbai", "Hyderabad Mumbai", "Pune Mumbai"], img: "https://picsum.photos/seed/mumbai-gateway/80/80" },
  { city: "Hyderabad", links: ["Bangalore Hyderabad", "Tirupati Hyderabad", "Chennai Hyderabad", "Vijayawada Hyderabad"], img: "https://picsum.photos/seed/hyderabad-charminar/80/80" },
  { city: "Delhi", links: ["Bangalore Delhi", "Mumbai Delhi", "Kanpur Delhi", "Patna Delhi", "Jaipur Delhi", "Agra Delhi"], img: "https://picsum.photos/seed/delhi-gate/80/80" },
  { city: "Goa", links: ["Delhi Goa", "Mumbai Goa", "Pune Goa", "Bangalore Goa", "Chennai Goa"], img: "https://picsum.photos/seed/goa-church/80/80" },
  { city: "Kolkata", links: ["Guwahati Kolkata", "Delhi Kolkata", "Bangalore Kolkata", "Jaipur Kolkata"], img: "https://picsum.photos/seed/kolkata-bridge/80/80" },
  { city: "Pune", links: ["Mumbai Pune", "Delhi Pune", "Hyderabad Pune", "Nagpur Pune", "Bhusaval Pune"], img: "https://picsum.photos/seed/pune-building/80/80" },
];

const FAQS = [
  {
    q: "Why book train tickets online with Paytm?",
    a: "Apart from being one of the most reliable railway reservation platforms, there are some exclusive features that make Paytm a favourite trains ticket booking platform among the users.",
    list: [
      "Different modes of payments: Paytm accepts Credit Cards, Debit Cards, EMI options, Net Banking, ATM Card as well as other UPI payment options.",
      "Railway Reservation from Alternative Station: book tickets from the nearest railway station when tickets aren't available from your desired station.",
      "PNR Confirmation Prediction Feature: see the probability of your waitlisted ticket getting confirmed before you book.",
      "Check PNR Status: check your train ticket's PNR status on the website or app.",
      "Live Train Tracking: spot your train on your fingertips, on web or app.",
      "Quick Book Feature: favourite a selected route after booking so next time you can book it faster.",
      "24/7 Customer Support: reach the support team anytime on the customer care helpline.",
    ],
  },
  {
    q: "How can I book my train tickets on Paytm?",
    a: "Log in to Paytm using your account credentials, search for trains for your journey, click the preferred train, check seat availability for your dates, then proceed to book by entering your IRCTC credentials or creating an IRCTC account if you don't have one.",
  },
];

function ClassPill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
        active
          ? "border-[#00BAF2] bg-[#00BAF2] text-white"
          : "border-gray-200 text-gray-600 hover:border-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

export default function TrainBookingPage() {
  const [selectedDate, setSelectedDate] = useState("22 Jul");
  const [classFilter, setClassFilter] = useState("AC & non-AC");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ---------------------------------------------------------- Header */}
      <header className="border-b border-gray-100 bg-gradient-to-b from-[#E9F5FE] to-[#E9F5FE] px-4 py-4 sm:px-6 lg:px-10 mt-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <nav className="flex items-center gap-6 overflow-x-auto sm:gap-9">
            {NAV_ITEMS.map(({ label, icon: Icon }) => {
              const isActive = label === "Trains";
              return (
                <button
                  key={label}
                  className={`flex shrink-0 items-center gap-1.5 pb-3 text-sm font-medium ${
                    isActive
                      ? "border-b-2 border-[#00BAF2] text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon size={16} strokeWidth={2} />
                  {label}
                </button>
              );
            })}
          </nav>
          <button className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-gray-800">
            <Globe2 size={16} />
            24X7 Help
          </button>
        </div>
      </header>

      {/* -------------------------------------------------- Hero / Search */}
      <section className="bg-gradient-to-b from-[#E9F5FE] to-white px-4 pb-10 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-7">
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr_auto_auto] lg:items-start">
              <div>
                <p className="mb-1 text-xs font-medium text-gray-400">From</p>
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="From"
                  className="w-full border-none p-0 text-lg font-bold text-gray-900 placeholder:text-gray-900 focus:outline-none"
                />
                <p className="text-xs text-gray-400">{from ? "" : "Select Station"}</p>
              </div>

              <div className="relative">
                <button
                  onClick={swap}
                  className="absolute -left-8 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#00BAF2] lg:flex"
                >
                  <ArrowLeftRight size={15} />
                </button>
                <p className="mb-1 text-xs font-medium text-gray-400">To</p>
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="To"
                  className="w-full border-none p-0 text-lg font-bold text-gray-900 placeholder:text-gray-900 focus:outline-none"
                />
                <p className="text-xs text-gray-400">{to ? "" : "Select Station"}</p>
              </div>

              <div>
                <p className="mb-1 text-xs font-medium text-gray-400">Departure Date</p>
                <div className="flex gap-2 overflow-x-auto">
                  {DATES.map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setSelectedDate(d.date)}
                      className={`shrink-0 rounded-xl border px-3 py-2 text-center text-sm font-semibold ${
                        selectedDate === d.date
                          ? "border-[#00BAF2] text-[#00BAF2]"
                          : "border-gray-200 text-gray-800"
                      }`}
                    >
                      {d.date}
                      <div className="text-[11px] font-normal text-gray-400">{d.day}</div>
                    </button>
                  ))}
                  <button className="flex shrink-0 flex-col items-center justify-center rounded-xl border border-gray-200 px-3 py-2 text-gray-700">
                    <Calendar size={16} />
                    <span className="mt-0.5 text-[11px] font-semibold">Calendar</span>
                  </button>
                </div>
              </div>

              <button className="mt-1 self-start rounded-xl bg-[#00BAF2] px-8 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] lg:mt-6">
                Search Trains
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
              <div className="flex flex-wrap gap-3">
                {CLASS_FILTERS.map((c) => (
                  <ClassPill key={c} active={classFilter === c} onClick={() => setClassFilter(c)}>
                    {c}
                  </ClassPill>
                ))}
              </div>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-[#012A72]">
                <BadgeCheck size={16} />
                IRCTC Authorised Partner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Additional services */}
      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 text-xl font-bold">Additional services</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SERVICES.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 py-8 text-center hover:shadow-sm"
              >
                <Icon size={26} className="text-[#012A72]" strokeWidth={1.75} />
                <span className="text-sm font-bold text-gray-900">{label}</span>
              </button>
            ))}
          </div>

          {/* Promo banners */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFE9A8] to-[#FFF6DC] p-6">
              <p className="mb-1 text-sm font-semibold text-[#00BAF2]">Booking Window Open</p>
              <h3 className="mb-4 max-w-[220px] text-2xl font-extrabold leading-tight text-gray-900">
                Plan your cool summer getaways
              </h3>
              <button className="rounded-full bg-[#012A72] px-4 py-2 text-xs font-semibold text-white">
                Book Train Tickets →
              </button>
              <TrainFront className="absolute -bottom-2 right-3 text-orange-500/80" size={72} strokeWidth={1.25} />
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/train-tracks-hills/700/420"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="relative z-10 p-6 text-white">
                <h3 className="mb-4 max-w-[220px] text-xl font-extrabold leading-tight">
                  Get assured Train tickets on Paytm
                </h3>
                <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-medium">
                  <span className="flex items-center gap-1.5">
                    <CalendarCheck2 size={16} /> Flexible Travel Dates
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck size={16} /> Guaranteed Seat Assistance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Route size={16} /> Connecting Trains
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} /> Nearby Stations
                  </span>
                </div>
                <button className="rounded-full bg-[#D7F84A] px-4 py-2 text-xs font-bold text-gray-900">
                  Book Train Tickets →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- IRCTC info */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-xl font-bold">IRCTC Train Ticket Booking Online</h2>
          <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="mb-6 text-center text-sm text-gray-700 sm:text-base">
              Book your train tickets hassle-free on Paytm from the comfort of your home in just a few
              clicks. You no longer have to wait in long queues for{" "}
              <span className="text-[#00BAF2]">IRCTC ticket booking</span> since online railway
              reservation is now easy, quick and secure with Paytm.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {INFO_POINTS.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E9F5FE] text-[#012A72]">
                    <Icon size={17} />
                  </span>
                  <p className="text-sm text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Reservation steps */}
      <section className="px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-xl font-bold">Indian Railway Reservation on Paytm</h2>
          <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="mb-6 text-center text-sm font-medium text-gray-800 sm:text-base">
              You can login to Paytm using your Paytm account credentials and follow the given steps to
              book train tickets.
            </p>
            <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {STEPS.map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="shrink-0 rounded-md bg-[#FFD23F] px-2.5 py-1 text-xs font-bold text-gray-900">
                    Step {step}
                  </span>
                  <p className="text-sm text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Popular routes */}
      <section className="px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-xl font-bold">Indian Railways Popular Train Routes</h2>
          <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              {POPULAR_ROUTES.map((route) => (
                <div key={route.city} className="flex items-start gap-4">
                  <img
                    src={route.img}
                    alt={route.city}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="mb-1 text-base font-bold text-gray-900">Trains to {route.city}</p>
                    <p className="flex flex-wrap gap-x-1.5 text-sm text-[#00BAF2]">
                      {route.links.map((l, i) => (
                        <span key={l} className="flex items-center gap-1.5">
                          <a href="#" className="hover:underline">
                            {l}
                          </a>
                          {i < route.links.length - 1 && <span className="text-gray-300">|</span>}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- FAQs */}
      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-xl font-bold">Train Ticket Booking FAQs</h2>
          <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
            {FAQS.map((faq, i) => (
              <div key={i} className={i > 0 ? "mt-6 border-t border-gray-100 pt-6" : ""}>
                <p className="mb-2 flex items-start gap-2 text-sm font-bold text-gray-900">
                  <HelpCircle size={16} className="mt-0.5 shrink-0 text-[#012A72]" />
                  Que. {faq.q}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">Ans: </span>
                  {faq.a}
                </p>
                {faq.list && (
                  <ul className="mt-3 space-y-2 pl-1 text-sm text-gray-700">
                    {faq.list.map((item, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="font-bold text-gray-900">{j + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}