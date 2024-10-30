import { Homepage } from "./pages/homepage";
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
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
