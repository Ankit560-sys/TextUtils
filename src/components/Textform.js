import React, { useState } from 'react';

export default function Textform(props) {

    
    const handleUpClick = () => {
        // console.log("handle up clicked " +text)
        let newText = text.toUpperCase();
        
        setText(newText)
        props.showAlert('Converted to Uppercase','success :')
    }
    const handleOnChange = (e) => {
        // console.log("Text changed")
        setText(e.target.value)
    }
    
    const handleLoClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase','success :')
    }
    const handleOnClear=()=>{
        setText("");
        props.showAlert("Text cleared", "success :");

    }
    

    const [text, setText] = useState("");

    // setText =("vjsuvdsbwsphvpjvd");this is the right way to set text
    //text ="acjabc";is a wrong way to set the text





    return (
        <>

            <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">

                    <textarea className="form-control" id="exampleFormControlTextarea1"  style={{backgroundColor:props.mode ==="dark"?'#13466e':'white',
                    color:props.mode ==='dark'?'white':'black'}}  onChange={handleOnChange} value={text} rows="8" columns="10"></textarea>
                </div>
                <button  disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button  disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleOnClear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes for Reading</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>

            </div>
        </>


    )
}
