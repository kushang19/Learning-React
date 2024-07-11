import UseCustomHook from "../Topics/UseCustomHook";

const FirstComponent = () => {
    const clickedButton = UseCustomHook(0 , "FirstComponent"); 
  return (
    <div>
        <h1> This is the First Component</h1>
            <button onClick={clickedButton}>Click here!</button>
        </div>
  )
}

export default FirstComponent;
