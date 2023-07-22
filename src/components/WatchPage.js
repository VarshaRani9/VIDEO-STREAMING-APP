import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
// import Likes from "./Likes";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
//   console.log(searchParams.get("v"));

  // const params = useParams();
  // console.log(params);//empty because they are not params after / , they are search params

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
    <div className=" flex px-10 pt-3 w-full">
    <div className="">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className="w-full">
      <LiveChat/>
    </div>
    </div>
    <div className="w-[1100px]">
    <CommentsContainer/>
    </div>
    </div>
  );
};

export default WatchPage;
