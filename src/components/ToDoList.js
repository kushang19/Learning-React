/*

3. Todo tasks with Local Storage
Build a to-do tasks that allows users to add, edit, and remove newTask. Persist the newTask using local storage.

Skills tested: Local storage, state management, CRUD operations

Difficulty: Medium

newTask:
Create the todo tasks UI with options to add, edit, and delete newTask.
Implement local storage to persist newTask across page refreshes.
Add functionality to mark newTask as completed.

Hints:
Use React state to manage the tasks of newTask.
Utilize the local Storage API to store and retrieve newTask.

*/

import React,{useState} from 'react'

const ToDotasks = () => {

    const [text, setText] = useState("")
    const [list, setList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [updatedText, setUpdatedText] = useState({})

    const handleAddTask = () =>{
        if(text.trim() !== ""){
            setList([...list, {id: Date.now(), textLi: text}])
            setText("")
        }
    }
    const handleUpdateTask = () =>{
        if(text.trim() !== ""){
     
            setList(list.map(el => (
                el.id === updatedText.id ? {...el, textLi: text} : el
            )))

            setUpdatedText({});
            setText("");
            setIsEditing(false);
        }
    }
    const handleEdit = (item) =>{
        setIsEditing(true)
        setText(item.textLi)
        setUpdatedText(item);

    }
    const handleDelete = id => setList(list.filter(item => item.id !== id)); 
    
  return (
    <>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Task Below :</label>
            <input type="text" className="form-control" id="text" placeholder="Enter New Text" 
            onChange={(e) => setText(e.target.value)} value={text} name="text"/>
            {isEditing ? ( <button className="btn btn-primary my-2" onClick={handleUpdateTask}>Update Task</button>
            ) : ( <button className="btn btn-primary my-2" onClick={handleAddTask}>Add Task</button>
            )}
        </div>
  
        <h1>To Do tasks</h1>
        <ul style={{listStyle: 'none', padding: '0'}}>
        {list.map((item) => (
          <li className="my-3" key={item.id}>
           <h4>{item.textLi}</h4>
            <button className="btn btn-primary my-2 mx-1" onClick={() => handleEdit(item)} >Edit</button>
            <button className="btn btn-primary my-2 mx-1"onClick={() => handleDelete(item.id)} >Delete</button>
          </li>
        ))}
        </ul>
    </>
  )
}

export default ToDotasks;

