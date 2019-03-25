import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import Rule from "./components/rules/Rule";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <div className="app">
                  <NavBar />
                  <div className="app-container">
                     <div className="app-sidebar">
                        <Sidebar />
                     </div>
                     <div className="app-content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/rule" component={Rule} />
                     </div>
                  </div>
               </div>
            </Router>
         </Provider>
      );
   }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
