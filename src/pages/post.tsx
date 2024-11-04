import starU from "../assets/starNotFavorite.svg";
import starF from "../assets/starFavorite.svg";
import { useContext } from "react";
import { PostContext } from "../context/posts";

export const Posts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("null");
  }

  const { posts, toggleFavorite } = context;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 flex-grow sm:gap-5">
      {posts.map((post, index) => {
        return (
          <div
            className="flex text-wrap text-center flex-col items-center text-xl justify-center sm:flex-row sm:justify-between sm:text-3xl"
            key={index}
          >
            <img
              src={post.profilePic}
              alt="profile icon"
              className="rounded-full h-44 max-w-full"
            />
            <h1 className="text-red-600 font-bold">{post.title}</h1>
            <input
              type="image"
              className="w-16 sm:w-auto"
              src={post.favorite ? starU : starF}
              onClick={() => toggleFavorite(index)}
            />
          </div>
        );
      })}
    </div>
  );
};
