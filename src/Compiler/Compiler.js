import React, { Component } from "react";
import "./Compiler.css";
import Navbar from "../Components/Navbar";

require("dotenv").config();

export default class Compiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: localStorage.getItem("input") || ``,
            output: ``,
            language_id: localStorage.getItem("language_Id") || 2,
            user_input: ``,
        };
        this.myRef=React.createRef();
    }

    handleKeyDown(evt) {
        if(evt.keyCode===13){
            console.log("ok");
            var element=this.myRef.current;
            var next=document.createElement("li");
            element.appendChild(next);
        }
        if(evt.keyCode===8){
            console.log("ok");
            var ele=document.getElementById("source");
            if(ele.value.endsWith('\n')){
                var element=this.myRef.current;
                if(element.lastElementChild)
                    element.removeChild(element.lastElementChild);
            }
        }

    };

    /* 1.Write Code here for taking value of input, language_id, user_input from local storage*/

    submit = async (e) => {
        e.preventDefault();
        let outputText = document.getElementsById("output");
        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";
        /* 2. Write Code for creating submission here */

        outputText.innerHTML += "Submission Created ...\n";
        /* 3. Write Code for getting a submission here */

        /* 4. Write Code for getting errors or displaying submissison here */
    }


    render() {
        let mode = this.props.mode;
        // console.log(mode);
        return (
            <>
                <Navbar check = {this.props.check} checkfunc = {this.props.checkfunc} thememode = {mode} />
                <div className={`compiler-bg background-${mode}`}>
                    <h1 className={`${mode}-text`}>Compiler</h1>
                    <div className="hmm">
                        <label htmlFor="solution ">
                            <span className= {`${mode}-text ${mode}inputHeading `}>Code Here</span>
                        </label>
                        <div className="code">
                            <ol id="line-num" class="col1" ref={this.myRef}>
                                <li></li>
                            </ol>
                            <textarea
                                ref={this.textRef}
                                required
                                name="solution"
                                id="source"
                                class="col1"
                                // onChange={this.input}
                                className={`${mode}-text source`}
                                // value={this.state.input}
                                placeholder="Enter code here :)"
                                onKeyDown={this.handleKeyDown.bind(this)}
                                // readOnly="false"
                            ></textarea>
                        </div>
                        <button class="button-run">RUN</button>
                        <div className="languageSelector">
                            <label htmlFor="tags" className="mr-1">
                                <b className={`${mode}-text chooseLanguage`}>Language:</b>
                            </label>
                            <select
                                value={this.state.language_id}
                                onChange={this.language}
                                id="tags"
                                className="language"
                            >
                                <option value="54">C++</option>
                                <option value="50">C</option>
                                <option value="62">Java</option>
                                <option value="71">Python</option>
                            </select>
                        </div>
                    </div>
                    <div className={`${mode}-text user-input`}>
                        <span className="">User Input</span>
                        <br />
                        <textarea
                           id="input"
                            className={`input ${mode}-text`}
                            onChange={this.userInput}
                            placeholder="User input goes here"
                        ></textarea>
                    </div>
                    <div className="">
                        <div>
                            <span className={`${mode}-text`}>Output</span>
                            <textarea
                                readonly
                                id="output"
                                placeholder="Output will be displayed here"
                                readOnly="false"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
