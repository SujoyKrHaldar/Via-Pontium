import Container from "../layout/Container";
import CardBlogY from "../designs/cards/CardBlogY";
import BlogContent from "./components/BlogContent";

function Blog({ data }) {
  return (
    <>
      <div className="bg-[#f8f8f8] py-20 ">
        <Container>
          <BlogContent data={data} />

          <div className="mt-8 grid grid-cols-4 gap-4">
            {data.slice(0, 4).map((item) => (
              <CardBlogY
                className="  bg-white hover:shadow-lg  "
                data={item}
                key={item.id}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Blog;
