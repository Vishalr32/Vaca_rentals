import React from "react";
import Home from "./Home";
import Result from "./Result";
import Itemdetails from "./Itemdetails";
import login from "./login";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={login}/>
        <Switch>
          <Route exact path="/0" component={Home} />
          <Route exact path="/result" component={Result} />
          <Route path="/result/:id" component={Itemdetails} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
