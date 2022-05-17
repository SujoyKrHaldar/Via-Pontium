import Link from "next/link";

function CareerCard() {
  return (
    <>
      <div className="group bg-white">
        <div className="p-6 border-[1px] border-[#9f7d7389] duration-300 group-hover:border-[#9F7D73]">
          <p className="font-bold text-lg ">Senior Security analyst</p>
          <p className="text-sm mb-4">Kolkata</p>
          <p className="text-sm ">Want to join our team as Senior analyst...</p>
        </div>

        <div className="flex justify-between gap-0 items-center">
          <Link href="/careers">
            <a
              className="flex-1  p-3 text-sm bg-[#9F7D73] hover:bg-[#988179] duration-300 
            text-white text-center font-bold"
            >
              Apply now
            </a>
          </Link>

          <Link href="/careers">
            <a className="flex-1 p-3  text-sm bg-[#dee3e7] text-center font-bold">
              Share
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CareerCard;
