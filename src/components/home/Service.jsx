import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";
import ServiceContent from "./components/ServiceContent";

const data = [
  {
    service:
      "Erection & launching scheme design for different types of bridges.",
  },
  {
    service: "Assessment, restoration and rehabilitation.",
  },
  {
    service: "Bridge engineering.",
  },
];

function Service() {
  return (
    <>
      <div className="py-[8rem]">
        <Container className="flex items-center justify-evenly gap-8 ">
          <div className="flex-1">
            <div className="max-w-md  h-[550px]">
              <BackgroundImage
                alt="Landing Image"
                src="https://images.unsplash.com/photo-1565789589618-b2fb0ac8ffad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpZGdlJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
              />
            </div>
          </div>

          <div className="flex-1">
            <ServiceContent data={data} />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Service;
