import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./OptionsPage.css";
import {TopDesign, BottomDesign} from "../Design/Design";

function OptionsPage() {
    const navigate = useNavigate();
    const [mouseOverSolveFull, setMouseOverSolveFull] = useState(false);
    const [mouseOverSolvePattern, setMouseOverSolvePattern] = useState(false);

    function handleSolveForPattern() {
        navigate("/solve/pattern");
    }

    //implement the below function for onClick on solve full cube.
    function handleSolveFullCube() {
       
    }

    function handleMouseOver(setFunction) {
        setFunction((prev) => !prev);
    }

    return (
        <div className="optionsPage">
            <TopDesign></TopDesign>
            <h1>3 X 3 Rubiks cube solver</h1>
            <div className="container">
                <div className="optionBtns">
                    <button className="solveBtn" 
                            onClick={handleSolveFullCube} 
                            onMouseOver={() => handleMouseOver(setMouseOverSolveFull)} 
                            onMouseOut={() => handleMouseOver(setMouseOverSolveFull)}
                    >solve full cube</button>

                    <button className="solveBtn" 
                            onClick={handleSolveForPattern}
                            onMouseOver={() => handleMouseOver(setMouseOverSolvePattern)} 
                            onMouseOut={() => handleMouseOver(setMouseOverSolvePattern)}
                    >solve for pattern</button>
                </div>

                <div className="optionImgs">
                    {mouseOverSolveFull && <img  src={require("../images/rubik_cube1.png")} alt="rubiks-cube"></img>}
                    {mouseOverSolvePattern && <GridImg></GridImg>}
                </div>
            </div>
            <BottomDesign></BottomDesign>
        </div>
    )
}

function GridImg() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="gridImg">
            {arr.map((ele, index) => {
                return (
                    <img src={require(`../images/rubik_cube${1}.png`)} alt="rubiks" key={index}></img>
                )
            })} 
        </div>
    )
}

export default OptionsPage;