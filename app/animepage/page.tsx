
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../../components/LoadMore";
import Hero from "@/components/Hero";
import { fetchAnime } from "../action";
import Scroll from "@/components/scroll";


async function Home() {
 const data= await fetchAnime(1);

  return (
    <>
    <Scroll/>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-items-center">
          {data.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>
        <LoadMore />
      </main>
    </>
  );
}

export default Home;