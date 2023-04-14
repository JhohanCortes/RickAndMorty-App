import './Form.css'
import validation from "../Validation/Validation";
import { useState } from "react"

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState ({
        email:'',
        password:''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value //Por cada name, crea un elemento en el objeto con un valor determinado
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSumit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
    <div className='form'>
        
        <form onSubmit={handleSumit}>
        <label htmlFor="">Email:</label>
        <input type="email" name='email' value={userData.email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        
        <label htmlFor="">Password:</label>
        <input type="password" name='password' value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}

        <button>Sumbit</button>
        </form>
    </div>)
}

export default Form