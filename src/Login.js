import {useState} from 'react';
import { Redirect } from "react-router-dom";
import './Login.css';
import logo from './User.png'
import firebase from './firebase'
function Login() {
  const [username,setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [red,setRed] = useState("");
  
  function changeName(e){
    
    setUsername(e.target.value);
  }
  function changePassword(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    const docRef = firebase.firestore().collection("users").doc(username);
    docRef.get().then((doc) => {
      if (doc.exists) {
        if(password === doc.data().password){
          setRed(doc.data().access);
        }
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

    
    
  }
  if(red === "instructor"){
    return(<Redirect to="/instructor"/>);
  }else if(red==="student"){
    return(<Redirect to="/student"/>);

  }else{
  return (
  <div className="LoginBack">
  <div className="Loginbox">
		<img src={logo} className="User" alt = "Logo"/>
		<h1>Login Here</h1>
		<form onSubmit={handleSubmit}>
			<p>UserName</p>
			<input type="text" onChange={changeName} value={username} name="" placeholder="Enter UserName Here"/>
			<p>Password</p>
			<input type="password" onChange={changePassword} value={password} name="" placeholder="Enter Password Here"/>
			<input  type="submit" name="" value="Login"/>
		</form>
	</div></div>
    
    );
  }
}

export default Login;
