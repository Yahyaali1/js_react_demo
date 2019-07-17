import React, { Component } from "react";
import Counter from "./counter";
import "../App.css";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={this.props.handleReset}
        >
          Reset
        </button>
        <div className="row rowApps">
          {this.props.counterArray.map((counter, index) => (
            <Counter
              key={counter.key}
              counter={counter}
              onDelete={this.props.handleDelete}
              handleIncrement={this.props.handleIncrement}
              handleDecrement={this.props.handleDecrement}
            >
              <h4> Counter #{counter.key}</h4>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
