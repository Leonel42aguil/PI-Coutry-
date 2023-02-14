import { Route } from "react-router-dom";
import style from "./App.module.css";
import { /*LandingPage,HomePage*/ Menu } from "./views/index.js";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Buscador from "./views/Buscador/Buscador";
import { useState } from "react";

function App() {
  // const location = useLocation()
  return (
    <div className={style.inicio}>
      {/* {location.pathname === '/' && <Menu /> } */}
      <Route exact path="/" component={Menu} />
      <Route
        path="/buscador"
        component={Buscador}
      />
      {/* <Route exact path='/homepage' component={()=><HomePage />}/> */}
    </div>
  );
}
//  {location.pathname !== '/' && <Home />}
//  <Home />
//  <Route exact path='/' component={LandingPage} />
//  <Route exact path='/inicio' component={HomePage} />

export default App;
