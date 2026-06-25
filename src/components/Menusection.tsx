
import RechargeDropdown from "./RechargeDropdown";
import TicketDropdown from "./TicketDropdown";
import PaymentDropdown from "./PaymentDropdown";
import BusinessDropdown from "./BusinessDropdown";
import CompanyDropdown from "./CompanyDropdown";
import DownloadQR from "./DownloadQR";
import SignInModal from "./SignInModal";

export default function MenuSection() {
  return (
    <div className="flex items-center gap-8">
      <RechargeDropdown />

      <TicketDropdown />

      <PaymentDropdown />

      <BusinessDropdown />

      <CompanyDropdown />
      <DownloadQR />
      <SignInModal />
    </div>
  );
}