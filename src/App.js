import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";

// Components
import Home from "./Loginsignup/Home";
import User from "./Components/User";
import Compiler from "./Compiler/Compiler";
import Dashboard from "./Dashboard/Dashboard";

export default function App() {
    const [check, setCheck]= useState('0');
    let [mode, setMode] = useState('light');
    const checkfunc = ()=>{
        if(check==='0'){
            setCheck('1');
        }
        else{
            setCheck('0');
        }


        if(mode==='light'){
            setMode('dark');
            
        }
        else{
            setMode('light')
            
        }
    }
    return (
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/compiler"><Compiler check = {check} checkfunc={checkfunc} mode = {mode} /></Route>
            <Route exact path="/user"><User/></Route>
            <Route exact path="/dashboard" > <Dashboard check = {check} checkfunc={checkfunc} mode={mode}/></Route>
        </Switch>
    );
}
