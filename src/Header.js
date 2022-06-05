import "./CSS/Header.css"
import {useEffect, useState} from "react";


function Header(props){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());

    function updateDateTime(){
        let date = new Date();
        setTime(date.toLocaleTimeString());
        setDate(date.toLocaleDateString());
    }

    setInterval(updateDateTime, 1000);

    return (
        <div className={`header-wrapper ${props.url == '' ? 'index-page-background' : ''}`}>
            {
                props.url == '' &&
                <div className={`header-inner-block`}>
                    <div>
                        <img src="img/avatar.jpg" />
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
                            <a href="mailto:igor.stepanov@difres.ru"><i className={`material-icons`}>email</i>Mail</a>
                            <a href="https://t.me/stepigor"><i className={`material-icons`}>chat</i>Telegram</a>
                            <a href="https://github.com/stepigor"><i className={`material-icons`}>code</i>GitHub</a>
                        </div>
                    </div>
                    <div className={`desktop-timedate`}>
                        <div>
                            {time}
                        </div>
                        <div>
                            {date}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;