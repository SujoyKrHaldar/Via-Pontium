import Image from "next/image";
import { useState } from "react";

function Landing() {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className="h-screen w-full ">
        <div className="absolute inset-0 w-full h-full bg-gray-200">
          <Image
            alt="Landing Image"
            src="/assets/images/Home landing section.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={`duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>

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
