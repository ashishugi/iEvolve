import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Header from "./Header";
import SkillCard from "./SkillCard";
function Home(){
    return (
        
      <div >
            <Navbar />
            <Header />
            <SkillCard />
            <MainContent />
            <Footer />
      </div>
    );
}
export default Home;