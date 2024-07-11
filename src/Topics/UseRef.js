import React,{useRef,lazy,Suspense} from 'react'
import PureComponentExample from './PureComponentExample'

const LazyLoad = lazy(() => import ('./LazyLoad'))

const UseRef = () => {

const inputRef = useRef(null);
const focusPoint = useRef(null);

const focusHandler = () =>{
    if(inputRef.current){
        inputRef.current.focus();
    }

    focusPoint.current.value = 
    "The quick brown fox jumps over the lazy dog"; 
    focusPoint.current.focus(); 
}

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Click the button to focus" />
      <button  onClick={focusHandler} >click to focus input </button>
      <textarea ref={focusPoint} /> 

      <Suspense fallback={<div>please wait...</div>}>
      <LazyLoad/>
      </Suspense>

      <PureComponentExample />
    </>
  )
}

export default UseRef

/*
The useRef is a hook that allows to directly create a reference to the DOM element in the functional component

useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and helps in caching and storing previous values

The useRef returns a mutable ref object. This object has a property called .current. 

*/