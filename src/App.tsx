import { useState } from "react";

import "./App.css";
import { Login } from "./page/Login";
import { Register } from "./page/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
