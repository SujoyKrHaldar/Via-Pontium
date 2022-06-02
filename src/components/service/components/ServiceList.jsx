import { MdArrowRight } from "react-icons/md";

function ServiceList({ data }) {
  return (
    <>
      <div className="flex items-start justify-center gap-8 flex-wrap mt-[6rem]">
        {data.map((d, i) => (
          <div
            key={i}
            className="group drop-shadow-xl bg-white border-2 border-transparent 
            duration-300 hover:border-[#5c78f5]
            flex-1 p-8 text-left even:translate-y-[-40px]"
          >
            <div className="max-w-lg">
              <p className="text-xl font-bold mb-4 group-hover:text-[#475dc1]">
                {d.name}
              </p>

              {d.details.map((dd, ii) => (
                <div
                  className="py-3 last:pb-0 last:border-b-0 border-b-[1px] border-[#cfcfcf] last:mb-0 max-w-xs font-medium flex items-center justify-start gap-4"
                  key={ii}
                >
                  <div className="flex items-center bg-white text-black p-[5px] ">
                    <MdArrowRight />
                  </div>
                  <p className="text-[#616161] group-hover:text-[#475dc1]">
                    {dd.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceList;
