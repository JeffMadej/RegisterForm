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
          <div>
            {formState.firstName.length < 2 && (<p>First Name Must Be Longer Than Two Characters.</p>)}
            {formState.lastName.length < 2 && (<p>Last Name Must Be Longer Than Two Characters.</p>)}
            {formState.email.length < 5 && (<p>Email Must Be Longer Than Five Characters.</p>)}
            {formState.password.length < 8 && (<p>Password Must Be Longer Than Eight Characters.</p>)}
            {formState.confirmPassword.length < 8 && (<p>Passwords Must Match.</p>)}
          </div>
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
