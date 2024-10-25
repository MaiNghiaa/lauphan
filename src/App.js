import "./App.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import MainContent from "./Pages/MainContent";
import "./Assets/Css/Global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
