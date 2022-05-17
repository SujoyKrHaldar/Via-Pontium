import Footer_FollowUS from "./Footer_FollowUS";

function Footer_BottomSection() {
  return (
    <div className="flex items-center justify-between pt-4 mt-6 border-t-2 border-[#363636]">
      <p>
        Copyright ©{new Date().getFullYear()} Via Pontium engineering service -
        All rights reserved.
      </p>

      <Footer_FollowUS />
    </div>
  );
}

export default Footer_BottomSection;
