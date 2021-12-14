import React, {useState} from 'react'
import LoginForm from './Components/LoginForm';
import './index.css';

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
    //this code snippet handle the form
    if(details.email === adminUser.email && details.password === adminUser.password){   
          console.log('logged in');
          alert('logged in');
          setUser ({
            name: details.name,
            email: details.email,
          })
    }else{
      setError('Details do not match');
      alert('Details do not match');
        }

  }

    const Logout = () => { //for this logout code to work, we will call it on the logout button in the app
    setUser({name:"", email:""});
    }

  return (
    <div className="App">
     {(user.email !== '') ? (
       <div className="welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
       </div>

     ) : (
       <LoginForm Login={Login} error={error} /> // variable login of line 17 is pass in here so that it will be called on when submitting 
     )}
    </div>
  );
}

export default App;
