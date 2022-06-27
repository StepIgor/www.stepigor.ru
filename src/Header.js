import "./CSS/Header.css"
import {db} from "./data/db";


function Header(props){
    return (
        <div className={`header-wrapper ${props.url == '' ? 'index-page-background' : Object.keys(db).indexOf(props.url) == -1 ? 'error-page-background' : ''}`}>
            {
                props.url == '' &&
                <div className={`header-inner-block`}>
                    <div>
                        <img src="img/avatar.png" />
                    </div>
                    <div className={`header-text-content`}>
                        <div className={`header-text-title`}>
                            <div>
                                stepigor.ru
                            </div>
                            <div>
                                the main developer's website
                            </div>
                        </div>
                        <div className={'header-title-links'}>
                            <a target="_blank" href="mailto:igor.stepanov@difres.ru"><i className={`material-icons`}>email</i>Mail</a>
                            <a target="_blank" href="https://t.me/stepigor"><i className={`material-icons`}>chat</i>Telegram</a>
                            <a target="_blank" href="https://github.com/stepigor"><i className={`material-icons`}>code</i>GitHub</a>
                        </div>
                    </div>
                    <div className={`desktop-timedate`}>
                        <div>
                            Backend & Frontend Development
                        </div>
                        <div>
                            Website last update: 01.07.2022
                        </div>
                    </div>
                </div>
            }
            {
                (props.url != '' && Object.keys(db).indexOf(props.url) == -1) &&
                <div className={`header-error-block`}>
                    <i className={`material-icons`}>error</i>
                    <span>Project was not found</span>
                    <span>Invalid URL request</span>
                </div>
            }
        </div>
    )
}

export default Header;