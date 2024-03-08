"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";

function Scroll(props) {
 
  return (
    <div
      className="bg-[#e01e1e85]  fixed bottom-0 right-5 rounded-full"
      onClick={() => {
        console.log("-----scroll");
      }}
    >
       <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  );
}

export default Scroll;
