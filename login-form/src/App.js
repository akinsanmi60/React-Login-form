import React, {useState} from 'react'
import LoginForm from './Components/LoginForm';

function App() {

  const adminUser= { //this is the detail which we will test our login details against
    email: "admin@admin.com", 
    password: "admin123"
  }

// With this hook we get user details once user logged in
  const [user, setUser] = useState({name:"", email:""});
// With this hook we use to check if the user loggin details is correct
const [error, setError] = useState("");

// here we create a function(called login ) that will be called-on when trying to login and we pass details in it
const Login = details => {
  console.log(details);
}

const Logout = () => {
  console.log();
}

  return (
    <div className="App">
     {(user.email != '') ? (
       <div className="welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button>Logout</button>
       </div>

     ) : (
       <LoginForm Login={Login} error={error} /> // variable login of line 17 is pass in here so that it will be called on when submitting 
     )}
    </div>
  );
}

export default App;
