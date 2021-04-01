import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'


const SignUp = () => {
    const history = useHistory()
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("");

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert('Invalid Email')
            return
        }
        fetch('/SignUp', {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, password
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
            console.log(data.error)
            }
            else{
                console.log(data.message)
                history.push('/Login')
            }
        }).catch(err => {
            console.log(err)
        })
    }
  const pageTitle = 'Register';
  

  return (
    <main>
      <div className="pageContent">
        <div className="loginCont">
            <div className="login">
                <h2>{pageTitle}</h2>
                <div className="loginWrap">
                <div className="formGroup">
                    <label>Email</label>
                    <input type="text" placeholder="email" 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="formGroup">
                    <label>Name</label>
                    <input type="text" placeholder="name"
                        value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="formGroup">
                    <label>Password</label>
                    <input type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}/> 
                </div>
               

                <div className="formGroup text-right">
                    <button className="btn btnPrime" onClick={() => PostData()}>Register</button>
                </div>
                <div className="formGroup mt-1 topBorder text-center">
                    <label className=" mt-1">
                        Already have an account ? <Link to="/Login">Sign In</Link> here
                    </label>
                </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
