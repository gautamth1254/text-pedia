import React, {useState} from 'react';


export default function Textform(props){
    
    const handleOnchange = (event) =>{
        console.log("you enter in text area");
        
        setText(event.target.value);
    } 

    const OnclickUpper = () =>{
       // console.log("the test is clicked" + text);nice to hear
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("now text is in upper case", "success");
    }

    const OnclickLower = () => {

        //console.log("the test is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("now text is in lower case", "success");

    }
    const OnclickClear = () => {
        
        setText(" ");
    }


    const handleCopy = () => {
        console.log("i am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handlespecialChracter = () =>{
        let newText = text.split(/[!@#$%^&*()+_,.+-]/);
        let newText1 = text.split(/[ ]+/);        
        setText(newText.join(" "));
    }

    const handleExtraspaces = () =>{
        
        let newText1 = text.split(/[ ]+/);        
        setText(newText1.join(" "));

    }
    // const ChangeOnCount=() =>{
    //     console.log("the count is" + count);
    // }
     const [text, setText] = useState("Enter the text here");
    // //setText("new text")
    // //const [count, setCount] = useState(0);

    // const OnclickCount = () =>{
    //     let i = 0;
    //     setCount(i++);

    // }

    

    return(
        <>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'grey'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={OnclickUpper}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={OnclickLower}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={OnclickClear}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handlespecialChracter}>Remove special character</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>

        </div>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <p>the text is {text.length} and the word is {text.split(" ").length}
            </p>
            <p>{0.008 * text.split(" ").length} Minute read</p>
            
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something to preview here'}</p>
               
        </div>
        </>

    )
}