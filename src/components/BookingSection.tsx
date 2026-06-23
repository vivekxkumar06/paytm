
import BookingCard from "./BookingCard";

import FlightBooking from "./FlightBooking";




export default function BookingSection() {
  return (
    <section className="bg-[#f5f7fa] py-8 text-black">
      <div className="max-w-[1450px] mx-auto bg-white rounded-[30px] p-6 shadow-sm">

       
        <div className="flex justify-between items-center">

         
          <div>
            <BookingCard />
          </div>

          <img
            src="/images/paytm1.png"
            alt="Paytm Travel"
            className="w-[180px] object-contain"
          />
        </div>

      
        <div className="mt-4 border rounded-[24px] overflow-hidden">
            <FlightBooking/>
          
        </div>
      </div>
    </section>
  );
}