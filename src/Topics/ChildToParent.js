import React,{useState} from 'react'

const ChildToParent = () => {
    const [value, setValue] = useState("I am Parent text, Update me!!");

    function updateText(newText){
        setValue(newText);
    }
  return (
    <div>
      <h1>Parent</h1>
      <h6>{value}</h6>
      <Child updateParentText={updateText} />
    </div>
  )
}

const Child = (props) => {

    function handleClick(){
        props.updateParentText("Text Changed by Child")
    }

    return (
        <>        
        <h1>Child component</h1>
        <button onClick={handleClick}>Change Parent Text</button>
        </>
    )
}

export default ChildToParent
