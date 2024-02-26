
import React, { useState } from 'react';

export default function Textform(props) {
  const [Text, setText] = useState("");
  const textChangeToUp=()=>{
    let newText = Text.toUpperCase()
    setText(newText)
    props.showAlert("TEXT TRANSFORMED TO UPPER CASE","Sucsess")
  }
  const textChangeToLo=()=>{
    let newText = Text.toLowerCase()
    setText(newText)
    props.showAlert("text transformed to upper case" ,"Sucsess")
  }
  const textClear=()=>{
    let newText = ''
    setText(newText)
  }
  const textCopy=()=>{
    var Text =document.getElementById("exampleFormControlTextarea1")
    Text.select()
    Text.setSelectionRange(0,9999)
    navigator.clipboard.writeText(Text.value)
    props.showAlert("Text is Copied" ,"Sucsess")
  }
  const removeSpace=()=>{
    var newText=Text.split(/[ ] +/)
    setText(newText.join(" "))
    props.showAlert("Extra Speces are Removed" ,"Sucsess")
  }
  // const textToTitleCase=()=>{
  //   var word =Text.toLowerCase().split(" ")
  //   console.log(word)
  //   // for(var i=0; i=word.length ;i++){
  //   //     word[i]=word[i][0].toUpperCase() + word[i].slice
  //   //     }
  //   let newText=word.join(" ")
  //  setText(newText)
  // }
  const textChange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  return (
   <> 
   <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
   <h1>Enter The Text Below To Analyze</h1>
<div className="mb-3 mt-2 ">
 <label for="exampleFormControlTextarea1" className="form-label"></label>
 <textarea className="form-control" value={Text} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white' ,
color:props.mode === 'dark' ? 'white' : 'black' }} onChange={textChange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2 my-1`} onClick={textChangeToUp}> CONVERT TO UPPERCASE</button>
<button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2 my-1`} onClick={textChangeToLo}> convert to lowercase</button>
<button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2 my-1`} onClick={textClear}> Clear Text</button>
<button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2 my-1`} onClick={textCopy}> Copy Text</button>
<button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mx-2 my-1`} onClick={removeSpace}>Remove Extra Space</button>
{/* <button className='btn btn-outline-primary mx-2 my-1' onClick={textToTitleCase}>Convert To Title Case</button> */}
</div>
<div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
  <h2>Your Text Summary</h2>
  <p>Number of Word {Text.split(" ").filter((element)=>{ return element.length!==0}).length} and Character {Text.length}</p>
  <p>Time Requried Read the Words {0.008 * Text.split(" ").filter((element)=>{ return element.length!==0}).length } min</p>
  <h2>Preview</h2>
  <p>{Text}</p>
</div>
   </>
  )
}
