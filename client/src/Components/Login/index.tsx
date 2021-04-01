import React, {  useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../../App'


const Login = () => {
const {state, dispatch} = useContext<any>(UserContext)
  const pageTitle = 'Login';

    const history = useHistory()
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("");

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert('Invalid Email')
            return
        }
        fetch('/signin', {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               email, password
            })
        }).then(res => res.json())
        .then(data => {
          console.log(data)
            if(data.error){
            console.log(data.error)
            }
            else{
                localStorage.setItem("jwt", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                dispatch({type:"USER", payload:data.user})
                console.log('Successfull Logged In')
                history.push('/')
                console.log(data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }
  

  return (
    <main>
      <div className="pageContent">
        <div className="loginCont">
            <div className="login">
                <h2>{pageTitle}</h2>
                <div className="loginWrap">
                <div className="formGroup">
                    <label>Email</label>
                    <input type="text" placeholder="Enter email" 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>                

                <div className="formGroup">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}/> 
                </div>

                <div className="formGroup text-right">
                    <button className="btn btnPrime"  onClick={() => PostData()}>Login</button>
                </div>
                <div className="formGroup mt-1 topBorder text-center">
                    <label className=" mt-1">
                        Don't have an account ? Cliekc here to  <Link to="/SignUp">Register</Link> here
                    </label>
                </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
