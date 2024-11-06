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
    <>
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
        />
        <button
          type="submit"
          className="peer-focus:visible invisible border-red-600 border-solid border-2 text-xs text-white w-3/12 sm:text-base sm:w-1/12"
        >
          Post
        </button>
      </form>
      {comments.map((comment, index) => (
        <div className="text-red-600" key={index}>
          {comment}
        </div>
      ))}
    </>
  );
};
