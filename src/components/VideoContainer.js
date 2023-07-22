import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (videos.length === 0)? <Shimmer/>:(
    <div className="flex flex-wrap justify-around">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]}/> */}
    </div>
  );
};

export default VideoContainer;
