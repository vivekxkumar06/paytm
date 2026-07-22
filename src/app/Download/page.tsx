
"use client"
import React, { useState } from "react";
import {
  ChevronLeft,
  HelpCircle,
  Download,
  Share2,
  ScanLine,
  QrCode,
  Image as ImageIcon,
  Flashlight,
  ShieldCheck,
  Store,
} from "lucide-react";

/**
 * Paytm-style "Scan & Pay" / My QR Code page
 * -----------------------------------------------------------------------
 * Drop-in Next.js usage:
 *   1. Save as app/qr-code/page.jsx (or components/QrCodePage.jsx)
 *   2. Add "use client" at the very top of the file (uses useState)
 *   3. npm i lucide-react
 *   4. The QR itself is rendered via the free qrserver.com image API so
 *      it's a real, scannable code out of the box — no extra package
 *      needed. Swap `qrData` for the user's real UPI ID / VPA string.
 *      If you'd rather generate it fully client-side, swap the <img> for
 *      the `qrcode.react` package (`npm i qrcode.react`).
 * -----------------------------------------------------------------------
 */

const USER = {
  name: "Anand Kumar",
  upiId: "anandkumar@paytm",
};

const qrData = `upi://pay?pa=${USER.upiId}&pn=${encodeURIComponent(USER.name)}`;
const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=340x340&margin=8&data=${encodeURIComponent(
  qrData
)}`;

export default function QrCodePage() {
  const [tab, setTab] = useState("my-qr"); // "scan" | "my-qr" | "gallery"

  return (
    <div className="flex min-h-screen flex-col bg-[#012A72] text-white">
      {/* ---------------------------------------------------------- Header */}
      <header className="flex items-center justify-between px-4 py-4 sm:px-6">
        <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-base font-semibold">
          {tab === "scan" ? "Scan & Pay" : tab === "gallery" ? "Scan from Gallery" : "My QR Code"}
        </h1>
        <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10">
          <HelpCircle size={20} />
        </button>
      </header>

      {/* --------------------------------------------------------- Body */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-6 sm:px-6">
        {tab === "my-qr" && (
          <div className="w-full max-w-sm">
            <div className="rounded-3xl bg-white p-6 text-center text-gray-900 shadow-2xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9F5FE] text-xl font-bold text-[#012A72]">
                {USER.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <p className="text-base font-bold">{USER.name}</p>
              <p className="mb-5 text-sm text-gray-500">{USER.upiId}</p>

              <div className="mx-auto w-fit rounded-2xl border border-gray-100 p-3">
                <img
                  src={qrImage}
                  alt="Paytm QR code"
                  className="h-[220px] w-[220px] sm:h-[260px] sm:w-[260px]"
                />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Scan this QR using any UPI app to pay {USER.name.split(" ")[0]}
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-800">
                  <Download size={16} />
                  Download
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#012A72] py-3 text-sm font-semibold text-white">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-white/70">
              <ShieldCheck size={14} />
              Your QR code is unique and safe to share for receiving payments
            </p>
          </div>
        )}

        {tab === "scan" && (
          <div className="flex w-full max-w-sm flex-col items-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-white/20 bg-white/5 sm:h-80 sm:w-80">
              {/* corner brackets */}
              {[
                "top-4 left-4 border-t-4 border-l-4 rounded-tl-xl",
                "top-4 right-4 border-t-4 border-r-4 rounded-tr-xl",
                "bottom-4 left-4 border-b-4 border-l-4 rounded-bl-xl",
                "bottom-4 right-4 border-b-4 border-r-4 rounded-br-xl",
              ].map((pos, i) => (
                <span
                  key={i}
                  className={`absolute h-10 w-10 border-[#D7F84A] ${pos}`}
                />
              ))}
              <ScanLine className="text-white/40" size={48} />
            </div>
            <p className="mt-6 text-center text-sm text-white/80">
              Align the QR code within the frame to scan
            </p>
            <button className="mt-5 flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white">
              <Flashlight size={15} />
              Flash
            </button>
          </div>
        )}

        {tab === "gallery" && (
          <div className="flex w-full max-w-sm flex-col items-center text-center">
            <div className="flex h-56 w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/30">
              <div>
                <ImageIcon size={36} className="mx-auto mb-3 text-white/50" />
                <p className="text-sm text-white/70">Choose a QR image from your gallery</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-xl bg-[#D7F84A] py-3.5 text-sm font-bold text-gray-900">
              Browse Gallery
            </button>
          </div>
        )}
      </main>

      {/* ---------------------------------------------------- Trust strip */}
      {tab === "my-qr" && (
        <div className="flex items-center justify-center gap-2 pb-3 text-xs text-white/60">
          <Store size={13} />
          Accepted at 3.5+ crore stores across India
        </div>
      )}

      {/* -------------------------------------------------------- Tab bar */}
      <nav className="grid grid-cols-3 border-t border-white/10 bg-[#012A72] px-2 py-3">
        {[
          { id: "gallery", label: "Gallery", icon: ImageIcon },
          { id: "scan", label: "Scan", icon: ScanLine },
          { id: "my-qr", label: "My QR", icon: QrCode },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-medium ${
              tab === id ? "text-[#D7F84A]" : "text-white/60"
            }`}
          >
            <Icon size={20} strokeWidth={tab === id ? 2.25 : 1.75} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}