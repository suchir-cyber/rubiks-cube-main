import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";
import {TopDesign, BottomDesign} from "../Design/Design";

function LandingPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/solve");
    }

    return (
        <div className="home">
            <TopDesign></TopDesign>
            <div>
                <h1>Rubiks cube solver</h1>
                <button className="startNowBtn" onClick={handleClick}>start now</button>
            </div>
            <BottomDesign></BottomDesign>
        </div>
    )
}

export default LandingPage;