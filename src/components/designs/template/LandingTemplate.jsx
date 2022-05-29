import BackgroundImage from "../others/BackgroundImage";

function LandingTemplate({ children, src, position, height }) {
  return (
    <>
      <div className={`w-full h-[${height || "55vh"}]`}>
        <BackgroundImage
          alt="Landing Image"
          position={position || "50% 50%"}
          src={src}
        />

        <div className="container w-full h-full flex items-end justify-start">
          <div className="py-12 max-w-xl">{children}</div>
        </div>
      </div>
    </>
  );
}

export default LandingTemplate;
