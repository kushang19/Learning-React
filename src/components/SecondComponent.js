import useCustomHook from "../Topics/useCustomHook"

const SecondComponent = () => {
    const clickedBtn = useCustomHook(0, "SecondComponent");
  return (
    <div>
      <h1>This is the Second Component</h1>
      <button onClick={clickedBtn} >Click here!</button>
    </div>
  )
}

export default SecondComponent
