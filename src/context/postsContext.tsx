import { createContext } from "react";

interface post {
  profilePic: string;
  title: string;
  body: string;
  favorite: boolean;
}

interface PostContextType {
  posts: post[];
  display: post | undefined;
  toggleFavorite: (index: number) => void;
  displaying: (index: number) => void;
}

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);
