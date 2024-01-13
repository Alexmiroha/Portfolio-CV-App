import React from 'react';
import './App.css';
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import Footer from "./footer/footer";
import {ScrollButton} from "./mainContent/ScrollToTopButton";

function App() {
    return (
        <div className="App">
            <Header/>
            <ScrollButton/>
            <MainContent/>
            <Footer/>

        </div>
    );
}

export default App;
