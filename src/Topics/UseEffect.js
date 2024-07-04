import React,{useState, useEffect} from 'react'

const UseEffect = () => {

    const [num, setNum] = useState("");
    const [user, setUser] = useState("");
    const [display, setDisplay] = useState(false)

    const  fetchData = async () => {
      try{
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);

          if(!response.ok){
            throw new Error("Response Error" + response.statusText);
          }
          
          const data = await response.json();
          setUser(data);
          console.log(data)

      } catch(error){
              console.log(error);
      }
    }

    useEffect(() =>{
        if(num){
          fetchData();
        }
    }, [num])

    const inputHandler = (e) =>{
        setDisplay(false)
        setNum(e.target.value)
    }
    const submitHandler = (e) =>{
        setNum("")
        setDisplay(true)
    }

  return (
    <>
    <h1>Enter Number</h1>
    <input type='number' onChange={inputHandler} value={num} />
    <div style={{marginTop: '10px'}}>
        <button onClick={submitHandler}>Submit</button>
    </div>
    <p style={{color: user.completed ? 'blue': 'red'}}>{display && user.title}</p>
    </>
  )
}

export default UseEffect
