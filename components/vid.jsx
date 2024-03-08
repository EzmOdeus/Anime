"use client";
import React from "react";
import YouTube from "react-youtube";

function Vid({ vide }) {
  console.log(`-------${vide.url}`);

  return (
    <>
      <YouTube
        loading="lazy"
        videoId={vide.url.slice(17)}
        iframeClassName="max-md:w-screen"
      />
    </>
  );
}

export default Vid;
