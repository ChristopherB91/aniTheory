import { useContext } from "react";
import { PostContext } from "../context/posts";
import { CommentSection } from "../components/comment";
import starU from "../assets/starNotFavorite.svg";
import starF from "../assets/starFavorite.svg";

export const TheoryDisplay = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("null");
  }
  const { display } = context;
  return (
    <div className="flex flex-grow items-center justify-between flex-col">
      <div className="text-red-600 text-wrap text-center items-center justify-center mt-5 w-10/12 border-solid border-2 border-red-600 md:w-2/4">
        <div className="flex text-center items-center justify-around text-xl flex-col border-solid border-b-4 border-red-600 sm:flex-row sm:border-none sm:text-3xl">
          <img
            src={display?.profilePic}
            alt="profilePic"
            className="rounded-full h-28 max-w-full"
          />
          <h1>{display?.title}</h1>
          <img
            src={display?.favorite ? starU : starF}
            alt="star favorite/unfavorite"
            className="w-14 sm:w-auto"
          />
        </div>
        <p className="text-lg">{display?.body}</p>
      </div>
      <CommentSection />
    </div>
  );
};
