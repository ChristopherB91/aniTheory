import { Homepage } from "./pages/homepage";
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Posts } from "./pages/post";
import { ErrorPage } from "./pages/errorpage";
import { Contact } from "./pages/contact";
import { PostProvider } from "./context/postsProvider";
import { Favorite } from "./pages/favorites";
import { TheoryDisplay } from "./pages/theory";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/posts", element: <Posts /> },
        { path: "/contact", element: <Contact /> },
        { path: "/favorite", element: <Favorite /> },
        { path: "/theory", element: <TheoryDisplay /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <div className="m-0 p-0 h-full box-border flex flex-col">
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </div>
    </>
  );
}

export default App;
