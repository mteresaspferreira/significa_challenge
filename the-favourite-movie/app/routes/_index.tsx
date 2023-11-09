import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import HeroArea from "~/components/Homepage/HeroArea/HeroArea";
import { InfoList } from "~/components/Homepage/InfoList/InfoList";
import List from "~/components/Homepage/List/List";
import { Footer } from "~/components/Layout/Footer/Footer";
import { Header } from "~/components/Layout/Header/Header";
import { Divider } from "~/components/UI/Divider/Divider";
import { getMovies } from "~/data/movies.server";

export const meta: MetaFunction = () => {
  return [
    { title: "The favourite movie" },
    { name: "A list of movies", content: "Welcome back, Significa!" },
  ];
};

export default function Index() {
  const movies = useLoaderData();
  console.log("movies ", movies);
  return (
    <>
      <Header />
      <main>
        <HeroArea />
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <InfoList />
            <Divider />
            <List />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function loader() {
  const movies = await getMovies("the favourite");
  console.log("movies ", movies);
  return movies;
}
