import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.scss";

import Navigation from "./components/navigation";
import Header from "./components/header";
import AboutSection from "./components/about";
import ServicesSections from "./components/services";
import CalloutSection from "./components/callout";
import PortfolioSection from "./components/portfolio";
import CallToAction from "./components/calltoaction";
import MapSection from "./components/map";
import FooterSection from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <AboutSection />
        <ServicesSections />
        <CalloutSection />
        <PortfolioSection />
        <CallToAction />
        <MapSection />
        <FooterSection />
        <ScrollToTop />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("entry"));
