import Navbar from "./components/Navbar";
import Animation from "./components/Animation/Animation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-end">
        <Animation
          url={
            "https://lottie.host/634d3c3f-94d7-4370-a3d8-d3e5719a1f7d/9IuDJRRQFy.json"
          }
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

//https://lottie.host/634d3c3f-94d7-4370-a3d8-d3e5719a1f7d/9IuDJRRQFy.json
