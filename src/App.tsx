import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./components/Background/Background";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";

const Search = lazy(() => import("./Pages/Search/Search"));
const Pokemon = lazy(
  () => import("./Pages/PokemonDetailsPage/PokemonDetailsPage")
);
function App() {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen object-fill ">
      <Background />
      <img src="../src/assets/logo.png" className=" z-20  h-20 w-48" />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <div
            className="flex z-10 justify-center object-fill min-w-min backdrop-opacity-60  h-5/6 w-5/6 bg-white align-middle   bg-white/30 no-scrollbar border-2 border-purple-600"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <Routes>
              <Route element={<Search />} path="/" />
              <Route element={<Pokemon />} path="/pokemon/:id"></Route>
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
