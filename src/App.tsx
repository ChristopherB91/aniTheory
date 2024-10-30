import { Homepage } from "./pages/homepage";
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./pages/post";
import { ErrorPage } from "./pages/errorpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/post",
      element: <Posts />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
