import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isSubmitted: false,
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  handleLeaveInput = () => {
    this.setState({ isSubmitted: false });
  };

  render() {
    return (
      <div>
        <div className="input-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              onBlur={this.handleLeaveInput}
              value={this.state.value}
            />
          </form>
        </div>

        <div className={this.state.isSubmitted ? "submitted" : "output"}>
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default App;
