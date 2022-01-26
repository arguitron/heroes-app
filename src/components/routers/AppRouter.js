import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DcScreen } from "../dc/DcScreen";
import { LoginScreen } from "../login/LoginScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MarvelScreen />} />
        <Route exact path="/marvel" element={<MarvelScreen />} />
        <Route exact path="/dc" element={<DcScreen />} />
        <Route exact path="/search" element={<SearchScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        {/* <Route exact path="/about" element={<About/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
