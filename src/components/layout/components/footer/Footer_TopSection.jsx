import Footer_Address from "./Footer_Address";
import Footer_Disclaimer from "./Footer_Disclaimer";
import Footer_QuickLinks from "./Footer_QuickLinks";

function Footer_TopSection() {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <Footer_Address />

        <div className="flex-1 flex items-start gap-8 justify-end">
          <Footer_QuickLinks />
          <Footer_Disclaimer />
        </div>
      </div>
    </>
  );
}

export default Footer_TopSection;
