import BackgroundImage from "../designs/others/BackgroundImage";

function Landing() {
  return (
    <>
      <div className="h-[70vh] w-full ">
        <BackgroundImage
          alt="Landing Image"
          src="https://images.unsplash.com/photo-1621010967351-ccec7c4ccb50?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464"
        />

        <div className="container py-[5rem] text-white w-full h-full flex items-end justify-start">
          <div className="max-w-xl">
            <p className="font-semibold text-xl mb-1">
              Welcome to Via Pontium.
            </p>
            <h1>Welcome to the next chapter in the construction.</h1>

            <p className="max-w-sm mt-4">
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
