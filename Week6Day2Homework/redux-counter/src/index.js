import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";

// Initial state
const initialState = {
  count: 0
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

// Store
const store = createStore(reducer);

// App inside index.js (as required)
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

// Render
const root = createRoot(document.getElementById("root"));
root.render(<App />);