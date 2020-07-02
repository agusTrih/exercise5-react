import React, { Component } from "react";

export default class CounterClass extends Component {
    state = {
        value: 0,
    };
    handlePlus = () => {
        this.setState({
            value: this.state.value + 1,
        });
    };
    handleMinus = () => {
        if (this.state.value > 0) {
            this.setState({
                value: this.state.value - 1,
            });
        } else {
            alert("gaboleh minus yahh");
        }
    };
    handleReset = () => {
        this.setState({
            value: 0,
        });
    };
    render() {
        return (
            <div className="">
                <div className="count">Count = {this.state.value}</div>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>
                        -
                    </button>
                    <button className="plus" onClick={this.handlePlus}>
                        +
                    </button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}
