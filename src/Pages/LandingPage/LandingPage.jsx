import React from "react";
import ContentSlider from "./Sections/ContentSlider";
import MainContent from "./Sections/MainContent";
import Category from "./Sections/Category";
import App from "./Sections/App";

export default function LandingPage() {
  return (
    <main className="pt-[71px]">
      <ContentSlider />
      <MainContent />
      <Category />
      <App />
    </main>
  );
}
