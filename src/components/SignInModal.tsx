"use client";

import { useState } from "react";
import Image from "next/image";
import { User, X } from "lucide-react";

export default function SignInModal() {
  const [showModal, setShowModal] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleClick = () => {
    if (showModal) return;

    setShowModal(true);
    setShowQR(false);

    setTimeout(() => {
      setShowQR(true);
    }, 2000);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowQR(false);
  };

  return (
    <>
      {/* Sign In Button */}
      <button
        onClick={handleClick}
        className="flex items-center bg-[#002970] rounded-full pl-1 pr-5 py-1 hover:bg-[#003a8c] transition"
      >
        <div className="w-10 h-10 rounded-full bg-[#00BAF2] flex items-center justify-center">
          <User
            size={20}
            strokeWidth={2.5}
            className="text-white"
          />
        </div>

        <span className="ml-3 text-white font-semibold text-[16px] whitespace-nowrap">
          Sign In
        </span>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-[760px] rounded-3xl bg-white p-8">

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
            >
              <X size={18} />
            </button>

            {/* Heading */}
            <h2 className="text-center text-2xl font-bold text-[#002970] md:text-4xl">
              Login with your Paytm account
            </h2>

            {/* QR Section */}
            <div className="mt-8 rounded-3xl bg-[#f5f8fc] p-8">
              <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

                {/* Left */}
                <div>
                  <h3 className="mb-6 text-2xl font-bold">
                    Steps to scan QR Code
                  </h3>

                  <ol className="space-y-5 text-lg text-gray-700">
                    <li>
                      <span className="mr-2 font-bold">1.</span>
                      Open Paytm App
                    </li>

                    <li>
                      <span className="mr-2 font-bold">2.</span>
                      Tap Scan option available at the bottom
                    </li>

                    <li>
                      <span className="mr-2 font-bold">3.</span>
                      Point Paytm Scan at QR Code to login
                    </li>
                  </ol>
                </div>

                {/* Right */}
                <div className="flex h-[260px] w-[260px] items-center justify-center rounded-2xl bg-white shadow-md">
                  {!showQR ? (
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#00BAF2] border-t-transparent" />

                      <p className="mt-4 font-medium text-gray-500">
                        Loading QR Code...
                      </p>
                    </div>
                  ) : (
                    <Image
                      src="/images/Q-code.png"
                      alt="QR Code"
                      width={220}
                      height={220}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Terms */}
            <p className="mt-8 text-gray-600">
              By signing in, you agree to our{" "}
              <span className="cursor-pointer font-semibold text-[#00BAF2]">
                privacy policy
              </span>{" "}
              and{" "}
              <span className="cursor-pointer font-semibold text-[#00BAF2]">
                terms of use
              </span>
            </p>

            {/* Footer */}
            <div className="mt-8 border-t pt-8">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <p className="text-lg font-medium text-gray-700">
                  To create an account download Paytm App
                </p>

            
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}