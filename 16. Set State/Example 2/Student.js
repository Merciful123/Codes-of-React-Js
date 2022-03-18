import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rahul",
      roll: this.props.roll
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      console.log(props.roll);
    });
  };
  render() {
    return (
      <div>
        <h1>Hello GeekyShows</h1>
        <h1>
          Hello, {this.state.name} Your Roll Number is {this.state.roll}
        </h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Student;
