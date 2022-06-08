import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

function ServiceContent({ data }) {
  return (
    <>
      <div className="max-w-lg">
        <p className=" mb-2">What we do</p>
        <p className="font-bold text-2xl mb-4">
          We are a team of experienced professional in their specialities.
          Discover our services and adjust them to yourself.
        </p>
        <p className="max-w-md mb-4">
          According to the key skills present in our team members, we can
          deliver the following consultancy services.
        </p>

        <div className="px-4 py-2">
          {data.map((d, i) => (
            <div
              className="mb-2 last:mb-0 max-w-xs font-medium flex items-center justify-start gap-4"
              key={i}
            >
              <div className="flex items-center bg-[#dedede] text-black p-[4px] rounded-full">
                <MdArrowRight />
              </div>
              <p>{d.service}</p>
            </div>
          ))}
        </div>

        <Link href="/services">
          <a className="btn mt-8 bg-black text-white">Explore all services</a>
        </Link>
      </div>
    </>
  );
}

export default ServiceContent;
