import React from "react";
import Navbar from "./conponents/navbar/Navbar";
import Category from "./conponents/navbar/Category";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Category />
      </div>
    );
  }
}

export default App;
