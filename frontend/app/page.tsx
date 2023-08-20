"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./globalRedux/Features/counter/counterSlice";
import { RootState } from "./globalRedux/store";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="text-center flex justify-center items-center flex-col p-8 ">
      <h1>It is a great counter app</h1>
      <p>Count: {count}</p>
      <button className="button-style" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="button-style" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        className="button-style"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment By Five
      </button>
    </div>
  );
};

export default Home;
