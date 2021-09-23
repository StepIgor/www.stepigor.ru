import "./ProjectList.css"
import {useState} from "react";
import {projects, langs} from "./db";
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade";

function ProjectList(props) {

    const [showFrontend, editShowFrontend] = useState(true)

    let plist

    plist = Object.keys(projects).filter((p) => projects[p].frontend == showFrontend).map((pj) => {
        return (
            <Fade key={pj.toString()}>
                <div className={`plist-element`}>
                    <div className={`plist-element-picture`}>
                        <img src={'icons/' + projects[pj].icon}/>
                    </div>
                    <div className={`plist-element-body`}>
                        <div className={`indigo-text`}>{projects[pj].name}</div>
                        <div>{projects[pj].short_description}</div>
                        <div className={`langs-list`}>{projects[pj].langs.map((lg) => <div key={lg.toString()}
                            className={langs[lg].color}> {langs[lg].name}</div>)}</div>
                    </div>
                </div>
            </Fade>
        )
    })

    return (
        <Slide bottom>
            <div className={`external-block`}>
                <div className={`tab-menu`}>
                    <div onClick={() => editShowFrontend(true)}
                         className={`indigo-text tab-btn ${showFrontend ? `btn-active` : ``}`}>
                        Frontend
                    </div>
                    <div onClick={() => editShowFrontend(false)}
                         className={`indigo-text tab-btn ${!showFrontend ? `btn-active` : ``}`}>
                        Другое
                    </div>
                </div>
                <div className={`plist-container`}>
                    {plist}
                </div>
            </div>
        </Slide>
    )
}

export default ProjectList