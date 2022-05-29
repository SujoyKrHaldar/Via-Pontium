const data = [
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
];

function ServiceList() {
  return (
    <>
      <div className="container py-[4rem]  ">
        <p className="mb-4 max-w-sm">
          According to the key skills present in our team members, we can
          deliver the following consultancy services.
        </p>

        <h2 className="mb-8 max-w-lg">
          Erection & launching scheme design for different types of bridges.
        </h2>

        <div className="flex items-center justify-start gap-2 flex-wrap max-w-2xl">
          {data.map((d, i) => (
            <p className="px-8 py-4 bg-[#5671bc] text-white text-sm" key={i}>
              {d.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceList;
