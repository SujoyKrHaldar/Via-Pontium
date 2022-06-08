import CardBlogY from "../designs/cards/CardBlogY";
import Container from "../layout/Container";

function List({ data }) {
  return (
    <>
      <div className="py-[8rem] bg-white">
        <Container className="flex items-start justify-start gap-4 flex-wrap">
          {data.slice(0, 6).map((item) => (
            <CardBlogY
              className=" flex-[1_1_300px] max-w-[376px] bg-black text-white  "
              data={item}
              key={item.id}
            />
          ))}
        </Container>
      </div>
    </>
  );
}

export default List;
