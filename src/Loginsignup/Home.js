import React, { useState , useContext, useEffect } from 'react';
import axios from "axios";
import "./Home.css";

function updateLocalStorage(tokens) {
    localStorage.setItem('accessToken', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
    localStorage.setItem('id', tokens.id)
}

const LogSign = () => {

    //signup
    const [fNameSignup, setFNameSignup] = useState();
    const [lNameSignup, setLNameSignup] = useState();
    const [userNameSignup, setUserNameSignup] = useState();
    const [emailSignup, setEmailSignup] = useState();
    const [passwordSignup, setPasswordSignup] = useState();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        if ((accessToken != null || accessToken != undefined) && (refreshToken != null || refreshToken != undefined)) {
            window.location.href='/compiler';
        }
    })

    async function signupSubmit(e) {
        e.preventDefault();
        const body = {
            fname: fNameSignup,
            lname: lNameSignup,
            username: userNameSignup,
            email: emailSignup,
            password: passwordSignup,
        };  
        try {
            const res = await axios.post('http://localhost:8000/user/register/', body)
            console.log(res)
            if (res.data.success) {
                alert('User Successfully Registered, Login to continue')
            }
        } catch (err) {
            console.log(err)
            alert('Some error occured');
        }
    }

    //login
    // const [emailSignin, setEmailSignin] = useState();
    const [userNameSignin, setUserNameSignin] = useState();
    const [passwordSignin, setPasswordSignin] = useState();

    async function signinSubmit(e) {
        e.preventDefault()
        const body = { 
            email: userNameSignin,
            password: passwordSignin,
        }
        try {
            const res = await axios.post('http://localhost:8000/user/login/', body)
            console.log(res)
            if (res.data.success) {
                const len = res.data.data.tokens.length;
                const accessToken = res.data.data.tokens[len-2].token;
                const refreshToken = res.data.data.tokens[len-1].refToken;
                const userID = res.data.data._id;
                updateLocalStorage({accessToken, refreshToken, id:userID});
                window.location.href='/compiler'
            }
        } catch (err) {
            console.log(err)
            alert('Some error occured');
        }
    };
    
    function isUserNameValid(username) {
        const res = /^[a-z0-9_.]+$/.exec(username);
        const valid = !!res;
        return valid;
    }
    
    const [signupShow, setSignupShow] = useState(0);
    function signupButton() {
        if (signupShow) {
            setSignupShow(0)
        } else {
            setSignupShow(1);
        }
    }

    // console.log(`${'a' + (1^signupShow)}`);
    return (
        <>

        <div className="full">
            <div className={ signupShow === 0 ? "container" : "container right-panel-active"} id="container">
                <div className={`form-container sign-up-container a1`}>
                    <form>
                    <h1 className="h1">Create Account</h1>
                    <input className="input" required id="name_signup" type="text" placeholder="First Name" onChange={(e) => setFNameSignup(e.target.value)}/>
                    <input className="input" required id="name_signup" type="text" placeholder="Last Name" onChange={(e) => setLNameSignup(e.target.value)}/>
                    <input className="input" required id="name_signup" type="text" placeholder="User Name" onChange={(e) => setUserNameSignup(e.target.value)}/>
                    <input className="input" required id="email_signup" type="email" placeholder="Email" onChange={(e) => setEmailSignup(e.target.value)}/>
                    <input className="input" required id="password_signup" type="password" placeholder="Password" onChange={(e) => setPasswordSignup(e.target.value)}/>
                    <button className="button" type="submit" onClick={signupSubmit}>
                        Sign Up
                    </button>
                    </form>
                </div>
                <div className={`form-container sign-in-container same2 a0`}>
                    <form action="/compiler">
                    <h1 className="h1">Sign in</h1>
                    <input className="input" required id="email_signin" type="email" placeholder="Email" onChange={(e) => setUserNameSignin(e.target.value)}/>
                    <input className="input" required id="pass_signin" type="password" placeholder="Password" onChange={(e) => setPasswordSignin(e.target.value)}/>
                    <a className="a" href="#">
                        Forgot your password?
                    </a>
                    <button className="button" onClick={signinSubmit}>
                        Sign In
                    </button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                       <div className={`overlay-panel overlay-left  a1`}>
                            <h1 className="h1">Welcome Back!</h1>
                            <p className="p">
                            {" "}
                                To keep connected with us please login with your personal info
                            </p>
                            <button onClick={signupButton} className="button" id="ghost1" id="signIn">
                                Sign In
                            </button>
                       </div>
                       <div className={`overlay-panel overlay-right a0`}>
                            <h2 className="h2" style={{ color: "black" }}>
                            {" "}
                                Don't Have a account!
                            </h2>
                            <h3 className="h3" style={{ color: "black" }}>
                                Wanna sign up either?
                            </h3>
                            <b>
                            <button onClick={signupButton} className="button" style={{ color: "black" }} id="signUp">
                                Sign Up
                            </button>
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default LogSign