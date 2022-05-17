import Link from "next/link";
import { MdTipsAndUpdates } from "react-icons/md";

function CareerCard() {
  return (
    <>
      <div className="bg-[#e3cfc9]  p-6 duration-300 group border-[2px] border-[#e3cfc9] hover:border-[#9f7d73]">
        <div className="flex mb-4 text-3xl ">
          <MdTipsAndUpdates />
        </div>
        <p className="font-bold text-lg ">Senior Security analyst</p>
        <p className="text-sm mb-4">Kolkata</p>
        <p className="text-sm ">Want to join our team as Senior analyst...</p>

        <Link href="/careers">
          <a
            className="mt-4 text-sm  inline-block 
             font-bold"
          >
            Apply now
          </a>
        </Link>
      </div>
    </>
  );
}

export default CareerCard;
