import Navbar from "./components/Navbar";
import Animation from "./components/Animation/Animation";
import Homescreen from "./components/HomeComponents/Home";

export default function Home() {
  return (
    <div className="font-myFont">
      <Navbar />

      <div className="">
        <div className="relative left-56">
          <Homescreen />
        </div>
      </div>
    </div>
  );
}

//https://lottie.host/634d3c3f-94d7-4370-a3d8-d3e5719a1f7d/9IuDJRRQFy.json
