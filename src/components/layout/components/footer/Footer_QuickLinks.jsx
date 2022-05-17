import Link from "next/link";

const quickLinks = [
  {
    link: "Contribute Meterials",
    url: "/",
  },
  {
    link: "Become Volunteer",
    url: "/become-volunteer",
  },
  {
    link: "Make Donations",
    url: "/",
  },
  {
    link: "Annual Report",
    url: "/annual-reports",
  },
];

function Footer_QuickLinks() {
  return (
    <>
      <div className="flex-1 max-w-max">
        <p className="mb-2 text-xl font-extrabold text-white">Quick links</p>
        {quickLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a className="block hover:text-white duration-200">{links.link}</a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Footer_QuickLinks;
