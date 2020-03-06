import React, {useState} from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import 'bootstrap/dist/css/bootstrap.css';

const App =() => {
  const [ formState, setFormState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
    })
    const onChangeHandler = (e) => {
      e.preventDefault();
      setFormState({
      ...formState,
      [e.target.name]: e.target.value
        });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState);
    }
      return(
        <div className="App">
          <RegisterForm
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}/> 
        <p>Form Data </p>  
        <p>First Name: {formState.firstName}</p> 
        <p>Last Name: {formState.lastName}</p>
        <p>Email: {formState.email}</p>
        <p>Password: {formState.password}</p> 
        <p>Confirm Password: {formState.confirmPassword}</p>          
        </div>
      );
}
    



export default App;
