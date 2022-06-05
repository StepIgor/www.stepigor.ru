import "./CSS/Body.css"


function Body(props){
    return (
        <div className={`body-wrapper`}>
            {
                props.url == '' &&
                <div>
                    content
                </div>
            }
        </div>
    )
}

export default Body;