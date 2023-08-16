import React, { useEffect } from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { useState } from "react";

export const PageNotFound = () => {
  return (
    <AnimatedPage>
      <>
        <div className="h-screen w-screen flex justify-center items-center text-5xl text-gray-100 font-bold">
          <h1>Page Not Found</h1>
        </div>
      </>
    </AnimatedPage>
  );
};
