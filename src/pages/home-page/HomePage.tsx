import React from "react";
import { VideoList } from "./components/VideoList";

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-black px-10 py-2 mt-4">
      <VideoList />
    </div>
  );
};
