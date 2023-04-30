import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Background from "./components/Background/Background";
import { Suspense, lazy,useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
const Search = lazy(()=> import('./Pages/Search/Search'));
const Pokemon = lazy(()=>import("./Pages/Pokemon/Pokemon"))
function App() {
  
  return (
    <div className="main-container">
      <Header/>
      <Background/>
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <div className="app">
          <Routes>
            <Route element={<Search/>} path="/search"/>
            <Route element={<Pokemon/>} path="/pokemon/:id>"/>
          </Routes>
        </div>
          
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
