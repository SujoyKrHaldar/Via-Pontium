import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";
import AboutContent from "./components/AboutContent";

function AboutUs() {
  return (
    <>
      <div className="py-[8rem]">
        <Container className=" flex items-center justify-evenly gap-8">
          <div className="flex-1">
            <div className="max-w-md h-[600px]">
              <BackgroundImage
                alt="Landing Image"
                src="https://images.unsplash.com/photo-1615117156039-6a27220d7382?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJpZGdlJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
              />
            </div>
          </div>

          <div className="flex-1">
            <AboutContent />
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;
