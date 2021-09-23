import Header from "./Header";
import ProjectList from "./ProjectList";
import {useState} from "react";
import ProjectPage from "./ProjectPage";

function App() {

    let currentDate = new Date()
    let lastAppUpdate = localStorage['lastAppUpdate'] == null ? JSON.parse('[]') : JSON.parse(localStorage['lastAppUpdate'])
    if (lastAppUpdate.length == 0 || lastAppUpdate[2] != currentDate.getFullYear() || lastAppUpdate[1] != currentDate.getMonth() || lastAppUpdate[0] != currentDate.getDate()){
        let newDate = []
        newDate.push(currentDate.getDate())
        newDate.push(currentDate.getMonth())
        newDate.push(currentDate.getFullYear())
        localStorage['lastAppUpdate'] = JSON.stringify(newDate)
        window.location.reload(true)
    }

    const [page, editPage] = useState('main')
    const [id, editId] = useState(-1)

    return (
        <div className={`container`}>
            { page == "main" && <div><Header/><ProjectList editPage={editPage} editId={editId} /></div>}
            { page == "project" && <ProjectPage editPage={editPage} id={id} />}
        </div>
    );
}

export default App;
