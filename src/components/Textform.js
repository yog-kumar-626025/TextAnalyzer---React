import React, {useState} from 'react' // useState = it is  a Hook
//  ustate hook hame ek state variable banane me help karta hai

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
      }
      
      const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
      }
      
      const handleClearClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is clear","success");
      }
      
      const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
      }
      
      // add wala
      const handleCopy = () => {
        console.log("This is Copy");
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard","success");
        
      }
      
      // 2 add wala
      const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed","success");

  }



    const [text, setText] = useState ('Enter text here'); // ise Yaad kar lo :)
    // text chnge karne ke liye setText ka usr karnege
    //setText("New Text by Yogesh kumar");
    return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'White':'#1d0446'}} >

        <h2>{props.heading}</h2>
        <div className="form-group my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1d0446':'white', color: props.mode==='dark'?'White':'#1d0446'}} id="exampleFormControlTextarea1" rows="7"></textarea>
      </div>
     <div>
        <button type="submit" className="btn btn-success mx-2" onClick={handleUpClick}>Switch to UpperCase</button>
      
        <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Switch to LowerCase</button>

        <button type="submit" className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>

        <button type="submit" className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>

        <button type="submit" className="btn btn-danger mx-2" onClick={handleExtraSpaces}>Remove Extre Spaces</button>
      </div>
        {/* <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div> */}
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'White':'#1d0446'}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Word and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something In the text box To Preview it Here"}</p>

  </div>
  </>
    
    )
}