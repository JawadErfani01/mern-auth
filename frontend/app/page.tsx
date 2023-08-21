"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./globalRedux/Features/counter/counterSlice";
import { RootState } from "./globalRedux/store";
import Link from "next/link";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="text-center flex justify-center items-center flex-col p-8 ">
      <h1 className="text-3xl">It is a great counter app</h1>
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
      <Link className="text-blue-500 text-lg border-b  m-5" href="/users">
        Users List
      </Link>
    </div>
  );
};

export default Home;
