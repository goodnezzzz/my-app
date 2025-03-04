import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Jobs from './components/Jobs'
import Work from './components/Works'
import Popular from './components/Popular'
import Ad from './components/Ad'
import Customers from './components/Customers'
import Footer from './components/Footer'

function App() {

    return (
      <div className="App">
       <Header />
       <Hero />
       <Jobs />
       <Work />
       <Popular />
       <Ad />
       <Customers />
       <Footer />
      </div>
    );
}

export default App;
