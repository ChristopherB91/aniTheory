import { Homepage } from "./pages/homepage";
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Posts } from "./pages/post";
import { ErrorPage } from "./pages/errorpage";
import { Contact } from "./pages/contact";

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
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <div className="m-0 p-0 h-full box-border flex flex-col">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
