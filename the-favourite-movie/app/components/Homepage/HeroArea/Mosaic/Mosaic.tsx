import { useLoaderData } from "@remix-run/react";
import { FirstImage } from "./Images/FirstImage/FirstImage";
import { SecondImage } from "./Images/SecondImage/SecondImage";
import { ThirdImage } from "./Images/ThirdImage/ThirdImage";
import { FourthImage } from "./Images/FourthImage/FourthImage";
import { FifthImage } from "./Images/FifthImage/FifthImage";

export const Mosaic = () => {
  const { highlight } = useLoaderData();
  const movies = highlight?.Search;

  return (
    <>
      {movies && (
        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
          <FirstImage image={movies[0]?.Poster} />
          <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
            <SecondImage image={movies[1]?.Poster} />
            <ThirdImage image={movies[2]?.Poster} />
          </div>
          <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <FourthImage image={movies[3]?.Poster} />
            <FifthImage image={movies[4]?.Poster} />
          </div>
        </div>
      )}
    </>
  );
};
