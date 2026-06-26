"use client";

import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FooterItem {
  label: string;
  href?: string;
}

interface FooterSection {
  title: string;
  expandable: boolean;
  items: FooterItem[];
  richContent?: boolean;
  companyContent?: boolean;
  careerLink?: string;
  investorContent?: boolean;
}

// ─── Investor Relations Content ───────────────────────────────────────────────
function MoreAboutPaytmContent() {
  return (
    <div className="pb-6 pl-9 pr-4 text-sm text-gray-600 leading-relaxed space-y-5">

      {/* Section 1 */}
      <div>
        <h2 className="font-bold text-gray-900 text-base mb-2">
          Paytm - India's Most Trusted Platform for BHIM UPI Payments, Money Transfers, Recharges, and other online payments
        </h2>
        <p>
          Paytm - India's largest digital payment app makes it secure and seamless to pay using UPI, make bill payments, recharge mobiles, DTH, data card &amp; Metro Card etc anywhere in India.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 mb-1">Pay Using Paytm UPI with Ease</h3>
        <p>
          Experience the epitome of convenience with Paytm's flawless UPI integration. Whether you're sending money to a friend, shopkeeper, or family, or making a purchase online, our user-friendly interface ensures a hassle-free experience. Enjoy swift and secure transactions with just a few taps, as we've streamlined the process to fit seamlessly into your busy lifestyle.
        </p>
      </div>

      <p>
        Stay in the loop with instant notifications on your transactions. Receive alerts for every payment, ensuring you're always in control of your finances. Our commitment to transparency empowers you with real-time updates, giving you the confidence that each transaction is executed with precision.
      </p>

      <div>
        <h3 className="font-bold text-gray-900 mb-1">Pay All Your Bills with Paytm Anytime, Anywhere</h3>
        <p>
          Your one-stop solution for effortlessly managing and paying all your bills online. We understand the complexities of modern life, and our mission is to simplify the way you handle your financial responsibilities. With our user-friendly platform, you can easily pay your electricity, landline, water, phone bills, and more in just a few clicks. No more juggling multiple accounts or standing in long queues—Paytm consolidates all your bill payments into a convenient digital hub.
        </p>
      </div>

      <p>
        Effortlessly make mobile bill payments through our safe methods, processed through secured gateways for{" "}
        <a href="#" className="text-cyan-500 hover:underline">Airtel Recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Jio Recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Vodafone Idea Recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">MTNL Recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">BSNL Recharge</a>{" "}
        and more. You can also pay landline bills of Airtel, BSNL, Hathway, Asianet Broadband, Alliance Broadband, Tata Play Fibre.
      </p>

      <p>
        Recharge your DTH online with ease. From{" "}
        <a href="#" className="text-cyan-500 hover:underline">Tata Play recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Airtel DTH recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Videocon D2H recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Sun Direct recharge</a>, to{" "}
        <a href="#" className="text-cyan-500 hover:underline">Dish TV recharge</a>{" "}
        and more just on Paytm.
      </p>

      <p>
        Got a data card to recharge? We've got your back there too. Get your{" "}
        <a href="#" className="text-cyan-500 hover:underline">Airtel Data Card Recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Vodafone Idea Data Card Recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Jio Data Card Recharge</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">BSNL Data Card Recharge</a> and{" "}
        <a href="#" className="text-cyan-500 hover:underline">MTNL Data Card Recharge</a> now on Paytm.
      </p>

      <p>
        <strong className="text-gray-900">Make electricity bill payment?</strong> Pay your{" "}
        <a href="#" className="text-cyan-500 hover:underline">electricity bills online</a> on Paytm and avoid waiting in queues for hours. Whether you want to make{" "}
        <a href="#" className="text-cyan-500 hover:underline">Goa Electricity Bill Payment</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Bihar Electricity Bill Payment</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Haryana Electricity Bill Payment</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Maharashtra Electricity Bill Payment</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Punjab Electricity Bill Payment</a>, or{" "}
        <a href="#" className="text-cyan-500 hover:underline">Telangana Electricity Bill Payment</a>, we've got you covered.
      </p>

      <p>
        <strong className="text-gray-900">Make Gas, Water And Municipal Bill Payment?</strong> Pay your gas, water and{" "}
        <a href="#" className="text-cyan-500 hover:underline">municipal bills</a> within seconds for{" "}
        <a href="#" className="text-cyan-500 hover:underline">Delhi Jal Board</a>, Indore Municipal Corporation, Gwalior Municipal Corporation,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Bhopal Municipal Corporation</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Bangalore Water Supply and Sewage Board</a>, Surat Municipal Corporation, Pune Municipal Corporation,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Nagpur Municipal Corporation</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Uttrakhand Jal Sansthan</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Indraprastha Gas Limited</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Gujarat Gas Limited</a>, Adani Gas Limited,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Aavantika Gas Limited</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Vadodara Gas Limited</a>,{" "}
        <a href="#" className="text-cyan-500 hover:underline">Maharashtra Natural Gas Ltd</a> and more.
      </p>

      {/* Travel & Tickets */}
      <div>
        <h3 className="font-bold text-gray-900 mb-1">Book Online Tickets - Flight Tickets, Train Tickets &amp; Bus Tickets with Ease</h3>
        <p>
          Save money and time by booking your travel tickets on Paytm. You can find{" "}
          <a href="#" className="text-cyan-500 hover:underline">cheap flight tickets</a>, train tickets, and bus tickets on Paytm. Compare the prices, get schedules, pick the best-suited seat, and experience easy ticket booking services online. You can also save money on your travel by applying promo codes on flights, buses &amp; trains to get cashback in your Paytm UPI on your travel tickets.
        </p>
      </div>

      <p>
        <strong className="text-gray-900">Flight Tickets–</strong> Just enter your boarding and destination city to know all the flight ticket prices for both{" "}
        <a href="#" className="text-cyan-500 hover:underline">domestic flights</a> and{" "}
        <a href="#" className="text-cyan-500 hover:underline">international flights</a>.
      </p>

      <p>
        <strong className="text-gray-900">Train Ticket Booking–</strong>{" "}
        <a href="#" className="text-cyan-500 hover:underline">Check PNR status</a>, find train schedule, and{" "}
        <a href="#" className="text-cyan-500 hover:underline">get train seat availability</a> for your online{" "}
        <a href="#" className="text-cyan-500 hover:underline">train ticket bookings</a>. Just enter your boarding and destination station or city to know all the train ticket prices. Make instant train reservations through Paytm and save money with cashback.
      </p>

      <p>
        <strong className="text-gray-900">Bus Tickets–</strong> Make fast online{" "}
        <a href="#" className="text-cyan-500 hover:underline">bus ticket booking</a> for both AC and non-AC buses, private and government buses on Paytm. Find all the buses and timings along with{" "}
        <a href="#" className="text-cyan-500 hover:underline">bus ticket offers</a> for your bus tickets.
      </p>

      <div>
        <h3 className="font-bold text-gray-900 mb-1">Book Events, Movies, and Endless Entertainment with Paytm</h3>
        <p>
          Relive the moment and revive your daily routine with an amazing experience at an incredible amusement park. Find movie showtimes, and movie theaters to book your{" "}
          <a href="#" className="text-cyan-500 hover:underline">movie tickets online</a> and get movie ticket offers.
        </p>
      </div>

      <p>
        Enjoy the hottest buzz in the town, and do not miss out on the latest shows and events of your favorite artists, be it a music concert or booking a ticket to your favorite standup comedy show, you can do it all without hassle on Paytm. Our entertainment section enables you to book tickets online for Movies and Events in a matter of a few clicks and escape from your busy schedule.
      </p>

      {/* Trust cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36" className="text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            ),
            title: "24X7 Help",
            desc: "If we fall short of your expectations in any way, let us know.",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36" className="text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            ),
            title: "100% Assurance",
            desc: "If you face any issue, your money is immediately refunded. Sit back shop on.",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36" className="text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            ),
            title: "Paytm Trust",
            desc: "Your money is yours. All refunds come with no question asked guarantee.",
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4 border border-gray-200 rounded-xl p-4">
            <div className="shrink-0">{icon}</div>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">{title} </strong>
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom links bar */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 border border-gray-200 rounded-xl px-6 py-4 mt-2">
        {["About Us", "24×7 Help", "Partner with us", "Grievance policy", "Blog", "Bug bounty", "Privacy", "Terms & Conditions"].map((link) => (
          <a key={link} href="#" className="text-sm text-gray-500 hover:text-cyan-500 transition-colors">
            {link}
          </a>
        ))}
        <div className="ml-auto flex gap-3">
          <a href="#" className="border border-cyan-400 text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors">
            Become a Seller &amp; Earn
          </a>
          <a href="#" className="border border-cyan-400 text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors">
            Paytm for Business
          </a>
        </div>
      </div>

      {/* Security section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Be Safe. Be Vigilant</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Please do not share your Paytm password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from Paytm. We advise our customers to completely ignore such communications &amp; report to us at{" "}
            <a href="mailto:cybercell@paytmbank.com" className="text-cyan-500 hover:underline">cybercell@paytmbank.com</a>
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Disclaimers</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Cashback is 'Paytm loyalty cashback' given by 'Pay with Paytm' payment platform. It can be used to pay for goods &amp; services sold by merchants that accept 'Pay with Paytm'
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Bank Grade Security with</h4>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-bold text-blue-800 border border-gray-200 rounded px-2 py-1">AmEx SafeKey</span>
            <span className="text-xs font-bold text-blue-700 border border-gray-200 rounded px-2 py-1">PCI DSS</span>
            <span className="text-xs font-bold text-blue-600 border border-gray-200 rounded px-2 py-1">Verified by VISA</span>
            <span className="text-xs font-bold border border-gray-200 rounded px-2 py-1" style={{ color: "#e87722" }}>RuPay</span>
            <span className="text-xs font-bold text-red-600 border border-gray-200 rounded px-2 py-1">MasterCard SecureCode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const footerSections: FooterSection[] = [
  {
    title: "Investor Relations",
    expandable: true,
    investorContent: true,
    items: [],
  },
  {
    title: "More about Paytm",
    expandable: true,
    richContent: true,
    items: [],
  },
  {
    title: "Company",
    expandable: true,
    companyContent: true,
    items: [
      { label: "About Us", href: "#" },
      { label: "CSR", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "UPI Payment App (Android)", href: "#" },
      { label: "UPI Payment App (iOS)", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    title: "Career",
    expandable: false,
    careerLink: "https://jobs.paytm.com",
    items: [],
  },
  {
    title: "Recharge & pay bills",
    expandable: true,
    companyContent: true,
    items: [
      { label: "Mobile Recharge", href: "#" },
      { label: "Mobile Bill Payment", href: "#" },
      { label: "Datacard Recharge", href: "#" },
      { label: "Datacard Bill Payment", href: "#" },
      { label: "Dth Recharge", href: "#" },
      { label: "Electricity Bill Payment", href: "#" },
      { label: "Landline Bill Payment", href: "#" },
      { label: "Broadband Bill Payment", href: "#" },
      { label: "Gas Bill Payment", href: "#" },
      { label: "Water Bill Payment", href: "#" },
      { label: "Metro Card Recharge", href: "#" },
      { label: "Municipal Recharge", href: "#" },
      { label: "Toll Recharge", href: "#" },
      { label: "Credit Bill Payment", href: "#" },
      { label: "Cabletv Recharge", href: "#" },
      { label: "Devotion", href: "#" },
      { label: "Fastag Recharge", href: "#" },
      { label: "Recharge & Bill Payments App (Android)", href: "#" },
      { label: "Recharge & Bill Payments App (iOS)", href: "#" },
    ],
  },
  {
    title: "Pay Loan EMI, Insurance Premiums & Education Fee",
    expandable: true,
    companyContent: true,
    items: [
      { label: "Pay Loan EMI", href: "#" },
      { label: "Pay Insurance Premium", href: "#" },
    ],
  },
  {
    title: "Book Travel & Entertainment",
    expandable: true,
    companyContent: true,
    items: [
      { label: "Movie Ticket Booking", href: "#" },
      { label: "Bus Ticket Booking", href: "#" },
      { label: "Flight Tickets Booking", href: "#" },
      { label: "Train Ticket Booking", href: "#" },
      { label: "Upcoming Movies", href: "#" },
      { label: "Trains Sitemap", href: "#" },
      { label: "Bus Sitemap", href: "#" },
      { label: "Paytm Checkin Flight Ticket Booking App (Android)", href: "#" },
      { label: "Paytm Checkin Flight Ticket Booking App (iOS)", href: "#" },
      { label: "Paytm Checkin Bus Ticket Booking App (Android)", href: "#" },
      { label: "Paytm Checkin Bus Ticket Booking App (iOS)", href: "#" },
      { label: "Paytm Checkin Train Ticket Booking App (Android)", href: "#" },
      { label: "Paytm Checkin Train Ticket Booking App (iOS)", href: "#" },
      { label: "Travel Blog", href: "#" },
    ],
  },
  {
    title: "Investments & Miscellaneous",
    expandable: true,
    companyContent: true,
    items: [
      { label: "Mutual Fund Investments", href: "#" },
      { label: "Fee Payment", href: "#" },
      { label: "Google Play Recharge", href: "#" },
      { label: "Train Tickets", href: "#" },
      { label: "Paytm Service Agent", href: "#" },
      { label: "Paytm Careers", href: "#" },
      { label: "Free Credit Score", href: "#" },
      { label: "Investments App (Android)", href: "#" },
      { label: "Investments App (iOS)", href: "#" },
      { label: "Apply for Field Sales Executive Job", href: "#" },
      { label: "Become a Paytm Ambassador", href: "#" },
    ],
  },
  {
    title: "Loans and Credit Cards",
    expandable: true,
    companyContent: true,
    items: [
      { label: "Postpaid", href: "#" },
      { label: "Credit Cards", href: "#" },
      { label: "Personal Loan", href: "#" },
      { label: "Credit Report", href: "#" },
      { label: "Loan & Credit Cards App (Android)", href: "#" },
      { label: "Loan & Credit Cards App (iOS)", href: "#" },
    ],
  },
  {
    title: "Financial Tools & Calculators",
    expandable: true,
    companyContent: true,
    items: [
      { label: "EMI Calculator", href: "#" },
      { label: "Personal Loan EMI Calculator", href: "#" },
      { label: "Home Loan EMI Calculator", href: "#" },
      { label: "Car Loan EMI Calculator", href: "#" },
      { label: "IFSC Code Finder", href: "#" },
      { label: "Financial Tools & Calculators", href: "#" },
      { label: "Currency Converter", href: "#" },
      { label: "List of Currencies", href: "#" },
      { label: "Currency Converter Sitemap", href: "#" },
      { label: "IFSC Code Sitemap", href: "#" },
      { label: "Income Tax Calculator", href: "#" },
      { label: "HRA Calculator", href: "#" },
      { label: "PPF Calculator", href: "#" },
      { label: "Gratuity Calculator", href: "#" },
      { label: "NPS Calculator", href: "#" },
      { label: "Sukanya Samriddhi Yojana Calculator", href: "#" },
      { label: "EPF Calculator", href: "#" },
      { label: "APY Calculator", href: "#" },
      { label: "Retirement Calculator", href: "#" },
      { label: "SIP Calculator", href: "#" },
      { label: "Mutual Fund Calculator", href: "#" },
      { label: "Lumpsum Calculator", href: "#" },
      { label: "SWP Calculator", href: "#" },
      { label: "FD Calculator", href: "#" },
      { label: "RD Calculator", href: "#" },
      { label: "GST Calculator", href: "#" },
      { label: "Compound Interest Calculator", href: "#" },
      { label: "Simple Interest Calculator", href: "#" },
      { label: "Educational Loan EMI Calculator", href: "#" },
      { label: "Finance App (Android)", href: "#" },
      { label: "Finance App (iOS)", href: "#" },
    ],
  },
];

// ─── Social Icons ─────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// ─── Investor Relations Content ───────────────────────────────────────────────
function InvestorRelationsContent() {
  const topLinks = [
    { label: "Home", href: "#" },
    { label: "Financials", href: "#" },
    { label: "Filings & Press Releases", href: "#" },
    { label: "News & Events", href: "#" },
    { label: "Corporate Governance", href: "#" },
    { label: "Resources", href: "#" },
  ];
  const boxLinks = [
    { label: "Investor Relations Contacts", href: "#" },
    { label: "Frequently Asked Questions", href: "#" },
  ];
  return (
    <div className="pb-6 pl-9 pr-4 space-y-5">
      {/* 6-column top links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-4">
        {topLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-150"
          >
            {item.label}
          </a>
        ))}
      </div>
      {/* Bordered box with bold links */}
      <div className="border border-gray-200 rounded-xl px-6 py-5 flex flex-wrap gap-x-16 gap-y-3">
        {boxLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors duration-150"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Accordion Row ────────────────────────────────────────────────────────────
function AccordionRow({
  section,
  isOpen,
  onToggle,
}: {
  section: FooterSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      {section.careerLink ? (
        <a
          href={section.careerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center py-5 text-left"
        >
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: "#4a4a4a", marginLeft: "26px" }}
          >
            {section.title}
          </span>
        </a>
      ) : (
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-3 py-5 text-left"
          aria-expanded={isOpen}
        >
          {section.expandable && (
            <span
              className="text-gray-400 text-lg leading-none select-none"
              style={{
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                display: "inline-block",
                transition: "transform 0.3s ease",
              }}
            >
              +
            </span>
          )}
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: "#4a4a4a", marginLeft: section.expandable ? "0" : "26px" }}
          >
            {section.title}
          </span>
        </button>
      )}

      <div
        style={{
          maxHeight: isOpen ? (section.richContent ? "3000px" : "500px") : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        {section.investorContent ? (
          <InvestorRelationsContent />
        ) : section.richContent ? (
          <MoreAboutPaytmContent />
        ) : section.companyContent ? (
          <div className="pb-6 pl-9 pr-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-4">
              {section.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-150 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <ul className="pb-5 pl-9 space-y-3">
            {section.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href || "#"}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────
export default function PaytmFooter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-4">
        {footerSections.map((section, index) => (
          <AccordionRow
            key={section.title}
            section={section}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2026 Paytm</p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 mr-1">Follow Us</span>
            {[
              { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com/paytm" },
              { icon: <XIcon />, label: "X (Twitter)", href: "https://x.com/paytm" },
              { icon: <YouTubeIcon />, label: "YouTube", href: "https://youtube.com/@paytm" },
              { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com/company/paytm" },
              { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com/paytm" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}