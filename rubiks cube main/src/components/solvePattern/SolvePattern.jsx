import React, { useState } from "react"; 
import "./SolvePattern.css";
import {TopDesign, BottomDesign} from "../Design/Design";

function SolvePattern() {
    const [mouseOver, setMouseOver] = useState(false);
    const [shape, setShape] = useState(0);

    function handleMouseOver(e) {
        // className format of buttons here is - shape 1/shape 2/...
        if(mouseOver === false) {
            const s = e.target.className; // to get the className of the button on which the mouse is hovering
            setShape(parseInt(s[s.length - 1])); // to get the number of the button 
        }

        setMouseOver((prev) => !prev);  
    }
    
    return (
        <div className="solvePattern">
            <TopDesign></TopDesign>
            <div className="solvePatternBtns">
                <h1>Patterns</h1>
                
                    return (
                        <button className={`shape1`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Checker-1</button>
                        <button className={`shape2`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Checker-2</button>
                        <button className={`shape3`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Wire</button>
                        <button className={`shape4`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Cross</button>
                        <button className={`shape5`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Plus-Minus</button>
                        <button className={`shape6`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>4 Centers</button>
                        <button className={`shape7`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>6 Centers</button>
                        <button className={`shape8`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Six T's</button>
                        <button className={`shape9`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Tetris</button>
                    )
                )
            </div>

            <div className="solvePatternImgs">
                {mouseOver && <img src={require(`../images/rubik_cube${shape % 2 + 1}.png`)} alt=""></img>}
            </div>
            <BottomDesign></BottomDesign>
        </div>
    )
}

export default SolvePattern;