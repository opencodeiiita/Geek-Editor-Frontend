import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// Components
import Home from "./Loginsignup/Home";
import User from "./Components/User";
import Compiler from "./Compiler/Compiler";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Components/Navbar";
export default function App() {
    const [check, setCheck] = useState('0');
    let [mode, setMode] = useState('light');
    const checkfunc = () => {
        if (check === '0') {
            setCheck('1');
        }
        else {
            setCheck('0');
        }


        if (mode === 'light') {
            setMode('dark');

        }
        else {
            setMode('light');

        }
    };
    return (
        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/user"><User /></Route>
                <Route render={({ location }) => {
                    console.log(location.key);
                    return (
                        <>
                            <Navbar check={check} checkfunc={checkfunc} thememode={mode} />
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={500}>
                                    <Switch>
                                        <Route exact path="/compiler" children={<Compiler check={check} checkfunc={checkfunc} mode={mode} />}></Route>
                                        <Route exact path="/dashboard" children={<Dashboard check={check} checkfunc={checkfunc} mode={mode} />}></Route>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </>);
                }} />

            </Switch >
        </>
    );
}