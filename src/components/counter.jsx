import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  styleButton = {
    margin: 10
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styleButton} className={this.classNameForBadge()}>
          {this.formatCounter()}
        </span>
        <button
          className="btn"
          onClick={() => {
            this.props.handleIncrement(this.props.counter);
          }}
        >
          +
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            this.props.handleDecrement(this.props.counter);
          }}
          style={this.styleButton}
        >
          -
        </button>
        <button
          className="btn btn-danger m2"
          onClick={() => {
            this.props.onDelete(this.props.counter.key);
          }}
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  formatListItems() {
    if (this.state.items.length == 0) return <p>There are not items in list</p>;
    return (
      <ul>
        {this.state.items.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    );
  }
  classNameForBadge() {
    let normalBadge = "badge badge-primary";
    let warningBadge = "badge badge-warning";
    const { value } = this.props.counter;
    return value === 0 ? warningBadge : normalBadge;
  }
  formatCounter() {
    const { value } = this.props.counter;
    let returnJsx = value === 0 ? "Zero" : value;
    return returnJsx;
  }
}

export default Counter;
