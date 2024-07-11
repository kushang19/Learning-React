import React,{useState, useEffect} from 'react'

const UseCustomHook = (initalizer, componentName) => {
    const [counter, setCounter] = useState(initalizer);

    function resetCounter(){
        setCounter(counter + 1);
    }

    useEffect(() => {
        console.log("The button of the "+ componentName + " is clicked "+ counter + " times.");
    }, [counter, componentName])

  return resetCounter;
}

export default UseCustomHook

/*
Rules to Build React Custom Hooks


Custom hooks must start with “use” to follow the naming convention and signal their potential use of React hooks.

Typically, custom hooks encapsulate stateful logic, allowing its reuse across multiple components seamlessly.

Custom hooks are not components; they are functions that contain reusable logic, making them versatile and easy to integrate.

When using other hooks, ensure that custom hooks adhere to the rules of React hooks, maintaining order and dependency arrays.

Custom hooks should encapsulate a specific concern, promoting modularity and improving the organization of code in React applications.
*/