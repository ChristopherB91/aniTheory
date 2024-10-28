import { Homepage } from "./pages/homepage";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <Homepage />
      </div>
    </>
  );
}

export default App;
