import React from "react";
import { Route, Routes, HashRouter } from 'react-router-dom';
import "./App.css";
import Home from "./home/Home";
import OptionsPage from "./optionsPage/OptionsPage";
import SolvePattern from "./solvePattern/SolvePattern";

function App() {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/solve" element={<OptionsPage></OptionsPage>}></Route>
                <Route path="/solve/pattern" element={<SolvePattern></SolvePattern>}></Route>
            </Routes>
        </HashRouter>
    )
}

export default App;