import Link from "next/link";

function BlogContent({ data }) {
  return (
    <>
      <div className="flex items-end justify-between">
        <div>
          <p>Blog</p>
          <h2>
            Latest <span className="font-bold">Posts</span>
          </h2>
        </div>

        <Link href="/blogs">
          <a className="btn bg-[#475dc1] text-white">
            View other {data.length - 3} posts
          </a>
        </Link>
      </div>
    </>
  );
}

export default BlogContent;
