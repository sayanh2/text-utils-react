import React, {useState} from 'react'

export default function FormText(props) {

    const [Text, setText] = useState("")

    const handleUpClick = ()=>{
        let newText = Text.toUpperCase()
        // console.log("You Clicked on Convert to Uppercase")
        setText(newText)
        props.showAlert("Your Text has been converted to Uppercase", "success")
    }
    const handleLoClick = ()=>{
        let newText = Text.toLowerCase()
        // console.log("You Clicked on Convert to Uppercase")
        setText(newText)
        props.showAlert("Your Text has been converted to Lowercase", "success")
    }
    const handleClear = ()=>{
        setText("")
        props.showAlert("Your Text has been Cleared", "success")
    }
    const handleExtraSpace = ()=>{
        let newText = Text.replace(/  +/g, " ")
        setText(newText)
        props.showAlert("Your Extra Spaces has been Removed", "success")
    }
    const handleCopy = ()=>{
        let copyText = document.getElementById("mybox")
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Your Text has been Copied", "success")
    }
    const handleUpChange = (e)=>{
        setText(e.target.value)
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#252b32'}}>
        <div className="my-3">
            <h1>Enter Your Text Here</h1>
        <textarea className="form-control" value={Text} onChange={handleUpChange} style={{backgroundColor: props.mode==='light'?'white':'#252b32', 
        color: props.mode==='light'?'black':'white'}} id="mybox" rows="9"></textarea>
        <button className="btn btn-outline-primary m-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-primary m-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-outline-primary m-3" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-outline-primary m-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-outline-primary m-3" onClick={handleCopy}>Copy Text</button>
        </div>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#252b32'}}>
            <h3>Your Text Summary</h3>
            <p>You have written {Text.split(" ").length} words and {Text.length} characters.</p>
            <p>You need {0.008 * Text.split(" ").length} Minutes to read the text.</p>
            <h3>Preview</h3>
            <p>{Text.length>0?Text:'Enter something in the textbox above to preview it here'}</p>
        </div>
        </>
    )
}
