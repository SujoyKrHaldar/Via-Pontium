import Link from "next/link";
import { useRouter } from "next/router";

function Navbar_Desktop({ navLinks }) {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-8">
        {navLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a
              className={`py-4 font-semibold text-sm hover:text-black duration-300${
                router.pathname == links.url
                  ? "text-black before:absolute before:bottom-[-15px] before:left-0 before:bg-black before:w-full before:h-[4px]"
                  : " text-[#919191]"
              }`}
            >
              {links.link}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar_Desktop;
