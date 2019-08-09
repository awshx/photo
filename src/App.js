import React from 'react';
import './App.css';
import Title from "./title/index"
import Menu from "./menu/menu"
import { Route, Switch } from "react-router-dom";
import Home from "./home/home"
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Title/>
        <Home/>
        {/* <Switch>
        <Route exact path="/home" component={Home} />
        </Switch> */}
      </div>
    </div>
  );
}

export default App;
