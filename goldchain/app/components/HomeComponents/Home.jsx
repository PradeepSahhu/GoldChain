"use client";
import Animation from "../Animation/Animation";

export default function Homescreen() {
  return (
    <div className="flex justify-start font-myFont">
      <div className="inline-grid items-center">
        <p className="text-[5rem] text-gray-600 ">Welcome to Goldchain</p>
      </div>
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
