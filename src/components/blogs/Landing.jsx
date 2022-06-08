import LandingTemplate from "../designs/template/LandingTemplate";

function Landing() {
  return (
    <>
      <LandingTemplate src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
        <div className="text-white">
          <p className=" font-bold">Blogs</p>
          <h1>Read our blogs</h1>
        </div>
      </LandingTemplate>
    </>
  );
}

export default Landing;
