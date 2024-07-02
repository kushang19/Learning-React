import React,{useState} from 'react'

const ListItems = () => {

    const [text, setText] = useState()
    const [list, setList] = useState([]);

    const inputHandler = (e) => {
        setText(e.target.value);

    }
    const btnHandler = () => {
        setList([...list, text]);
        setText("")
    }

  return (
    <div>
      <h1>List Iteams</h1>
      <input type="text" onChange={inputHandler} value={text} />
      <div>
        <button onClick={btnHandler} >Add</button>
      </div>
      <ul>{list.map((el,index) => {
        return <li key={index}>{el}</li>
      })}</ul>
    </div>
  )
}

export default ListItems
