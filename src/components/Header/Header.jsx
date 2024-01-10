import React from "react";
import './Header.css'
import Visualizer from '../Visualizer/Visualizer.jsx'

function Header(){

    const reset = () => {
        Visualizer.resetArray();
    };

    return(<>
        <div className="buttons">
            <button onClick={reset}>New Array</button>
        </div>
    </>)
}

export default Header