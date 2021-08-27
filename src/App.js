import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body1 from "./components/Body1/Body1";
import Body2 from "./components/Body2/Body2";

function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Body1} />
          <Route exact path="/one" component={Body1} />
          <Route exact path="/two" component={Body2} />
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;