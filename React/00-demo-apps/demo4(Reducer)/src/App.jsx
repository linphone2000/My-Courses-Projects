import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + action.payload };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - action.payload };
  }
  return state;
};

function App() {
  const [counterState, counterDispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {counterState.count}
      <button
        onClick={() => counterDispatch({ type: "INCREMENT", payload: 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => counterDispatch({ type: "DECREMENT", payload: 1 })}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
