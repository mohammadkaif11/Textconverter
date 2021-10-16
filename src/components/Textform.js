import React, { useState } from 'react'

export default function Textform(props) {
  //handle extraspace
  const handleExatraspace = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.showAlert("success", "Remove extra success");
  }


  //copy text
  const copyText = () => {
    var text = document.getElementById('box');
    text.select()
    navigator.clipboard.writeText(text.value);
  }


  // convert to lowercase
  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("success", "convert to lowercase")
  }
  const toUppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);

  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const clearText = () => {
    let newtext = '';
    setText(newtext);
  }
  const [text, setText] = useState('Enter Text here');
  const [myStyle, setStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  });

  const [btnText, setbtnText] = useState('enable dark mode');


  const darkMode = () => {
    if (myStyle.color === "black") {
      setStyle({
        backgroundColor: 'black',
        color: 'white'
      })
      setbtnText("disable dark mode")
    }
    else {
      setStyle({
        backgroundColor: 'white',
        color: 'black'
      })
      setbtnText("enable dark mode");
    }
  }


  return (
    <>
      <div style={myStyle}>
        <div className="container" style={myStyle}>
          <div className="mb-3" style={myStyle}>
            <h1>{props.heading}</h1>
            <label className="form-label" style={myStyle}>Enter Text</label>
            <textarea className="form-control" id="box" rows="6" value={text} onChange={handleOnChange} style={myStyle}></textarea>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={toLowerCase} >ConverLowercase</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={toUppercase}>ConvertUppercase</button>
            <button type="button" className="btn btn-secondary mx-2 my-1" onClick={clearText}>ClearText</button>
            <button type="button" className="btn btn-dark mx-2 my-1" onClick={darkMode}>{btnText}</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={copyText} >copyText</button>
            <button type="button" className="btn btn-secondary mx-2 my-1" onClick={handleExatraspace}>RemoveExtraSpaces</button>

          </div>
          <div className="container my-3">
            <h1>Your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} character</p>
            <p> {0.008 * text.split(" ").length} Mintues reading time </p>
            <h1>preview</h1>
            <p>{text.length > 0 ? text : "Enter text to analyze"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
