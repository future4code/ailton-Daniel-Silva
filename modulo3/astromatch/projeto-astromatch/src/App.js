
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ChoicesPage from "./components/ChoicesPage/ChoicesPage";
import MatchPage from "./components/MatchPage/MatchPage";



export default function App() {

  const [screen, setScreen] = useState("pagina escolhas")

  const changeScreen = () => {
    switch (screen) {
      case "pagina escolhas":
        return <ChoicesPage goToScreen={goToScreen}/>
        break;
      case "pagina match":
        return <MatchPage goToScreen={goToScreen}/>
        break;
      default:
        return <p>Página inexistente!</p>
    }
  }

  const goToScreen = (page) => {
    setScreen(page)
  }

  return (
    <div>
      {changeScreen()}
    </div>
  );
}
