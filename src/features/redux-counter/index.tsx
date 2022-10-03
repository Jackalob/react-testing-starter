import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount, decrementByAmount } from "./counterSlice";

// follow official example folder structure

type IProps = {
  step?: number;
};

const ReduxCounter = ({ step = 1 }: IProps) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrementByAmount(step))}
      >
        -
      </button>
      <span style={{ marginLeft: "8px", marginRight: "8px" }}>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(step))}
      >
        +
      </button>
    </div>
  );
};

export default ReduxCounter;
