import "./App.css";
// import Footer from "./Layouts/Footer";
// import Header from "./Layouts/Header";
// import LandingPage from "./Pages/LandingPage/LandingPage";
// import MainContent from "./Pages/MainContent";
import "./Assets/Css/Global.css";
import { AuthProvider } from "./Context/AuthContext";
import Routes from "./Router/Routes";
import { BrowserRouter } from "react-router-dom";

// import Porlet from "./Pages/Porlet/Porlet";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
