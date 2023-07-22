import React from "react";

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
  <div className="p-2 m-1 h-80 w-72 shadow-lg">
    <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
    <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        <li></li>
    </ul>
  </div>
  )
};

export default VideoCard;
