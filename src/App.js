import "./CSS/App.css"
import Header from "./Header";
import Body from "./Body"
import {useEffect, useState} from "react";


function App() {
    const [url, setUrl] = useState('');

    useEffect(() => {
        let currentUrl = window.location.href.split('/')
        setUrl(currentUrl[currentUrl.length - 1]);
    }, [])

    return (
        <div className={`site-wrapper`}>
            <Header url={url}/>
            <Body url={url}/>
        </div>
    );
}

export default App;
