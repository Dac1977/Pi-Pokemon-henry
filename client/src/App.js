import React from "react";
import "./App.css";
import { Home, Landing, Detail, Form } from "./views";
//import DetailName from "./views/DetailName/DetailName";
import { Route } from "react-router-dom";
//import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname !== "/" && <NavBar />} */}

      {/* <h1>Henry Pokemon</h1> */}
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/detail/:id">
        <Detail />
      </Route>
      {/* <Route path="/detailname/:name">
        <DetailName />
      </Route> */}
    </div>
  );
}

export default App;
