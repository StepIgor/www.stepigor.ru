import "./CSS/Body.css"
import {db} from "./data/db";


function Body(props){
    return (
        <div className={`body-wrapper`}>
            {
                props.url == '' &&
                <div>
                    content
                </div>
            }
            {
                (props.url != '' && Object.keys(db).indexOf(props.url) == -1) &&
                <div className={`body-error-content`}>
                    <span className={`link`} onClick={() => {window.history.pushState(null, null, '/'); props.setUrl('')}}>Return to the main page</span>
                </div>
            }
        </div>
    )
}

export default Body;