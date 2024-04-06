import React, {useState} from 'react';



export default function TextForm(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
       setText(newText);
    }
    const [text, setText] = useState('Enter Text here');
   
    return (
<div>
    <h3>{props.heading}</h3>
    <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
</div>
    )
  
}
 