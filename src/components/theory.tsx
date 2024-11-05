import { useContext } from "react";
import { PostContext } from "../context/posts";
import starU from "../assets/starNotFavorite.svg";
import starF from "../assets/starFavorite.svg";

export const TheoryDisplay = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("null");
  }
  const { display } = context;
  return (
    <div className="flex flex-grow">
      <div className="text-red-600 text-wrap text-center items-center text-xl justify-center sm:flex-row sm:justify-between sm:text-3xl">
        <div className="flex text-center items-center justify-around">
          <img
            src={display?.profilePic}
            alt="profilePic"
            className="rounded-full h-44 max-w-full"
          />
          <h1>{display?.title}</h1>
          <img
            src={display?.favorite ? starU : starF}
            alt="star favorite/unfavorite"
            className="w-14 sm:w-auto"
          />
        </div>
        {display?.body}
      </div>
    </div>
  );
};
