import React, { useState } from 'react'
import "./styles.css";

interface Props {
  setInputValue : React.Dispatch<React.SetStateAction<string>>,
}

const InputField:React.FC <Props>= ({setInputValue}) => {

    //taking the input locally from the user
    const [inputLocal, setInputLocal] = useState<string>("");

    return (
        <div className='input-class'>
            <input type="text" placeholder='Enter Country....' className='input_box' onChange={(e)=>setInputLocal(e.target.value)}/>
            {inputLocal && <button onClick={()=>setInputValue(inputLocal)} className='input_button'>Submit</button>}
        </div>
    )
}

export default InputField