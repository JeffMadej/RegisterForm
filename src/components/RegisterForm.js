import React from 'react';

const RegisterForm =({onChangeHandler, onSubmitHandler }) =>{
    const style={
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'aqua',
        borderRadius: "20px",
        

    }
    return(
        <div style={style} className="card col-5 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <label>First Name:</label><br/>
                <input type="text" className="col-8"name="firstName" onChange={onChangeHandler}/>
                <br/>        
                <label>Last Name:</label><br/>
                <input type="text" className="col-8"name="lastName" onChange={onChangeHandler}/>
                <br/>        
                <label>Email:</label><br/>
                <input type="email" className="col-8"name="email" onChange={onChangeHandler}/>
                <br/>        
                <label>Password:</label><br/>
                <input type="password" className="col-8"name="password" onChange={onChangeHandler}/>
                <br/>        
                <label>Confirm Password:</label><br/>
                <input type="password" className="col-8"name="confirmPassword" onChange={onChangeHandler}/>
                <br/>   
                <input class="hi col-6 btn btn-dark"  type="submit" />     
            </form>
        </div>
    );
}
    export default RegisterForm;