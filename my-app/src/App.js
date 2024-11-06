// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./components/Aula 8/Home";
import Users from "./components/Aula 8/Users";
import UserDetail from "./components/Aula 8/UserDetail";
import StyledButton from "./components/Aula 9/StyledButton";
import StyledCard from "./components/Aula 9/StyledCard";

const App = () => {
  return (
    <>
      <StyledButton />
      <StyledCard />
    </>
  );
};

export default App;
