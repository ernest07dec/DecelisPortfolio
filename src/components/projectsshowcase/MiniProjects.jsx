import React, { useState } from "react";

import Music from "../../assets/music.png";
import TicTacToe from "../../assets/tictactoe.png";
import HTA from "../../assets/hotelta.png";
import Kodeledger from "../../assets/Kodeledger.png";
import Koderesto from "../../assets/koderesto.png";
import Shopping from "../../assets/shoppinglist.png";

export const MiniProjects = () => {
  const [description, setDescription] = useState("");
  const miniDisplay = (e, miniTitle) => {
    switch (miniTitle) {
      case "HTA":
        e.target.innerHTML = `<p>Pure HTML & CSS Demo</p> <a target="_blank" href="https://brilliant-caramel-84c97a.netlify.app/">
        Link: brilliant-caramel-84c97a.netlify.app
      </a>`;
        break;
      case "TicTacToe":
        e.target.innerHTML = `<p>React and Logic Demo</p> <a target="_blank" href="https://codepen.io/Ernest-Fortune-Decelis/pen/mdQzXKp">
        Link: codepen.io/Ernest-Fortune-Decelis/pen/mdQzXKp
      </a> `;
        break;
      case "Kodeledger":
        e.target.innerHTML = `<p>Pure HTML & CSS Demo</p> <a target="_blank" href="https://velvety-donut-f880b6.netlify.app/">
        Link: velvety-donut-f880b6.netlify.app
      </a> `;
        break;
      case "KodeResto":
        e.target.innerHTML = `<p>Bootstrap Demo</p> <a target="_blank" href="https://wondrous-gaufre-72bbe8.netlify.app/">
        Link: wondrous-gaufre-72bbe8.netlify.app
      </a> `;
        break;
      case "Music":
        e.target.innerHTML = `<p>Pure HTML & CSS plus API interaction Demo</p> <a target="_blank" href="https://codepen.io/Ernest-Fortune-Decelis/pen/wvQYGXY">
        Link: codepen.io/Ernest-Fortune-Decelis/pen/wvQYGXY
      </a> `;
        break;
      case "ShoppingList":
        e.target.innerHTML = `<p>Javascript Fundamentals Demo</p> <a target="_blank" href="https://elaborate-parfait-cec28e.netlify.app/">
        Link: elaborate-parfait-cec28e.netlify.app/
      </a> `;
        break;
    }
  };
  const clearMini = (e) => {
    e.target.innerHTML = "";
  };
  return (
    <div
      className="mx-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration="900"
    >
      <div>
        <div
          className=" grid w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover h-[260px]"
          style={{
            backgroundImage: `url(${HTA})`,
          }}
        >
          <div
            className="text-gray-200 h-[260px] grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg ease-in duration-300"
            onMouseEnter={(e) => miniDisplay(e, "HTA")}
            onMouseLeave={clearMini}
          ></div>
        </div>
        <h1 className="font-semibold text-2xl pt-5 pb-8">Hotel Team A</h1>
      </div>
      <div>
        <div
          className=" grid w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover h-[260px]"
          style={{
            backgroundImage: `url(${TicTacToe})`,
          }}
        >
          <div
            className="text-gray-900 h-[260px] grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg ease-in duration-300"
            onMouseEnter={(e) => miniDisplay(e, "TicTacToe")}
            onMouseLeave={clearMini}
          ></div>
        </div>
        <h1 className="font-semibold text-2xl pt-5 pb-8">TicTacToe</h1>
      </div>
      <div>
        <div
          className=" grid w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover h-[260px]"
          style={{
            backgroundImage: `url(${Kodeledger})`,
          }}
        >
          <div
            className="text-gray-100 h-[260px] grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg ease-in duration-300"
            onMouseEnter={(e) => miniDisplay(e, "Kodeledger")}
            onMouseLeave={clearMini}
          ></div>
        </div>
        <h1 className="font-semibold text-2xl pt-5 pb-8">Kodeledger</h1>
      </div>
      <div>
        <div
          className=" grid w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover h-[260px]"
          style={{
            backgroundImage: `url(${Koderesto})`,
          }}
        >
          <div
            className="text-gray-900 h-[260px] grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg ease-in duration-300"
            onMouseEnter={(e) => miniDisplay(e, "KodeResto")}
            onMouseLeave={clearMini}
          ></div>
        </div>
        <h1 className="font-semibold text-2xl pt-5 pb-8">KodeResto</h1>
      </div>
      <div>
        <div
          className=" grid w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover h-[260px]"
          style={{
            backgroundImage: `url(${Music})`,
          }}
        >
          <div
            className="text-gray-200 h-[260px] grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg ease-in duration-300"
            onMouseEnter={(e) => miniDisplay(e, "Music")}
            onMouseLeave={clearMini}
          ></div>
        </div>
        <h1 className="font-semibold text-2xl pt-5 pb-8">Music Preview</h1>
      </div>
      <div>
        <div
          className="w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover h-[260px]"
          style={{
            backgroundImage: `url(${Shopping})`,
          }}
        >
          <div
            className="text-gray-900 h-[260px] grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg ease-in duration-300"
            onMouseEnter={(e) => miniDisplay(e, "ShoppingList")}
            onMouseLeave={clearMini}
          >
            <p></p>
          </div>
        </div>
        <h1 className="font-semibold text-2xl pt-5 pb-8">Shopping List</h1>
      </div>
    </div>
  );
};
