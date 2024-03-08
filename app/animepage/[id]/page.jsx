import React from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import Vid from "@/components/vid";
const animebyid = async ({ params }) => {
  const res = await fetch(`https://shikimori.one/api/animes/${params.id}`);
  const anime = await res.json();
  // console.log(`-------${anime.videos.map((e) => e.url)}`);
  const vide = anime.videos[1];
  return (
    <>
      <div className="md:h-[89vh]">
        <div className="md:flex items-center  flex-row-reverse md:h-[50vh] ">
          <div className="pt-[5%]">
            <Vid vide={vide} />
          </div>
          <div className="w-[100%] p-6">
            <h2 className="font-bold text-6xl mb-3">{anime.name}</h2>
            <p className="text-2xl mb-3">{anime.kind}</p>
            <div className="flex mb-3">
              {anime.genres.map((e) => {
                return (
                  <p
                    key={anime.id}
                    className="p-1 mr-1   bg-amber-500 rounded-xl"
                  >
                    {e.name}
                  </p>
                );
              })}
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/episodes.svg"
                  alt="episodes"
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <p className=" text-white font-bold text-lg">
                  {anime.episodes || anime.episodes_aired}
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/star.svg"
                  alt="star"
                  width={23}
                  height={23}
                  className="object-contain"
                />
                <p className=" font-bold text-[#FFAD49] text-lg">
                  {anime.score}
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="p-6">
          <p className="text-xl mb-3">Descrption</p>
          <p>{anime.description}</p>
        </div>
      </div>
    </>
    // <div className="h-[90vh]">
    //   {anime.name}
    //   <div className="w-24">
    //     <Image
    //       src={`https://shikimori.one${data.image.original}`}
    //       alt={data.name}
    //       width={100}
    //       height={300}
    //       className="rounded-xl"
    //     />
    //     <iframe src={data.videos.url} frameborder="0"></iframe>
    //   </div>
    //   <p>{data.description}</p>
    // </div>
  );
};

export default animebyid;
