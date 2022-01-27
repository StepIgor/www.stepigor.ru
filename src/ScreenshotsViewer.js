import Slide from "react-reveal/Slide"
import {useState} from "react";
import "./ScreenshotsViewer.css"

function ScreenshotsViewer(props) {

    let [current, editCurrent] = useState(0)
    let screenshots = props.shots.map((file) => {
        let image = new Image()
        image.src = `screenshots/${file}`
        return image
    })

    function turnSlide(forward) {
        if (forward){
            editCurrent(current == screenshots.length - 1 ? 0 : current + 1)
        } else {
            editCurrent(current == 0 ? screenshots.length - 1 : current - 1)
        }
    }

    return (
        <div className={`viewer-container`}>
            <div onClick={() => {turnSlide(false)}}><i className={`material-icons indigo-text medium`}>arrow_back</i></div>
            <img className={`responsive-img`} src={screenshots[current].src}/>
            <div onClick={() => {turnSlide(true)}}><i className={`material-icons indigo-text medium`}>arrow_forward</i></div>
        </div>
    )
}

export default ScreenshotsViewer