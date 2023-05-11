import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Background from "./components/Background/Background";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import "./App.css";


const Search = lazy(() => import("./Pages/Search/Search"));
const Pokemon = lazy(
  () => import("./Pages/PokemonDetailsPage/PokemonDetailsPage")
);
function App() {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen object-fill ">
      <Header />
      <Background />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <div className="flex flex-wrap z-10 justify-center object-fill min-w-min overflow-scroll backdrop-opacity-60  h-screen w-5/6 bg-white align-middle   bg-white/30">
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
