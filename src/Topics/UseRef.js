import React,{useRef} from 'react'

const UseRef = () => {

const inputRef = useRef(null);

const focusHandler = () =>{
    if(inputRef.current){
        inputRef.current.focus();
    }
}

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={focusHandler} >click to focus input </button>
    </div>
  )
}

export default UseRef