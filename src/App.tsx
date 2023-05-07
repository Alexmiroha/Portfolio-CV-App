import React from 'react';
import './App.css';
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import Footer from "./footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>

            <div className='contentContainer'>
                <MainContent/>
            </div>

            <Footer/>

        </div>
    );
}

export default App;
