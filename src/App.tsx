import React from "react";
import { connect } from "react-redux";

import { AppState } from "./store";
import { counterAdd, counterDown } from "./store/actions";

import "./App.css";

const mapStateToProps = (state: AppState) => {
  return {
    counter: state.counter
  };
};

interface IProps {
  counter: number;
  counterAdd: typeof counterAdd;
  counterDown: typeof counterDown;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { counter, counterAdd, counterDown } = props;

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={counterAdd}>点击 加一</button>
      <button onClick={counterDown}>点击 减一</button>
    </div>
  );
};

export default connect(mapStateToProps, {
  counterAdd,
  counterDown
})(App);
