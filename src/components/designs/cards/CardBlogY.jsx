import Link from "next/link";

function CardBlogY({ data, className = "" }) {
  return (
    <>
      <div className={`duration-300 ${className}`}>
        <div className="w-full h-[200px]">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Card image cap"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <p className="mb-2">20th Jan 2022</p>
          <p className="font-bold mb-4 text-xl max-w-sm">{data.title}.</p>
          <Link
            href="/blogs/[slug]"
            as={`/blogs/${data.title.replaceAll(" ", "-")}`}
          >
            <a className="">Read more</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardBlogY;
