"use client";

import React, { useState } from "react";
import {
  Plane,
  Bus as BusIcon,
  TrainFront,
  Globe2,
  User,
  ChevronRight,
  ChevronLeft,
  Calendar,
  ArrowLeftRight,
  Armchair,
  BedDouble,
  Snowflake,
  Award,
  MousePointer2,
  ShieldCheck,
  BadgeCheck,
  QrCode,
} from "lucide-react";

/**
 * Paytm-style Bus Booking page
 * -----------------------------------------------------------------------
 * Drop-in Next.js usage:
 *   1. Save as app/bus/page.jsx (or components/BusBookingPage.jsx)
 *   2. Add "use client" at the very top of the file (uses useState)
 *   3. Make sure Tailwind + lucide-react are installed:
 *        npm i lucide-react
 *   4. Images currently point at picsum.photos placeholder photos (real
 *      photography, not gradients, so the layout reads like the real
 *      app). Swap the `img` fields in OFFERS / BLOGS / ROUTES for your
 *      actual Paytm-style assets, ideally via next/image, once ready.
 * -----------------------------------------------------------------------
 */

const NAV_ITEMS = [
  { label: "Flights", icon: Plane },
  { label: "Bus", icon: BusIcon },
  { label: "Trains", icon: TrainFront },
  { label: "Intl. Flights", icon: Globe2 },
];

const DATES = [
  { date: 22, day: "Today" },
  { date: 23, day: "Thu" },
  { date: 24, day: "Fri" },
  { date: 25, day: "Sat" },
  { date: 26, day: "Sun" },
];

const BUS_TYPES = [
  { label: "Seater", icon: Armchair },
  { label: "Sleeper", icon: BedDouble },
  { label: "AC", icon: Snowflake },
];

const OFFERS = [
  {
    id: 1,
    kind: "gold",
    tag: "NEW LAUNCH",
    title: "Book Bus Tickets on Paytm",
    cta: "Applicable on Paytm App",
  },
  {
    id: 2,
    kind: "route",
    title: "Save big with up to ₹200 off!",
    cta: "Book Bus Tickets",
    promo: "Promo: GROUPBUS",
    img: "https://picsum.photos/seed/mountain-bus-road/640/400",
  },
  {
    id: 3,
    kind: "trust",
    title: "Travel with peace of mind with Paytm Buses!",
    cta: "Book Bus Ticket",
    img: "https://picsum.photos/seed/woman-bus-travel/640/400",
  },
];

const BLOGS = [
  { id: 1, title: "Explore our new feature", tag: "INTRODUCING", female: true, img: "https://picsum.photos/seed/bus-interior-female/340/440" },
  { id: 2, title: "Top women-friendly destinations", img: "https://picsum.photos/seed/taj-mahal-woman/340/440" },
  { id: 3, title: "Budget destinations for student travellers in India", img: "https://picsum.photos/seed/backpacker-mountain/340/440" },
  { id: 4, title: "Top locations for a weekend road trip", img: "https://picsum.photos/seed/road-trip-mountain/340/440" },
  { id: 5, title: "Places to visit in Mysore", img: "https://picsum.photos/seed/mysore-palace/340/440" },
  { id: 6, title: "Places to visit in Jaipur", img: "https://picsum.photos/seed/jaipur-hawa-mahal/340/440" },
];

const ROUTES = [
  { from: "Bengaluru", to: "Hyderabad", count: 170, img: "https://picsum.photos/seed/charminar/120/120" },
  { from: "Indore", to: "Bhopal", count: 215, img: "https://picsum.photos/seed/indore-rajwada/120/120" },
  { from: "Hyderabad", to: "Bengaluru", count: 170, img: "https://picsum.photos/seed/bengaluru-vidhana/120/120" },
  { from: "Bhopal", to: "Indore", count: 180, img: "https://picsum.photos/seed/bhopal-taj-lake/120/120" },
  { from: "Bengaluru", to: "Chennai", count: 120, img: "https://picsum.photos/seed/chennai-basilica/120/120" },
  { from: "Vijayawada", to: "Hyderabad", count: 480, img: "https://picsum.photos/seed/vijayawada-kanakadurga/120/120" },
  { from: "Chennai", to: "Bengaluru", count: 115, img: "https://picsum.photos/seed/bengaluru-vidhana-2/120/120" },
  { from: "Hyderabad", to: "Guntur", count: 90, img: "https://picsum.photos/seed/guntur-statue/120/120" },
  { from: "Hyderabad", to: "Vijayawada", count: 600, img: "https://picsum.photos/seed/hyderabad-temple/120/120" },
  { from: "Chennai", to: "Coimbatore", count: 110, img: "https://picsum.photos/seed/coimbatore-adiyogi/120/120" },
];

