import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Background from "./components/Background/Background";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import "./App.css";

const Search = lazy(() => import("./Pages/Search/Search"));
const Pokemon = lazy(
  () => import("./Pages/PokemonDetailsPage/PokemonDetailsPage")
);
function App() {
  return (
    <div
      className="relative flex flex-col justify-center items-center w-full h-full object-fill  overflow-clip
    "
      object-fill
    >
      <div className="absolute z-0 overflow-auto object-cover ">
        <Background />
      </div>
      <Header />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <div className="app flex flex-wrap z-10 justify-center align-middle">
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
