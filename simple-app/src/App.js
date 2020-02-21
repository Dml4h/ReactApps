import React from "react";
import logo from "./assests/colors.jpg";
import HelloWorld from "./components/Hello";
import ActionButton from "./components/ActionButtion";
import {Layout} from "./components/Layout";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <ActionButton />
        <Layout />
      </header>
    </div>
  );
}
//ReactDOM.render(<Hello/>, document.getElementById('root'));
