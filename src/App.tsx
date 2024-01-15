import React, {useState} from 'react';
import './App.css';
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import Footer from "./footer/footer";
import {ScrollButton} from "./mainContent/ScrollToTopButton";

function App() {

    const [isDarkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        isDarkMode? setDarkMode(false) : setDarkMode(true)
    }

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <ScrollButton isDarkMode={isDarkMode}/>
            <MainContent isDarkMode={isDarkMode}/>
            <Footer isDarkMode={isDarkMode}/>
        </div>
    );
}

export default App;
