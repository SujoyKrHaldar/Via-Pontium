import Link from "next/link";

function ServiceContent({ data }) {
  return (
    <>
      <div className="max-w-lg">
        <p>What we do</p>
        <h2 className="mb-4">
          We are a team of experienced professional in their specialities.
          Discover our services and adjust them to yourself.
        </h2>
        <p className="max-w-md mb-4">
          According to the key skills present in our team members, we can
          deliver the following consultancy services.
        </p>

        <div className="px-4 py-2">
          {data.map((d, i) => (
            <p className="mb-2 last:mb-0 max-w-xs font-medium" key={i}>
              {d.service}
            </p>
          ))}
        </div>

        <Link href="/contact">
          <a className="btn mt-8 bg-black text-white">Explore all services</a>
        </Link>
      </div>
    </>
  );
}

export default ServiceContent;
