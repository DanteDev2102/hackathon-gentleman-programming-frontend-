import { useState } from "react";

import Router from "./router/Router";
import { Login } from "./page/Login";
import { Register } from "./page/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
