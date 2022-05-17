import { useState } from "react";
import Image from "next/image";

function Landing() {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <div className={`w-full h-[55vh]`}>
        <Image
          alt="Landing Image"
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
          className={`duration-700 ease-in-out group-hover:opacity-75 
              ${isLoading ? " opacity-0" : " opacity-100"}`}
          onLoadingComplete={() => setLoading(false)}
        />

        <div className="container w-full h-full flex items-end justify-start">
          <div className=" text-white py-12">
            <p className=" font-bold">Careers</p>
            <h1>We are looking for the best</h1>
          </div>
        </div>
      </div>

      <div className="container py-12 w-full h-full flex items-start justify-between">
        <div className="max-w-lg  ">
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
          </p>
        </div>

        <div className="text-right  text-zinc-400">
          <p className="mb-2 text-sm">Apply Job</p>
          <p className="mb-2 text-sm">Send Resume</p>
          <p className="text-sm">Reffer a Friend</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
