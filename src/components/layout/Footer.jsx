import Footer_BottomSection from "./components/footer/Footer_BottomSection";
import Footer_TopSection from "./components/footer/Footer_TopSection";

function Footer() {
  return (
    <>
      <div className="bg-[#1a1a1a] text-[#929292] pb-6 pt-14 mt-auto">
        <div className="container">
          <Footer_TopSection />
          <Footer_BottomSection />
        </div>
      </div>
    </>
  );
}

export default Footer;
