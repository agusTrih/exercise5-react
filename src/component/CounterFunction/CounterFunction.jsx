import React, { useState } from "react";
import "./counterFunction.css";
function CounterFunction() {
    const [value, setValue] = useState(0);
    // line bawah fungsi
    const handlePlus = () => {
        setValue(value + 1);
    };
    const handleMinus = () => {
        if (value > 0) {
            setValue(value - 1);
        } else {
            alert("gaboleh minus");
        }
    };
    const handleReset = () => {
        setValue(0);
    };
    return (
        <div className="styling">
            <div className="count">{value}</div>
            <div className="counter">
                <button className="minus" onClick={handleMinus}>
                    -
                </button>
                <button className="plus" onClick={handlePlus}>
                    +
                </button>
                <button className="Reset" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CounterFunction;
