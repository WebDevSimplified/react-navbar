import { Route, Routes } from "react-router-dom"
import { createContext } from "react"
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./pages/Home"
import How from "./pages/How"
import Tenants from "./pages/Tenants"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Tv from "./pages/Tv"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
import Industries from "./pages/Industries"
import Toplogo from "./images/toplogo.svg"
import Graphic from "./images/graphic.svg"
import InnovationLogo from "./images/innovation_logo.png"
import SideLogo from "./images/sidelogo.svg"
import TextLogo from "./images/textlogo.svg"

export const UserContext = createContext();

// let Toplogo = { Toplogo }

function App() {
  return (
    <>
      <logo />
      <Navbar />
      <div className="App">
        {/* <img src={Toplogo} className="topLogo" alt="logo" /> */}
        <UserContext.Provider
          value={Toplogo}
          value={Graphic}
          value={InnovationLogo}
          value={SideLogo}
          value={TextLogo}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/How" element={<How />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Industries" element={<Industries />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </UserContext.Provider>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  )
}

export default App

