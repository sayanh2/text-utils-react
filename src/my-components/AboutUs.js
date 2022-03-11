import React, {useState} from 'react'

export default function AboutUs() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setbtnText] = useState("Switch to Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtnText("Switch to Light Mode")
        }
        else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white' 
            })
            setbtnText("Switch to Dark Mode")
        }
    }

    return (
        <div className="container my-4">
            <div className="card" style={myStyle}>
                {/* <img src="..." className="card-img-top"/> */}
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div style={myStyle}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={myStyle}>An item</li>
                    <li className="list-group-item" style={myStyle}>A second item</li>
                    <li className="list-group-item" style={myStyle}>A third item</li>
                </ul>
                </div>
                <div className="card-body" style={myStyle}>
                    <a href="/" className="card-link">Card link</a>
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
            <button className="btn btn-outline-primary my-3" onClick={toggleStyle}>{btnText}</button>
        </div>
    )
}
