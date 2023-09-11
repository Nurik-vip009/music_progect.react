import React from 'react';
import Header from "./header/header";
import './app.css'
import Sec1 from "./main/sec1";
import Sec2 from "./main/sec2";
import Sec3 from "./main/sec3";
import Sec4 from "./main/sec4";
import Sec5 from "./main/sec5";
import Footer from "./footer/footer";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Sec5/>
            <Footer/>
        </div>
    );
};

export default App;