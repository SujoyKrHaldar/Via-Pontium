import Container from "../layout/Container";
import CardBlogY from "../designs/cards/CardBlogY";
import BlogContent from "./components/BlogContent";

function Blog({ data }) {
  return (
    <>
      <div className="bg-[#f8f8f8] py-[8rem] ">
        <Container>
          <BlogContent data={data} />

          <div className="mt-8 flex items-start gap-4 justify-start flex-wrap">
            {data.slice(0, 3).map((item) => (
              <CardBlogY data={item} key={item.id} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Blog;
