// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer } from "./App.styled";
import SharedLayout from "./SharedLayout/SharedLayout";



export const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={ <SharedLayout/> } />
      </Routes>
    </AppContainer>
  );

  
};
