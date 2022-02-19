import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import GlobalStyle from "./globalStyles";
import {Footer, Navbar} from "./Components/ExportIndex";
import Home from "./Pages/HomePage/HomePage";
import Intro from "./Pages/Intro/Intro";
import RegisterPage from "./Pages/Register/RegisterPage";
import FAQPage from "./Pages/FAQ/FAQPage";


function App() {
  return (
   <Router>
       <ScrollToTop/>
       <GlobalStyle/>
       <Navbar/>
       <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/intro" exact component={Intro}/>
           <Route path="/register" exact component={RegisterPage}/>
           <Route path="/faq" exact component={FAQPage}/>
       </Switch>
       <Footer/>
   </Router>
  );
}

export default App;
