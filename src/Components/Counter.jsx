import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefense = this.handleDefense.bind(this);
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
    };
  }

  handleAttack = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((previousState) => {
      // Randomly generate a number between 1 and 10
      let newCount = previousState.count + Math.round(Math.random() * 10);

      return {
        count: newCount,
        lastPlay: "Attack",
        gameStatus: newCount >= 10 ? "You Won!" : "Game in Progress",
      };
    });
  };

  handleDefense = () => {
    // this.setState({ count: this.state.count - 1 });
    this.setState((previousState) => {
      // Randomly generate a number between 1 and 10
      let newCount = previousState.count - Math.round(Math.random() * 10);

      return {
        count: newCount,
        lastPlay: "Defense",
        gameStatus: newCount <= -10 ? "You Lost!" : "Game in Progress",
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefense();
    }
  };

  handleReset = () => {
    this.setState(() => {
      // Reset the count to 0
      return {
        count: 0,
        gameStatus: "",
        lastPlay: "",
      };
    });
  };

  render() {
    return (
      <div
        className="row text-white text-center"
        style={{ alignItems: "center" }}
      >
        <h1>Game Score: {this.state.count}</h1>
        <p>You win +10 points and lose at -10 points!</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <p>Game Status: {this.state.gameStatus}</p>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attack}
            alt=""
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3 ">
          <img
            src={defend}
            alt=""
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            onClick={this.handleDefense}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
