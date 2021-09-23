import "./ProjectPage.css"
import Slide from "react-reveal/Slide";
import {langs, projects} from "./db";

function ProjectPage(props) {
    return (
        <div>
            <div className={`back-btn white-text`} onClick={(e) => {props.editPage('main')}}><i className={`material-icons white-text`}>arrow_back</i> Назад</div>
            <Slide bottom>
                <div className={`row pj-header`}>
                    <div className={`col s12 m12 l12 pj-header-col`}>
                        <div className={`pj-logo`}>
                            <img src={'icons/'+projects[props.id].icon} />
                        </div>
                        <div className={'pj-text-content'}>
                            <div className={`pj-title indigo-text`}>
                                {projects[props.id].name}
                            </div>
                            <div className={`pj-short-description`}>
                                {projects[props.id].short_description}
                            </div>
                            <div className={`pj-langs`}>
                                {projects[props.id].langs.map((l) => <div key={l.toString()} className={'indigo'}>{langs[l].name}</div>)}
                            </div>
                        </div>
                        <div className={'pj-buttons hide-on-small-only'}>
                            <a target="_blank" href={projects[props.id].url} className={`btn indigo white-text`}><i className={`material-icons right`}>launch</i>Запустить</a>
                            <a target="_blank" href={projects[props.id].git} className={`btn indigo white-text`}><i className={`material-icons`}>code</i></a>
                        </div>
                    </div>
                    <div className={`col 12 m12 l12 pj-buttons-mobile hide-on-med-and-up`}>
                        <a target="_blank" href={projects[props.id].url} className={`btn indigo white-text`}><i className={`material-icons right`}>launch</i>Запустить</a>
                        <a target="_blank" href={projects[props.id].git} className={`btn indigo white-text`}><i className={`material-icons`}>code</i></a>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default ProjectPage