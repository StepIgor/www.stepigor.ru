import Header from "./Header";
import {useState} from "react";

function App() {

    const [page, editPage] = useState('main')

    return (
        <div className={`container`}>
            <Header/>
        </div>
    );
}

export default App;