function Pill({ active, children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors
        ${active
          ? "border-[#012A72] bg-[#012A72]/5 text-[#012A72]"
          : "border-gray-200 text-gray-500 hover:border-gray-300"}
        ${className}`}
    >
      {children}
    </button>
  );
}

export default function BusBookingPage() {
  const [tripType, setTripType] = useState("one-way");
  const [busType, setBusType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(22);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ---------------------------------------------------------- Header */}
      <header className="border-b border-gray-100 px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <nav className="flex items-center gap-6 overflow-x-auto sm:gap-9">
            {NAV_ITEMS.map(({ label, icon: Icon }) => {
              const isActive = label === "Bus";
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
          <button className="hidden shrink-0 items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 sm:flex">
            <User size={15} />
            My Bookings
            <ChevronRight size={15} />
          </button>
        </div>
      </header>

      {/* -------------------------------------------------- Hero / Search */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E9F5FE] to-white px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold sm:text-3xl">Book bus tickets</h1>
            <button className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 sm:hidden">
              <User size={14} />
              My Bookings
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Search card */}
          <div className="relative z-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
              {/* Left: trip type + from/to + bus type */}
              <div>
                <div className="mb-5 flex items-center gap-8">
                  {[
                    { id: "one-way", label: "One Way" },
                    { id: "round-trip", label: "Round trip" },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-900"
                    >
                      <span
                        onClick={() => setTripType(opt.id)}
                        className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                          tripType === opt.id ? "border-[#012A72]" : "border-gray-300"
                        }`}
                      >
                        {tripType === opt.id && (
                          <span className="h-2 w-2 rounded-full bg-[#012A72]" />
                        )}
                      </span>
                      {opt.label}
                    </label>
                  ))}
                </div>

                <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <input
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder="From"
                      className="w-full border-none text-base text-gray-800 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={swap}
                    className="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full border border-gray-200 text-gray-400 hover:text-[#012A72]"
                  >
                    <ArrowLeftRight size={15} />
                  </button>
                  <div className="flex-1">
                    <input
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder="To"
                      className="w-full border-none text-base text-gray-800 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2.5 text-sm text-gray-500">Bus Type</p>
                  <div className="flex flex-wrap gap-3">
                    {BUS_TYPES.map(({ label, icon: Icon }) => (
                      <Pill
                        key={label}
                        active={busType === label}
                        onClick={() => setBusType(busType === label ? null : label)}
                      >
                        <Icon size={15} />
                        {label}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: departure date + CTA */}
              <div className="lg:w-[380px]">
                <p className="mb-2.5 text-sm text-gray-500">Departure Date</p>
                <div className="mb-4 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3">
                  {DATES.map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setSelectedDate(d.date)}
                      className={`rounded-xl border px-2 py-2.5 text-center text-sm font-semibold transition-colors ${
                        selectedDate === d.date
                          ? "border-[#012A72] bg-[#012A72]/5 text-[#012A72]"
                          : "border-gray-200 text-gray-800"
                      }`}
                    >
                      {d.date}
                      <div className="text-[11px] font-normal text-gray-400">{d.day}</div>
                    </button>
                  ))}
                  <button className="flex flex-col items-center justify-center rounded-xl border border-gray-200 px-2 py-2.5 text-[#00BAF2]">
                    <Calendar size={16} />
                    <span className="mt-0.5 text-[11px] font-semibold">Calendar</span>
                  </button>
                </div>

                <button className="w-full rounded-xl bg-[#012A72] py-3.5 text-base font-semibold text-white shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99]">
                  Search Buses
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative skyline + bus illustration */}
        <svg
          viewBox="0 0 1400 220"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-[#DCEEFB] sm:h-36"
          preserveAspectRatio="xMidYMax slice"
        >
          <rect x="0" y="90" width="60" height="130" fill="currentColor" />
          <rect x="90" y="60" width="50" height="160" fill="currentColor" opacity="0.7" />
          <rect x="1300" y="70" width="60" height="150" fill="currentColor" />
          <rect x="1230" y="100" width="45" height="120" fill="currentColor" opacity="0.7" />
          <line x1="200" y1="150" x2="1150" y2="150" stroke="currentColor" strokeWidth="2" />
          <circle cx="500" cy="180" r="26" fill="currentColor" opacity="0.5" />
          <circle cx="900" cy="185" r="20" fill="currentColor" opacity="0.5" />
        </svg>
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
          <BusIcon size={46} className="text-[#0D5FCB]" strokeWidth={1.5} />
        </div>
      </section>

      {/* --------------------------------------------------- Best offers */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 text-xl font-bold">Best offers for you</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {OFFERS.map((offer) => (
                <div
                  key={offer.id}
                  className={`relative min-w-[280px] flex-1 overflow-hidden rounded-2xl p-6 sm:min-w-[320px] ${
                    offer.kind === "gold" ? "bg-gradient-to-br from-[#FDE9A8] to-[#FBF3D8]" : ""
                  }`}
                  style={{ minHeight: 200 }}
                >
                  {offer.img && (
                    <>
                      <img
                        src={offer.img}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${
                          offer.kind === "route"
                            ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                            : "bg-gradient-to-t from-black/80 via-black/30 to-black/10"
                        }`}
                      />
                    </>
                  )}
                  {offer.kind === "gold" && (
                    <>
                      <span className="mb-3 inline-block rounded bg-[#012A72] px-2 py-0.5 text-[10px] font-bold text-white">
                        NEW LAUNCH
                      </span>
                      <h3 className="mb-6 max-w-[150px] text-lg font-extrabold leading-tight text-gray-900">
                        {offer.title}
                      </h3>
                      <button className="rounded-full bg-[#012A72] px-4 py-2 text-xs font-semibold text-white">
                        {offer.cta} →
                      </button>
                      <div className="absolute right-4 top-4 text-right">
                        <Award className="ml-auto text-amber-500" size={26} />
                        <p className="mt-1 text-[11px] font-medium text-gray-700">Get Gold* worth</p>
                        <p className="text-xl font-extrabold text-amber-700">₹50</p>
                        <p className="text-[10px] text-gray-500">Promo: GOLDBUS</p>
                      </div>
                    </>
                  )}
                  {offer.kind === "route" && (
                    <div className="relative z-10 text-white">
                      <h3 className="mb-5 max-w-[190px] text-xl font-extrabold leading-tight text-[#D7F84A]">
                        {offer.title}
                      </h3>
                      <button className="mb-2 rounded-full bg-[#D7F84A] px-4 py-2 text-xs font-bold text-gray-900">
                        {offer.cta} →
                      </button>
                      <p className="text-[11px] text-white/80">{offer.promo}</p>
                    </div>
                  )}
                  {offer.kind === "trust" && (
                    <div className="relative z-10 text-white">
                      <h3 className="mb-4 max-w-[190px] text-lg font-extrabold leading-snug">
                        {offer.title}
                      </h3>
                      <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-medium">
                        <span className="flex items-center gap-1.5">
                          <BadgeCheck size={16} /> Best Price
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MousePointer2 size={16} /> Ease of Choice
                        </span>
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck size={16} /> Insurance
                        </span>
                        <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-bold text-gray-900">
                          FREE Cancellation
                        </span>
                      </div>
                      <button className="rounded-full bg-[#D7F84A] px-4 py-2 text-xs font-bold text-gray-900">
                        {offer.cta} →
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md sm:flex">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Travel blogs */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 text-xl font-bold">Travel Blogs</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {BLOGS.map((blog) => (
              <div
                key={blog.id}
                className="min-w-[170px] max-w-[170px] shrink-0 overflow-hidden rounded-2xl border border-gray-100"
              >
                <div className="relative h-44">
                  <img src={blog.img} alt={blog.title} className="h-full w-full object-cover" />
                  {blog.tag && (
                    <span className="absolute left-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-gray-700">
                      {blog.tag}
                    </span>
                  )}
                  {blog.female && (
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-full bg-white px-2 py-1.5 text-[10px] font-semibold text-gray-800 shadow">
                      <span className="flex items-center gap-1">
                        <User size={11} /> Booking for female
                      </span>
                      <span className="h-4 w-7 rounded-full bg-[#00BAF2]" />
                    </div>
                  )}
                </div>
                <p className="px-1 py-3 text-sm font-bold leading-snug text-gray-900">
                  {blog.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Top routes */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 text-xl font-bold">Top Routes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {ROUTES.map((route, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={route.img}
                    alt={`${route.from} to ${route.to}`}
                    className="h-11 w-11 shrink-0 rounded-xl object-cover"
                  />
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
                      {route.from}
                      <ChevronRight size={14} className="text-gray-400" />
                      {route.to}
                    </p>
                    <p className="text-xs text-gray-400">{route.count} Buses</p>
                  </div>
                </div>
                <button className="shrink-0 rounded-full border border-gray-200 px-3.5 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-50">
                  View all buses
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- FAQs */}
      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-xl font-bold">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-400">FAQ accordion goes here.</p>
        </div>
      </section>

      {/* --------------------------------------------------- QR floater */}
      <button className="fixed bottom-6 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#012A72] text-white shadow-lg">
        <QrCode size={22} />
      </button>
    </div>
  );
}