import React, { useState , useContext } from 'react';
import axios from "axios";
import "./Home.css";

const LogSign = () => {

    //signup
    const [fNameSignup, setFNameSignup] = useState();
    const [lNameSignup, setLNameSignup] = useState();
    const [userNameSignup, setUserNameSignup] = useState();
    const [emailSignup, setEmailSignup] = useState();
    const [passwordSignup, setPasswordSignup] = useState();

    function signupSubmit() {
        const body = {
            fname: fNameSignup,
            lname: lNameSignup,
            username: userNameSignup,
            email: emailSignup,
            password: passwordSignup,
        };  
    }

    //login
    // const [emailSignin, setEmailSignin] = useState();
    const [userNameSignin, setUserNameSignin] = useState();
    const [passwordSignin, setPasswordSignin] = useState();

    async function signinSubmit() {
        const body = { 
            username: userNameSignin,
            password: passwordSignin,
        }
    };
    
    function isUserNameValid(username) {
        const res = /^[a-z0-9_.]+$/.exec(username);
        const valid = !!res;
        return valid;
    }
    
    const [signupShow, setSignupShow] = useState(0);
    function signupButton() {
        if(isUserNameValid(userNameSignup)) {
            setSignupShow(1 - setSignupShow);
            console.log(signupShow);
        } else {
            alert('Enter a valid Username!');
        }
    }

    return (
        <>

            <div class="full">
                <div className={ signupShow === 0 ? "container" : "container right-panel-active"} id="container">
                <div class="form-container sign-up-container">
                    <form action="/">
                    <h1 class="h1">Create Account</h1>
                    <input class="input" required id="name_signup" type="text" placeholder="First Name" onChange={(e) => setFNameSignup(e.target.value)}/>
                    <input class="input" required id="name_signup" type="text" placeholder="Last Name" onChange={(e) => setLNameSignup(e.target.value)}/>
                    <input class="input" required id="name_signup" type="text" placeholder="User Name" onChange={(e) => setUserNameSignup(e.target.value)}/>
                    <input class="input" required id="email_signup" type="email" placeholder="Email" onChange={(e) => setEmailSignup(e.target.value)}/>
                    <input class="input" required id="password_signup" type="password" placeholder="Password" onChange={(e) => setPasswordSignup(e.target.value)}/>
                    <button class="button" onClick={signupSubmit}>
                        Sign Up
                    </button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="/compiler">
                    <h1 class="h1">Sign in</h1>
                    <input class="input" required id="email_signin" type="email" placeholder="Email" onChange={(e) => setUserNameSignin(e.target.value)}/>
                    <input class="input" required id="pass_signin" type="password" placeholder="Password" onChange={(e) => setPasswordSignin(e.target.value)}/>
                    <a class="a" href="#">
                        Forgot your password?
                    </a>
                    <button class="button" onClick={signinSubmit} href="/compiler">
                        Sign In
                    </button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1 class="h1">Welcome Back!</h1>
                        <p class="p">
                        {" "}
                            To keep connected with us please login with your personal info
                        </p>
                        <button onClick={signupButton} class="button" id="ghost1" id="signIn">
                            Sign In
                        </button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h2 class="h2" style={{ color: "black" }}>
                        {" "}
                            Don't Have a account!
                        </h2>
                        <h3 class="h3" style={{ color: "black" }}>
                            Wanna sign up either?
                        </h3>
                        <b>
                        <button onClick={signupButton} class="button" style={{ color: "black" }} id="signUp">
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
