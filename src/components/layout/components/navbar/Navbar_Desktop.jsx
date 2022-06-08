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
              className={`py-4 font-semibold text-sm hover:text-[#475dc1] duration-300 text-black ${
                router.pathname == links.url
                  ? "text-[#475dc1] before:absolute before:bottom-[-15px] before:left-0 before:bg-[#475dc1] before:w-full before:h-[4px]"
                  : " "
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
