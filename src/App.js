import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counterArray: [
      { value: 1, key: 1, selected: true },
      { value: 2, key: 2, selected: false },
      { value: 3, key: 3, selected: false },
      { value: 4, key: 4, selected: false }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counterArray.filter(c => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counterArray={this.state.counterArray}
            handleReset={this.handleReset}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    const counters = this.state.counterArray.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counterArray: counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counterArray];
    counters[counters.indexOf(counter)].value++;
    this.setState({ counterArray: counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counterArray];
    if (counters[counters.indexOf(counter)].value > 0) {
      counters[counters.indexOf(counter)].value--;
    }

    this.setState({ counterArray: counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counterArray.filter(c => c.key !== counterId);
    this.setState({ counterArray: counters });
  };
}

export default App;
