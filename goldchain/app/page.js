import Navbar from "./components/Navbar";
import Animation from "./components/Animation/Animation";
import Homescreen from "./components/HomeComponents/Home";

export default function Home() {
  return (
    <div className="font-myFon ">
      <Navbar />

      <div className="z-1">
        <div className="relative left-56">
          <Homescreen />
        </div>
      </div>
      <div class="left-56 flex justify-center z-0">
        <img className="opacity-30 w-full z-0" src="grid.svg" />
      </div>
    </div>
  );
}

//https://lottie.host/634d3c3f-94d7-4370-a3d8-d3e5719a1f7d/9IuDJRRQFy.json
