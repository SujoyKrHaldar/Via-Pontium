import Link from "next/link";
import ServiceList from "./components/ServiceList";

const data = [
  {
    name: " Erection & launching scheme design for different types of bridges.",
    details: [
      {
        name: "Detailed Engineering",
      },
      {
        name: "Steel Bridges",
      },
      {
        name: "Concrete Bridges",
      },
      {
        name: "Truss / Bow-String type bridges",
      },
      {
        name: "Cantilever type erection for series of Truss bridges",
      },
      {
        name: "Temporary staging & other false work design at the time of Launching-Erection",
      },
      {
        name: "Other varies types of Launching schemes",
      },
    ],
  },
  {
    name: " Assessment, restoration and rehabilitation.",
    details: [
      {
        name: "Detailed Engineering",
      },
      {
        name: "Repair Design",
      },
      {
        name: "Bridge Strengthening",
      },
      {
        name: "Site naked eye investigation",
      },
      {
        name: "Analysis of distressed structures",
      },
      {
        name: "Existing bridge assessment for heavier loads",
      },
      {
        name: "Proposal of repair/restoration measures",
      },
      {
        name: "Inventory and condition assessment of pavement",
      },
      {
        name: "Inventory and condition assessment of bridges",
      },
    ],
  },
  {
    name: " Bridge engineering.",
    details: [
      {
        name: "Detailed & Pre-tender engineering",
      },
      {
        name: " Value & Lender Engineering",
      },
      {
        name: "Bridge Strengthening",
      },
      {
        name: "Site naked eye investigation",
      },
      {
        name: "Analysis of distressed structures",
      },
      {
        name: "Existing bridge assessment for heavier loads",
      },
      {
        name: "Proposal of repair/restoration measures",
      },
      {
        name: "Inventory and condition assessment of pavement",
      },
      {
        name: "Inventory and condition assessment of bridges",
      },
    ],
  },
];

function Landing() {
  return (
    <>
      <div className="py-[8rem] bg-white">
        <div className="container py-[4rem] text-center">
          <p className="font-semibold text-[#475dc1]">What we do the best</p>
          <h1 className="max-w-3xl mx-auto text-5xl mb-4 leading-[3.5rem]">
            Start your <span className="text-[#475dc1]">Next Project</span> with
            proper <span className="text-[#f16c59]">Research</span>.
          </h1>
          <p>And let us help you reach your goals.</p>

          <ServiceList data={data} />

          <h2 className="mt-12">Do you have any Project in mind?</h2>
          <Link href="/contat">
            <a className="btn bg-black text-white mt-8">Lets talk</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
