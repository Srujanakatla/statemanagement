import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment +</button>
        <button onClick={this.decrement}>Decrement -</button>
        <div>
        <ol type="A"> {/* Ordered list with capital letters */}
          <li><b>Srujana</b></li>
          <li><a href="#">Manasa</a></li>
          <li><strong>chandana</strong></li>
          <li><mark>Teja</mark></li>
          <li>soumya</li>
          <li>shymala</li>
        </ol>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Srujana</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Manasa</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Teja</td>
            </tr>
            <tr>
              <td>4</td>
              <td>katla</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counter;
