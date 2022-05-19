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
            <h1>
              Welcome to the next chapter in the construction. Welcome to Via
              Pontium.
            </h1>
            <p>
              You are actually contructing what your head understand about What
              Your Eyes Saw....
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
