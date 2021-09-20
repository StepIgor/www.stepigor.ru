import Header from "./Header";
import ProjectList from "./ProjectList";
import {useState} from "react";

function App() {

    const [page, editPage] = useState('main')

    return (
        <div className={`container`}>
            { page == "main" && <div><Header/><ProjectList/></div>}
        </div>
    );
}

export default App;
