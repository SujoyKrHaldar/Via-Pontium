import Container from "../../layout/Container";
import BackgroundImage from "../others/BackgroundImage";

function LandingTemplate({ children, src, position, height }) {
  return (
    <>
      <div className={`w-full ${height || "h-[55vh]"}`}>
        <BackgroundImage
          alt="Landing Image"
          position={position || "50% 50%"}
          src={src}
        />
        <Container className="w-full h-full flex items-end justify-start">
          <div className="py-12 max-w-xl">{children}</div>
        </Container>
      </div>
    </>
  );
}

export default LandingTemplate;
