import BackgroundImage from "../designs/others/BackgroundImage";
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
      <div className="container py-[8rem] bg-[#f8f8f8] flex items-center justify-evenly gap-8 ">
        <div className="flex-1">
          <ServiceContent data={data} />
        </div>

        <div className="flex-1">
          <div className="max-w-md mx-auto h-[600px]">
            <BackgroundImage
              alt="Landing Image"
              src="https://images.unsplash.com/photo-1565789589618-b2fb0ac8ffad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpZGdlJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
