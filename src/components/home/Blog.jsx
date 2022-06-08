import Link from "next/link";
import CardBlogY from "../designs/cards/CardBlogY";

function Blog({ data }) {
  return (
    <>
      <div className="bg-[#f8f8f8] py-[8rem] ">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p>Blog</p>
              <h2>
                Latest <span className="font-bold">Posts</span>
              </h2>
            </div>

            <Link href="/blogs">
              <a className="btn bg-black text-white font-semibold">
                View other {data.length - 3} posts
              </a>
            </Link>
          </div>

          <div className="mt-8 flex items-start gap-4 justify-start flex-wrap">
            {data.slice(0, 3).map((item) => (
              <CardBlogY data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
