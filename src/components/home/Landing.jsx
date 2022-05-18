import BackgroundImage from "../designs/others/BackgroundImage";

function Landing() {
  return (
    <>
      <div className="h-screen w-full ">
        <BackgroundImage
          alt="Landing Image"
          src="/assets/images/Home landing section.jpg"
        />

        <div className="container py-16 w-full h-full flex items-end justify-start">
          <div className="text-white max-w-2xl">
            <h1>Boost your marketing efforts with 11x growth initiatives</h1>
            <p>Disrupt markets, close deals!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
