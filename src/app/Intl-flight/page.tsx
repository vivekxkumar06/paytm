"use client"

import React, { useState } from "react";
import {
  Plane,
  Bus as BusIcon,
  TrainFront,
  Globe2,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  ArrowLeftRight,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

/**
 * Paytm-style Flight Booking page
 * -----------------------------------------------------------------------
 * Drop-in Next.js usage:
 *   1. Save as app/flights/page.jsx (or components/FlightBookingPage.jsx)
 *   2. Add "use client" at the very top of the file (uses useState)
 *   3. npm i lucide-react
 *   4. Images point at picsum.photos placeholders. Swap the `img` fields
 *      in OFFERS for your real assets, ideally via next/image.
 * -----------------------------------------------------------------------
 */

const NAV_ITEMS = [
  { label: "Flights", icon: Plane },
  { label: "Bus", icon: BusIcon },
  { label: "Trains", icon: TrainFront },
  { label: "Intl. Flights", icon: Globe2 },
];

const SPECIAL_FARES = [
  { label: "Student", sub: "Extra Baggage" },
  { label: "Armed Forces", sub: "Up to ₹600 off" },
  { label: "Senior Citizen", sub: "Up to ₹600 off" },
];

const OFFERS = [
  {
    id: 1,
    kind: "gold",
    tag: "DOUBLE OFFER",
    line1: "Get 24k Gold* worth",
    amount: "₹600",
    line2: "+ Get Assured",
    amount2: "₹200 Off",
    title: "Book Domestic Flights on Paytm",
    cta: "Book Now",
    promo: "Promo: DOMFLYDEAL",
    img: "https://picsum.photos/seed/airport-runway-wing/640/420",
  },
  {
    id: 2,
    kind: "destination",
    eyebrow: "PLAN A TRIP TO",
    title: "THAILAND",
    badge: "GET 10% OFF",
    promo: "Promo: FLYTHAI",
    cta: "Book Flights Now",
    img: "https://picsum.photos/seed/thailand-beach-boats/640/420",
  },
  {
    id: 3,
    kind: "world",
    title: "Fly anywhere in the world for less!",
    badge: "Get 6% Off",
    code: "Use Code: SKYINTL",
    img: "https://picsum.photos/seed/desert-camel-plane/640/420",
  },
];

const DOMESTIC_ROUTES = [
  ["Pune to Delhi Flights", "Delhi to Pune Flights"],
  ["Hyderabad to Delhi Flights", "Delhi to Hyderabad Flights"],
  ["Mumbai to Delhi Flights", "Bengaluru to Mumbai Flights"],
  ["Delhi to Mumbai Flights", "Mumbai to Bengaluru Flights"],
  ["Bengaluru to Delhi Flights", "Bengaluru to Kolkata Flights"],
  ["Delhi to Bengaluru Flights", "Kolkata to Bengaluru Flights"],
  ["Delhi to Chennai Flights", "Chennai to Delhi Flights"],
  ["Kolkata to Delhi Flights", "Ahmedabad to Delhi Flights"],
];

const INTL_ROUTES = [
  ["Dubai to Delhi Flights", "Hong Kong to Delhi Flights"],
  ["Bangkok to Mumbai Flights", "Singapore to Chennai Flights"],
];

const WHY_BOOK = [
  { title: "Lowest Fares", text: "Compare real-time prices across all major airlines and find the best available fare on every booking." },
  { title: "Book in Under 60 Seconds", text: "Pre-filled traveller details and saved payment methods mean fewer steps at checkout. Review, edit if needed, and confirm in one tap." },
  { title: "One-Way & Round Trip in One View", text: "Search and compare one-way and round trip fares side by side. Pick what suits your trip without switching modes." },
  { title: "Multiple Payment Options", text: "Pay via UPI, net banking, or credit/debit cards. Every transaction is fast, flexible, and secure." },
  { title: "Student & Special Category Fares", text: "Exclusive discounts for students, senior citizens, and armed forces personnel, with added baggage benefits across eligible routes." },
  { title: "Free Cancellation", text: "Cancel eligible flights at no cost with the Paytm Travel Pass. Instant refunds straight to your source account." },
  { title: "Flexible Fare Bundles", text: "Pick from fare options like Saver, Flexi, Plus, and Super 6E at the time of booking. Find the right balance of cost and flexibility." },
  { title: "Apply Offers at Checkout", text: "Check for applicable bank offers, coupons, or promo codes at checkout to save on your booking." },
  { title: "300M+ Users Trust Paytm", text: "Backed by India's most-used digital payments platform. Your booking and payment are always secure." },
];

const HOW_TO_BOOK = [
  { title: "Search Flights", text: "Enter your departure city, destination, travel date, and passenger count to get started." },
  { title: "Compare & Choose", text: "Filter flights by price, timing, duration, and stops across airlines to find the one that works best for you." },
  { title: "Add Extras", text: "Choose your seat, add meals, extra baggage, or travel insurance to customise your journey." },
  { title: "Pay & Confirm", text: "Complete your booking via UPI, cards, or net banking and receive instant confirmation." },
];

const CHEAP_TIPS = [
  { title: "Book 2–4 Weeks Early", text: "Fares are lower when booked 14–30 days in advance. Last-minute bookings cost more." },
  { title: "Fly Mid-Week or Saturday", text: "Tuesday, Wednesday, and Saturday flights are usually cheaper than weekend travel." },
  { title: "Pick Early Morning or Late Night Flights", text: "Flights before 7 AM and after 9 PM tend to be the most affordable on most routes." },
  { title: "Compare Across Airlines", text: "Fares vary across airlines for the same route. Always compare before booking." },
  { title: "Apply Offers at Checkout", text: "Check for bank offers, coupons, or promo codes before you pay." },
  { title: "Pick the Right Fare Bundle", text: "Choose Saver for light travel, Flexi or Plus if you may need to make changes." },
  { title: "Consider Connecting Flights", text: "Non-stop flights cost more. A connecting flight can be a cheaper option if you have time." },
  { title: "Track Fares Before Booking", text: "Monitor prices on your route and book when the fare suits your budget." },
];

const AIRLINES = [
  { title: "IndiGo", text: "India's most popular airline for a reason. Affordable fares, consistent on-time performance, and 15kg checked baggage in Economy." },
  { title: "Air India", text: "Fly with India's national carrier across the widest domestic and international network. Complimentary meals and checked baggage included." },
  { title: "SpiceJet", text: "Competitive fares on domestic and select international routes. A reliable low-cost option with 15kg checked baggage." },
  { title: "Air India Express", text: "The budget-friendly way to fly with the Air India group. Covers domestic and select international destinations at accessible fares." },
  { title: "Akasa Air", text: "Modern, comfortable, and growing fast. Akasa Air brings a fresh flying experience on a brand new Boeing 737 MAX fleet." },
  { title: "Star Air", text: "Connecting India's smaller cities to major hubs. A great option for travel to and from tier-2 and tier-3 destinations." },
];

const DOCUMENTS = [
  { title: "Domestic Flights within India", text: 'A valid government-issued photo ID is required at check-in. Accepted IDs include Aadhaar card, PAN card, driving licence, passport, or voter ID. Children under 12 do not need a separate photo ID; a birth certificate is sufficient. No visa or passport is needed for domestic travel. Documents can also be accessed digitally through DigiLocker, accepted at most airports.' },
  { title: "International Flights Departing from India", text: "A valid passport with at least 6 months validity is required. Carry a valid visa for your destination country if applicable. Keep a printed copy of your flight ticket and hotel bookings handy. Travel insurance documents are recommended. Entry requirements vary by country, so check the latest rules for your destination before you travel." },
];

const DISCOUNTS = [
  { title: "Student Fare", text: 'Exclusive discounts and extra baggage allowance for verified students on select airlines. Select "Student" under Special Fares while searching.' },
  { title: "Senior Citizen Fare", text: "Travellers aged 60 and above enjoy special fares on domestic flights. Discount applies automatically upon age verification at booking." },
  { title: "Armed Forces Fare", text: "Special fares and extra baggage allowance for active and retired military personnel on domestic flights." },
];

const FAQS = [
  { q: "Should I book a seat for an infant?", a: "A child under 2 years does not legally require a seat, but it is up to you to decide whether you need to book a seat for your infant or not. The fares for children below 2 years and above 2 years are different, as the ones above 2 years require a seat to fly." },
  { q: "What are the various classes for which flight tickets can be booked?", a: "The major classes for flight ticket booking are Economy and Business class." },
  { q: "What is the maximum number of seats that I can book in a single booking?", a: "You can book tickets for up to 9 persons in a single flight ticket booking." },
  { q: "How much time does it generally take to get my ticket confirmation?", a: "Within minutes of booking the tickets, you will get a confirmation email to the email ID you had provided for the flight ticket booking." },
  { q: "Can I book tickets for another person using my account?", a: "Yes, you can. You just have to enter the passenger details at the time of booking." },
  { q: "How can I get a boarding pass for a booked ticket?", a: "You can show your ticket confirmation email at the check-in counter of the airport or proceed for web check-in on the airline website. The airline representative would then issue the boarding pass, or you can take a printout of the boarding pass if you are doing web check-in." },
  { q: "Do I have to show ID proof when I check-in?", a: "Yes, any valid photo ID like the PAN card or driver's license should be shown at the time of check-in at the airport for domestic travel, and the passport too has to be submitted for international travel." },
  { q: "How much baggage is allowed to be carried on flight?", a: "The baggage allowance policies vary from airline to airline. You can check with the airline operators to find the exact baggage allowance and restrictions for checked-in bags and cabin baggage." },
  { q: "Can I pay later for my booked flight tickets?", a: "No, currently we do not offer this service. The complete amount has to be paid while booking the flight tickets." },
];

function RouteRow({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-gray-100 py-3.5 last:border-none">
      <p className="text-sm text-gray-800">{text}</p>
      <button className="shrink-0 rounded-lg border border-[#00BAF2] px-3.5 py-1.5 text-xs font-semibold text-[#00BAF2] hover:bg-[#E9F5FE]">
        Search Flights
      </button>
    </div>
  );
}

function NumberedBlock({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="py-3">
      <p className="mb-1 text-sm font-bold text-gray-900">
        {n}. {title}
      </p>
      <p className="text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
}

function InfoCard({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-extrabold text-gray-900 sm:text-xl">{heading}</h2>
      {children}
    </div>
  );
}

export default function FlightBookingPage() {
  const [tripType, setTripType] = useState("one-way");
  const [nonStop, setNonStop] = useState(false);
  const [specialFare, setSpecialFare] = useState<string | null>(null);
  const [from, setFrom] = useState("Delhi (DEL)");
  const [to, setTo] = useState("Mumbai (BOM)");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ---------------------------------------------------------- Header */}
      <header className="border-b border-gray-100 bg-gradient-to-b from-[#E9F5FE] to-[#E9F5FE] px-4 py-4 sm:px-6 lg:px-10 mt-20">
        <div className="mx-auto flex max-w-6xl items-center">
          <nav className="flex items-center gap-6 overflow-x-auto sm:gap-9">
            {NAV_ITEMS.map(({ label, icon: Icon }) => {
              const isActive = label === "Flights";
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
        </div>
      </header>

      {/* -------------------------------------------------- Hero / Search */}
      <section className="bg-gradient-to-b from-[#E9F5FE] to-white px-4 pb-8 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-7">
            <div className="mb-5 flex items-center gap-8">
              {[
                { id: "one-way", label: "One Way" },
                { id: "round-trip", label: "Round Trip" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-900"
                >
                  <span
                    onClick={() => setTripType(opt.id)}
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      tripType === opt.id ? "border-[#00BAF2]" : "border-gray-300"
                    }`}
                  >
                    {tripType === opt.id && <span className="h-2 w-2 rounded-full bg-[#00BAF2]" />}
                  </span>
                  {opt.label}
                </label>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr_auto] lg:items-start">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-gray-100 pb-3 lg:border-none lg:pb-0">
                <div>
                  <p className="mb-1 text-xs font-medium text-gray-400">From</p>
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full border-none p-0 text-base font-bold text-gray-900 focus:outline-none"
                  />
                </div>
                <button
                  onClick={swap}
                  className="mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#00BAF2]"
                >
                  <ArrowLeftRight size={14} />
                </button>
                <div>
                  <p className="mb-1 text-xs font-medium text-gray-400">To</p>
                  <input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full border-none p-0 text-base font-bold text-gray-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="border-b border-gray-100 pb-3 lg:border-none lg:pb-0">
                <p className="mb-1 text-xs font-medium text-gray-400">Depart</p>
                <p className="text-base font-bold text-gray-900">Wed, 29 Jul 26</p>
              </div>

              <div className="border-b border-gray-100 pb-3 lg:border-none lg:pb-0">
                <p className="mb-1 text-xs font-medium text-gray-400">Return</p>
                <button className="text-base font-bold text-[#00BAF2]">Add Return</button>
              </div>

              <div className="border-b border-gray-100 pb-3 lg:border-none lg:pb-0">
                <p className="mb-1 text-xs font-medium text-gray-400">Passenger &amp; Class</p>
                <button className="flex items-center gap-1 text-base font-bold text-gray-900">
                  1 Traveller, Economy/Pr...
                  <ChevronDown size={15} className="text-gray-400" />
                </button>
              </div>

              <button className="mt-1 rounded-xl bg-[#00BAF2] px-8 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] lg:mt-6">
                Search Flights
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <p className="text-xs font-medium text-gray-400">Special Fares (optional)</p>
                  <p className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <ShieldCheck size={13} /> Extra Savings
                  </p>
                </div>
                {SPECIAL_FARES.map((f) => (
                  <button
                    key={f.label}
                    onClick={() => setSpecialFare(specialFare === f.label ? null : f.label)}
                    className={`rounded-xl border px-3.5 py-2 text-left text-xs font-semibold ${
                      specialFare === f.label
                        ? "border-[#00BAF2] bg-[#E9F5FE] text-gray-900"
                        : "border-gray-200 text-gray-800"
                    }`}
                  >
                    {f.label}
                    <div className="font-normal text-gray-400">{f.sub}</div>
                  </button>
                ))}
              </div>
              <label className="flex shrink-0 items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={nonStop}
                  onChange={(e) => setNonStop(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#00BAF2]"
                />
                Show Non-stop flights only
              </label>
            </div>
          </div>

          {/* My Bookings */}
          <button className="mt-5 flex w-full items-center justify-between rounded-2xl border border-gray-100 px-6 py-5 hover:bg-gray-50">
            <span className="flex items-center gap-3 text-base font-semibold text-gray-900">
              <Briefcase size={20} className="text-gray-700" />
              My Bookings
            </span>
            <ChevronRight size={18} className="text-[#00BAF2]" />
          </button>

          {/* Offers carousel */}
          <div className="relative mt-6">
            <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {OFFERS.map((offer) => (
                <div
                  key={offer.id}
                  className="relative min-w-[300px] flex-1 overflow-hidden rounded-2xl sm:min-w-[340px]"
                  style={{ minHeight: 220 }}
                >
                  <img src={offer.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div
                    className={`absolute inset-0 ${
                      offer.kind === "gold"
                        ? "bg-gradient-to-r from-amber-200/90 via-amber-100/70 to-transparent"
                        : "bg-gradient-to-t from-black/70 via-black/25 to-black/10"
                    }`}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between p-5">
                    {offer.kind === "gold" && (
                      <>
                        <span className="w-fit rounded bg-rose-600 px-2 py-1 text-[10px] font-bold text-white">
                          {offer.tag}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">{offer.line1}</p>
                          <p className="text-2xl font-extrabold text-rose-600">{offer.amount}</p>
                          <p className="text-xs font-semibold text-gray-800">{offer.line2}</p>
                          <p className="mb-3 text-xl font-extrabold text-rose-600">{offer.amount2}</p>
                          <h3 className="mb-2 max-w-[140px] text-base font-extrabold leading-tight text-gray-900">
                            {offer.title}
                          </h3>
                          <button className="mb-1 rounded-full bg-[#012A72] px-4 py-2 text-xs font-semibold text-white">
                            {offer.cta}
                          </button>
                          <p className="text-[10px] text-gray-600">{offer.promo}</p>
                        </div>
                      </>
                    )}
                    {offer.kind === "destination" && (
                      <div className="flex h-full flex-col items-center justify-center text-center text-white">
                        <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold">
                          <Plane size={13} /> Paytm Flight Tickets
                        </p>
                        <p className="mb-1 text-xs tracking-widest">{offer.eyebrow}</p>
                        <h3 className="mb-3 text-3xl font-extrabold tracking-wide">{offer.title}</h3>
                        <span className="mb-2 rounded bg-[#FFD23F] px-3 py-1 text-xs font-bold text-gray-900">
                          {offer.badge}
                        </span>
                        <p className="mb-3 text-[11px] text-white/80">{offer.promo}</p>
                        <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-900">
                          {offer.cta} →
                        </button>
                      </div>
                    )}
                    {offer.kind === "world" && (
                      <div className="relative flex h-full flex-col justify-center">
                        <div className="max-w-[190px] rounded-xl bg-white/95 p-4">
                          <p className="mb-2 flex items-center gap-1 text-xs font-bold text-[#012A72]">
                            <Plane size={13} /> Paytm Flights
                            <span className="ml-1 rounded border border-gray-300 px-1 text-[9px] text-gray-500">
                              FREE Cancellation
                            </span>
                          </p>
                          <h3 className="mb-3 text-lg font-extrabold leading-tight text-gray-900">
                            {offer.title}
                          </h3>
                          <button className="rounded-full bg-[#FFD23F] px-3 py-1.5 text-xs font-bold text-gray-900">
                            {offer.badge} →
                          </button>
                        </div>
                        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold text-white">
                          {offer.code}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 hidden h-9 w-9 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md sm:flex">
              <ChevronLeft size={16} />
            </button>
            <button className="absolute right-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md sm:flex">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Routes */}
      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
            <h2 className="mb-2 text-lg font-extrabold text-gray-900">Top Domestic Routes</h2>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {DOMESTIC_ROUTES.map((pair, i) => (
                <React.Fragment key={i}>
                  <RouteRow text={pair[0]} />
                  <RouteRow text={pair[1]} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
            <h2 className="mb-2 text-lg font-extrabold text-gray-900">Top International Routes</h2>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {INTL_ROUTES.map((pair, i) => (
                <React.Fragment key={i}>
                  <RouteRow text={pair[0]} />
                  <RouteRow text={pair[1]} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <InfoCard heading="Book Flight Tickets Online on Paytm">
            <div className="space-y-4 text-sm leading-relaxed text-gray-600">
              <p>
                Online flight ticket bookings just got easier and quicker. On Paytm, you can now book
                your flight tickets in minutes, from anywhere, at any time! Enjoy a hassle-free flight
                ticket booking experience by getting your tickets booked securely, in minutes.
              </p>
              <p>
                Book <span className="text-[#00BAF2]">domestic flight tickets</span> to your favourite
                destinations including Goa, Delhi, Bengaluru, Hyderabad, Chennai and Kolkata from all
                leading domestic airline operators. We also offer{" "}
                <span className="text-[#00BAF2]">international flight tickets</span> at competitive
                rates. You no more have to rely on travel agents or middlemen for the booking of your
                flight tickets. Paytm is the complete solution for all your concerns related to online
                flight ticket bookings.
              </p>
              <p>
                You can book your flight tickets from domestic and international operators including{" "}
                <span className="text-[#00BAF2]">Indigo, SpiceJet, Air India, Qatar Airways, Singapore Airlines</span> and{" "}
                <span className="text-[#00BAF2]">Gulf Air</span>.
              </p>
              <p>#PaytmKaro and enjoy a relaxed flight ticket booking experience.</p>
            </div>
          </InfoCard>

          <InfoCard heading="Why Book Flight Tickets with Paytm">
            <div className="divide-y divide-gray-100">
              {WHY_BOOK.map((item, i) => (
                <NumberedBlock key={item.title} n={i + 1} title={item.title} text={item.text} />
              ))}
            </div>
          </InfoCard>

          <div className="grid gap-6 lg:grid-cols-2">
            <InfoCard heading="How to Book Flight Tickets on Paytm">
              <div className="divide-y divide-gray-100">
                {HOW_TO_BOOK.map((item, i) => (
                  <NumberedBlock key={item.title} n={i + 1} title={item.title} text={item.text} />
                ))}
              </div>
            </InfoCard>

            <InfoCard heading="Tips to Book the Cheapest Flight Tickets in India">
              <div className="divide-y divide-gray-100">
                {CHEAP_TIPS.map((item, i) => (
                  <NumberedBlock key={item.title} n={i + 1} title={item.title} text={item.text} />
                ))}
              </div>
            </InfoCard>
          </div>

          <InfoCard heading="All Airlines, One Platform">
            <div className="divide-y divide-gray-100">
              {AIRLINES.map((item, i) => (
                <NumberedBlock key={item.title} n={i + 1} title={item.title} text={item.text} />
              ))}
            </div>
          </InfoCard>

          <div className="grid gap-6 lg:grid-cols-2">
            <InfoCard heading="What Documents Do You Need for Flights?">
              <div className="divide-y divide-gray-100">
                {DOCUMENTS.map((item, i) => (
                  <NumberedBlock key={item.title} n={i + 1} title={item.title} text={item.text} />
                ))}
              </div>
            </InfoCard>

            <InfoCard heading="Student, Senior Citizen and Armed Forces Flight Discounts">
              <div className="divide-y divide-gray-100">
                {DISCOUNTS.map((item, i) => (
                  <NumberedBlock key={item.title} n={i + 1} title={item.title} text={item.text} />
                ))}
              </div>
            </InfoCard>
          </div>

          <InfoCard heading="FAQs Related to Flight Ticket Bookings With Paytm">
            <div className="divide-y divide-gray-100">
              {FAQS.map((faq, i) => (
                <div key={i} className="py-4">
                  <p className="mb-1.5 text-sm font-bold text-gray-900">Q. {faq.q}</p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    <span className="font-bold text-gray-900">Ans: </span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </section>
    </div>
  );
}