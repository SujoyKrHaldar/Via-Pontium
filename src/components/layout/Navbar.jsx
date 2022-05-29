import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import Navbar_Desktop from "./components/navbar/Navbar_Desktop";
import Navbar_Mobile from "./components/navbar/Navbar_Mobile";

const navLinks = [
  {
    link: "Home",
    url: "/",
  },
  {
    link: "Service",
    url: "/services",
  },
  {
    link: "Project",
    url: "/projects",
  },
  {
    link: "Blog",
    url: "/blogs",
  },

  {
    link: "About",
    url: "/about",
  },

  {
    link: "Career",
    url: "/careers",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const openModel = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="absolute w-full top-0 z-[10] text-black bg-white border-b-[1px] border-[#ffffff1a]">
        <div className="container flex items-center justify-between gap-4 ">
          <div className="flex items-center justify-start gap-4">
            <Link href="/">
              <div className="w-[40px] cursor-pointer py-4">
                <Image
                  src="/logo.png"
                  alt="Via Pontium logo"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                  loading="eager"
                />
              </div>
            </Link>

            <Navbar_Desktop navLinks={navLinks} />
          </div>

          <div className="flex items-center justify-between gap-8">
            <Link href="/contact">
              <a
                className={`py-4 btn bg-white text-black ${
                  router.pathname == "/contact"
                    ? "before:absolute before:bottom-[-9px] before:left-0 before:bg-white before:w-full before:h-[2px]"
                    : ""
                }`}
              >
                Contact
              </a>
            </Link>

            <div
              onClick={openModel}
              className="md:hidden flex text-3xl cursor-pointer"
            >
              <FiMenu />
            </div>
          </div>
        </div>
      </div>

      <Navbar_Mobile navLinks={navLinks} open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
