import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice";

function Counter() {
  //  react hook to call a function/ action inside a hook
  const dispatch = useDispatch();
  // hook to access state in component: useSelector()
  const count = useSelector((state) => state.counter?.value);
  const [range, setRange] = useState(1);

  console.log(range);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center w-100 flex-column">
        <h1 className="text-black" style={{ fontSize: "65px" }}>
          {count}
        </h1>
        <div className="mt-3">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(decrement(Number(range)))}
          >
            DECREMENT
          </button>
          <button
            className="btn btn-danger ms-3"
            onClick={() => {
              dispatch(reset());
              setRange(1);
            }}
          >
            RESET
          </button>
          <button
            className="btn btn-primary ms-3"
            onClick={() => dispatch(increment(Number(range)))}
          >
            INCREMENT
          </button>
        </div>
      </div>
      <div className="w-100">
        <label className="text-black  mt-3 ">Range:</label>
      <input
        type="number"
        className="form-control borderborder-primary w-100 mt-2"
        placeholder="Enter Range"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      />
      </div>
      
    </>
  );
}

export default Counter;
