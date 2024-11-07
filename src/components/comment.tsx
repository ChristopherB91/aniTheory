import { useState } from "react";

export const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const submit = (e: React.SyntheticEvent) => {
    setComments([...comments, newComment]);
    setNewComment("");
    e.preventDefault();
  };

  return (
    <div className=" border-solid border-red-600 border-2 w-10/12 rounded-t-2xl md:absolute md:bottom-0 lg:h-2/6 lg:w-2/4">
      <form
        onSubmit={(e) => submit(e)}
        className="w-full flex flex-col items-center"
      >
        <input
          type="text"
          className="peer font-custom bg-black text-center w-2/4 border-red-600 border-solid border-2 rounded-full focus:border-red-500 focus:border-solid focus:border-6 focus:text-left focus:text-white"
          placeholder="Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          aria-label="comment field"
        />
        <button
          type="submit"
          aria-label="Post comment button"
          className=" border-red-600 border-solid border-2 text-xs text-white w-3/12 sm:text-base sm:w-1/12"
        >
          Post
        </button>
      </form>
      {comments.map((comment, index) => (
        <div className="text-red-600 text-left" key={index}>
          {comment}
        </div>
      ))}
    </div>
  );
};
