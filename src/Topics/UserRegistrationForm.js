/* https://blog.imocha.io/react-coding-challenges

Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages

Implement the user registration form UI
Validate the form inputs and display error messages
Integrate form submission with a mock API call (simulated delay).
Add a success message upon successful registration
*/

import React,{useState} from 'react'

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.name && formData.email && formData.password){
            setLoading(true)
            try{
                await mockApiCall(formData);
                setList([...list, formData]);
                setFormData({name: "", email: "", password: ""})
            }
            catch(error){
                console.log("Failed to submit data ", error);
            }
            finally{
                setLoading(false);
            }
        }
    }

    // Integrate form submission with a mock API call (simulated delay).
    const mockApiCall = (data) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("Mock API Call - Data submitted:", data);
            resolve();
          }, 2000); // Simulate a 2-second delay
        });
      };

  return (
    <> 
        <form type="submit" onClick={handleSubmit} >
        <h1>User Registration Form</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" 
            className="form-control" 
            id="name" 
            placeholder="Enter Name" 
            onChange={handleChange} 
            value={formData.name} 
            name="name"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" 
            onChange={handleChange} value={formData.email} name="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"
            onChange={handleChange} value={formData.password} name="password" />
        </div>
        <div className="mb-3">
            <button className="btn btn-primary" disabled={loading}>{loading ? "Submiting..." : "Register"}</button>
        </div>
        </form> 
        <UserData list={list} />

    </>
  )
}

const UserData = ({list}) => {
    return(
            <div className="mb-3">
                <h2 className="mb-3">Display User Data</h2>
                <ul style={{listStyle: 'none', padding: '0'}}>
                    {list.map((el, index) => (
                        <li key={index} className="mb-4" style={{border: '1px solid black',padding:'5px 10px'}}>
                            <h4>User {index + 1}</h4>
                            <p>Name: {el.name}</p>
                            <p>Email: {el.email}</p>
                            <p>Password: {el.password}</p>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default UserRegistrationForm
