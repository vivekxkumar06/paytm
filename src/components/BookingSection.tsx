import BookingCard from "./BookingCard";
import FlightBooking from "./FlightBooking";

export default function BookingSection() {
  return (
    <section className="bg-[#f5f7fa] py-6 sm:py-8 text-black">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 bg-white rounded-[30px] p-4 sm:p-6 shadow-sm">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <BookingCard />
          </div>

          <img
            src="/images/paytm1.png"
            alt="Paytm Travel"
            className="w-[120px] sm:w-[180px] object-contain self-end sm:self-auto"
          />
        </div>

        <div className="mt-4 border rounded-[24px] overflow-hidden overflow-x-auto">
          <FlightBooking />
        </div>
      </div>
    </section>
  );
}