import UseCustomHook from "../Topics/UseCustomHook"

const SecondComponent = () => {
    const clickedBtn = UseCustomHook(0, "SecondComponent");
  return (
    <div>
      <h1>This is the Second Component</h1>
      <button onClick={clickedBtn} >Click here!</button>
    </div>
  )
}

export default SecondComponent
