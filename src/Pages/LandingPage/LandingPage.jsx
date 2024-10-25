import React from "react";
import ContentSlider from "./Sections/ContentSlider";
import MainContent from "../MainContent";
import Category from "./Sections/Category";
import App from "./Sections/App";

export default function LandingPage() {
  return (
    <main>
      <ContentSlider />
      <MainContent />
      <Category />
      <App />
    </main>
  );
}
