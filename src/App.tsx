import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import Footer from "./footer/footer";
import {ScrollButton} from "./mainContent/ScrollToTopButton";

function App() {



    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    const [isDarkMode, setDarkMode] = useState(storedDarkMode);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode])



    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
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
