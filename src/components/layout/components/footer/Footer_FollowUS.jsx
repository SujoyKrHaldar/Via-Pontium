import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

function Footer_FollowUS() {
  return (
    <>
      <div className="flex items-center justify-start gap-2 text-2xl">
        <p>Follow us on :</p>
        <Link href="https://www.facebook.com/rangthengo/">
          <a
            target="_blank"
            className="flex text-white duration-200"
            title="facebook"
          >
            <AiFillFacebook />
          </a>
        </Link>

        <Link href="https://www.instagram.com/rang.welfare.foundation/">
          <a
            target="_blank"
            className="flex text-white duration-200"
            title="Instagram"
          >
            <AiFillInstagram />
          </a>
        </Link>
      </div>
    </>
  );
}

export default Footer_FollowUS;
