import React, {useEffect, useState} from "react";
import MainHeader from "./components/global/Header/MainHeader";
import './App.css';
import SubHeader from "./components/global/Header/SubHeader/indext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [message, setMessage] = useState([]);

    return (
        <div className="App">
            {/* <MainHeader /> */}
            <SubHeader category="배달" />
        </div>
    );
}

export default App;