import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <nav> <NavBar /> </nav>
      <h1>Hello le monde</h1>
    </>
  );
}

export default App;
