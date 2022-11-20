import React, {useEffect, useState} from "react";
import './App.css';

function App() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch("/home")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    baemin project
                </p>
                <ul>
                    {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
                </ul>
            </header>
        </div>
    );
}

export default App;