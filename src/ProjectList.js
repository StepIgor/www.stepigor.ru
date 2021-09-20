import "./ProjectList.css"
import {useState} from "react";

function ProjectList(props){

    const [showFrontend, editShowFrontend] = useState(true)

    return (
        <div className={`external-block`}>
            <div className={`tab-menu`}>
                <div onClick={() => editShowFrontend(true)} className={`indigo-text tab-btn ${showFrontend ? `btn-active` : ``}`}>
                    Frontend
                </div>
                <div onClick={() => editShowFrontend(false)} className={`indigo-text tab-btn ${!showFrontend ? `btn-active` : ``}`}>
                    Другое
                </div>
            </div>
        </div>
    )
}

export default ProjectList