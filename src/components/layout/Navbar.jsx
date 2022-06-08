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
      <div
        className="absolute w-full h-[85px] top-0 z-[10] text-black bg-white 
        flex items-center"
      >
        <div className="container h-full w-full flex items-center justify-between gap-4 ">
          <div className="flex items-center justify-start gap-12">
            <Link href="/">
              <div className="w-[100px] h-[70px] cursor-pointer py-4">
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
                className={` font-semibold px-8 py-3 text-sm rounded-none bg-[#475dc1] text-white ${
                  router.pathname == "/contact" ? "" : ""
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
