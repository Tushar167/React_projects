import React,{useState} from 'react'
import "./style.css"
import Swal from "sweetalert2"

export default function Textform(props) {
    const chgToUpper = () =>{
      console.log("Upper was clicked")
      let newText = text.toUpperCase()
      setText(newText)
    }
    const handleOnChange = (event) =>{
      console.log("Upper was changed")
      setText(event.target.value)
    }
    const chgToLower = () =>{
      console.log("Upper was clicked")
      let newText = text.toLowerCase()
      setText(newText)
    }
    const chgSpaces = () =>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }
    const clrText =() =>{
      Swal.fire({
        title : 'Do you want to clear the text?',
        confirmButtonText : "ok",
        showCancelButton : true,
        icon : "warning",
      }).then((res)=>{
        if(res.isConfirmed){
          setText("")
          Swal.fire(
            'The text is Cleared',
            "",
            'success'
          )
        }
        else{
          Swal.fire('The Content is present',"",'success')
        }
      })
    }

    const [text,setText] = useState("")
  return (
    <>
    <div style={{backgroundColor : props.mode === 'dark'?'#02142e':'white'}}>
      <div className="mb-3"style={{backgroundColor : props.mode === 'dark'?'#02142e':'white'}} >
        <label htmlFor="myBox" className="form-label"  style={{color : props.mode === 'dark'?'white':'black'}}>Enter Text Here</label>
        <textarea className="form-control" value={text} placeholder='enter text here' onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'dark'?'#02142e':'white',color : props.mode === 'dark'?'white':'black' }}></textarea>
      </div>
      <button className="btnprimary mx-2"  onClick={chgToUpper} >Convert to Upper</button>
      <button className="btnprimary mx-2"  onClick={chgToLower} >Convert to Lower</button>
      <button className="btnprimary mx-2"  onClick={chgSpaces} >To remove extra spaces</button>
      <button className="btnprimary mx-2"  onClick={clrText}>Clear Text</button>
    </div>
    <div className='mb-3 my-3'style={{backgroundColor : props.mode === 'dark'?'#02142e':'white'}}>
      <h1 style={{color : props.mode === 'dark'?'white':'black'}}>Number of words and letters</h1>
      <p style={{color : props.mode === 'dark'?'white':'black'}}>{text === "" ? 0 :text.split(" ").length} words {text.length} letters</p>
      <h3 style={{color : props.mode === 'dark'?'white':'black'}}>Preview</h3>
      <p style={{color : props.mode === 'dark'?'white':'black'}}>{text}</p>
    </div>
    </>
  )
}
