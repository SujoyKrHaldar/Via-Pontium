import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";
import ObjectiveContent from "./components/ObjectiveContent";

function Objective() {
  return (
    <>
      <div className="py-[8rem] bg-[#f8f8f8]">
        <Container className="flex items-center justify-evenly gap-8">
          <div className="flex-1">
            <ObjectiveContent />
          </div>
          <div className="flex-1">
            <div className="max-w-md ml-auto h-[400px]">
              <BackgroundImage
                alt="Landing Image"
                src="https://images.unsplash.com/photo-1477288309209-a14ce05a641e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Objective;
