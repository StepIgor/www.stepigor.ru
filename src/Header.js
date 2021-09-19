import "./Header.css"
import Slide from "react-reveal/Slide"

function Header(props){
    return (
        <Slide bottom>
            <div className={`row center-align header`}>
                <div className={`col s12 m12 l12`}>
                    <div className={`logo hide-on-small-only`}>
                        stepigor.ru
                    </div>
                    <div className={`hide-on-med-and-up logo-mobile`}>
                        stepigor.ru
                    </div>
                    <div className={`logo-description light`}>
                        main developer's website
                    </div>
                    <div className={`logo-contacts`}>
                        <a href="mailto:igor.stepanov@difres.ru" target="_blank" className={`white-text`}><i className={`white-text material-icons`}>email</i> <span>igor.stepanov@difres.ru</span></a>
                        <a href="https://t.me/stepigor" target="_blank" className={`white-text`}><i className={`white-text material-icons`}>message</i> <span>Telegram</span></a>
                        <a href="https://github.com/stepigor" target="_blank" className={`white-text`}><i className={`white-text material-icons`}>code</i> <span>GitHub</span></a>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default Header