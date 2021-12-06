import React ,{useState} from 'react'

function LoginForm({Login, error}) { // This is destructuring with props passed in as an object
   // our local details for login
    const [details, setDetails] = useState({name:"", email:"", password:""});
   
    // creating a function for submiting our login and callin the login function passed as props and  we passin details
    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    return ( // the onSubmit event will call the 
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/*ERROR!*/}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={ e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"onChange={ e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm
