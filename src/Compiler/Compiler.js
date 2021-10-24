import React, { Component } from "react";
import "./Compiler.css";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

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
        this.myRef = React.createRef();
    }

    handleKeyDown(evt) {
        if (evt.keyCode === 13) {
            console.log("ok");
            var element = this.myRef.current;
            var next = document.createElement("li");
            element.appendChild(next);
        }
        if (evt.keyCode === 8) {
            console.log("ok");
            var ele = document.getElementById("source");
            if (ele.value.endsWith("\n")) {
                var element = this.myRef.current;
                if (element.lastElementChild)
                    element.removeChild(element.lastElementChild);
            }
        }
        if (evt.key === 'Tab') {
            evt.preventDefault();
            let ele = document.getElementById("source");
            let start = ele.selectionStart;
            let end = ele.selectionEnd;
            // If tab spaces are wanted
            // ele.value = ele.value.substring(0, start) + "\t" + ele.value.substring(end);
            // If 4 spaces are wanted
            ele.value = ele.value.substring(0, start) + "    " + ele.value.substring(end);
            // put caret at right position again
            ele.selectionStart =
            ele.selectionEnd = start + 4;
        }
    }

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
    };

    render() {
        let mode = this.props.mode;
        // console.log(mode);
        return (
            <>
                <div className={`compiler-bg compiler-background-${mode} `}>
                    <h1 className={`${mode}-text`}><span>C</span>ompiler</h1>
                    <div className="hmm">
                        <div className="main-container">
                            <div className="main-left">
                                <ScrollSync>
                                    <div className={`code code-${mode}`}>
                                        <ScrollSyncPane>
                                            <ol
                                                id="line-num"
                                                className={`${mode}-text`}
                                                ref={this.myRef}
                                            >
                                                <li></li>
                                            </ol>
                                        </ScrollSyncPane>
                                        <ScrollSyncPane>
                                            <textarea
                                                ref={this.textRef}
                                                required
                                                name="solution"
                                                id="source"
                                                // onChange={this.input}
                                                className={`${mode}-text source col1`}
                                                // value={this.state.input}
                                                placeholder="Enter code here :)"
                                                onKeyDown={this.handleKeyDown.bind(
                                                    this
                                                )}
                                                // readOnly="false"
                                            ></textarea>
                                        </ScrollSyncPane>
                                    </div>
                                </ScrollSync>
                                <div className="compilerFotter">
                                    <div className={`fotIcon ${mode}-icon`}>
                                        <i className="fa fa-copy"></i>
                                        <i className="fa fa-paste"></i>
                                    </div>
                                    <div className="fot-right">
                                        <div className="languageSelector">
                                            <select
                                                value={this.state.language_id}
                                                onChange={this.language}
                                                id="tags"
                                                className="language"
                                            >
                                                <option value="54">C++</option>
                                                <option value="50">C</option>
                                                <option value="62">Java</option>
                                                <option value="71">
                                                    Python
                                                </option>
                                            </select>
                                        </div>
                                        <button class="button-run">RUN</button>
                                    </div>
                                </div>
                            </div>
                            <div className="main-right">
                                <div
                                    className={`${mode}-text user  user-input`}
                                >
                                    <div className="user-head">
                                        <h2>Input</h2>
                                        <div className={`headicon ${mode}-icon`}>
                                            <i className="fa fa-copy"></i>
                                            <i className="fa fa-paste"></i>
                                        </div>
                                    </div>
                                    <textarea
                                        id="input"
                                        className={`Input ${mode}-text ${mode}-textarea`}
                                        onChange={this.userInput}
                                        placeholder="1 2 3 4 5"
                                    ></textarea>
                                </div>
                                <div className=" user user-output">
                                    <div className="user-head">
                                        <h2>Output</h2>
                                        <div className={`headicon ${mode}-icon`}>
                                            <i className="fa fa-copy"></i>
                                        </div>
                                    </div>
                                    <textarea
                                        readonly
                                        id="output"
                                        className={`Output ${mode}-text ${mode}-textarea`}
                                        placeholder="Output will be displayed here"
                                        readOnly="false"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
