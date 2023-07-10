import React from "react";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Hero />
      <Link to={'/test'}>TEST</Link>
    </>
  );
}

export default MainPage;
