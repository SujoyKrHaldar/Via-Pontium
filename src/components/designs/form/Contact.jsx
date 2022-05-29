function Contact() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <h2 className="  mb-2">Get in touch</h2>

            <form action="">
              <div className="mb-6">
                <label className="block mb-2 " htmlFor="">
                  Email
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg  placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="email"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 " htmlFor="">
                  Email
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg  placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="email"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 " htmlFor="">
                  Password
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg  placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="password"
                />
              </div>

              <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
