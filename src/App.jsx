import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Recedencies from "./Components/Recedencies/Recedencies"
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact"
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";

import "./App.css"

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Recedencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
