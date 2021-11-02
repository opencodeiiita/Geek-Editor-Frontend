import React, { Component } from "react";
import "./Compiler.css";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import axios from 'axios'
import { languages } from "prismjs";

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

    componentDidMount() {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        if ((accessToken == null || accessToken == undefined) && (refreshToken == null || refreshToken == undefined)) {
            window.location.href='/';
        }
    }

    handleKeyDown(evt) {
        if (evt.keyCode === 13) {
            console.log("enter key was pressed");
            let element = this.myRef.current;
            let next = document.createElement("li");
            element.appendChild(next);
        }
        if (evt.keyCode === 8) {
            console.log("backspace key was pressed");
            let ele = document.getElementById("source");
            if (ele.value.endsWith("\n")) {
                let element = this.myRef.current;
                if (element.lastElementChild)
                    element.removeChild(element.lastElementChild);
            }
        }
        if (evt.key === 'Tab') {
            evt.preventDefault();
            console.log("tab key was pressed");
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
    input = (event) => {
		event.preventDefault();
        // console.log(event.target.value);
		this.setState({ "input": event.target.value });
		localStorage.setItem("input", event.target.value)
	 
	  };
	  userInput = (event) => {
		event.preventDefault();
		this.setState({ user_input: event.target.value });
	  };
	  language = (event) => {
	   
		event.preventDefault();
	   
		this.setState({ language_id: event.target.value });
		localStorage.setItem('language_Id',event.target.value)
	   
	  };
	
	  submit = async (e) => {
		e.preventDefault();

        let language;
        switch(this.state.language_id) {
            case '54' : 
            language = 'C++';
            break;
            case '50' : 
            language = 'C';
            break;
            case '62' : 
            language = 'Java';
            break;
            case '71' : 
            language = 'Python';
            break;
        }

        //save code
        const body = {
            userId : localStorage.getItem('id'),
            code : this.state.input,
            language : language,
            languageCode : this.state.language_id
        }
        const saveRes = await axios.post('http://localhost:8000/code/submitCode/', body)
        console.log(saveRes)
        if (saveRes.data.success) {
            alert('your code has been saved successfully');
        } else {
            alert('There was some problem saving your code');
        }
	
		let outputText = document.getElementById("output");
		outputText.innerHTML = "";
		outputText.innerHTML += "Creating Submission ...\n";
		const response = await fetch(
		  "https://judge0-ce.p.rapidapi.com/submissions",
		  {
			method: "POST",
			headers: {
			  "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
			  "x-rapidapi-key": "f462781fd4msh8367cb31ee5140ap15f051jsncb0ebb1b8e24", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
			  "content-type": "application/json",
			  accept: "application/json",
			},
			body: JSON.stringify({
			  source_code: this.state.input,
			  stdin: this.state.user_input,
			  language_id: this.state.language_id,
			}),
		  }
		);
		outputText.innerHTML += "Submission Created ...\n";
		const jsonResponse = await response.json();
        // console.log("input",jsonResponse);
	
		let jsonGetSolution = {
		  status: { description: "Queue" },
		  stderr: null,
		  compile_output: null,
		};
	
		while (
		  jsonGetSolution.status.description !== "Accepted" &&
		  jsonGetSolution.stderr == null &&
		  jsonGetSolution.compile_output == null
		) {
		  outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
		  if (jsonResponse.token) {
			let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
	
			const getSolution = await fetch(url, {
			  method: "GET",
			  headers: {
				"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
				"x-rapidapi-key": "f462781fd4msh8367cb31ee5140ap15f051jsncb0ebb1b8e24", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
				"content-type": "application/json",
			  },
			});
	
			jsonGetSolution = await getSolution.json();
            // console.log("output",jsonGetSolution);

		  }
		}
		if (jsonGetSolution.stdout) {
		  const output = atob(jsonGetSolution.stdout);
	
		  outputText.innerHTML = "";
	
		  outputText.innerHTML += `Output :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
		} else if (jsonGetSolution.stderr) {
		  const error = atob(jsonGetSolution.stderr);
	
		  outputText.innerHTML = "";
	
		  outputText.innerHTML += `\n Error :${error}`;
		} else {
		  const compilation_error = atob(jsonGetSolution.compile_output);
	
		  outputText.innerHTML = "";
	
		  outputText.innerHTML += `\n Error :${compilation_error}`;
		}
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
                                                onChange={this.input}
                                                className={`${mode}-text source col1`}
                                                value={this.state.input}
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
                                        <button className="button-run" onClick={this.submit}>RUN</button>
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
                                        // readOnly
                                        id="output"
                                        className={`Output ${mode}-text ${mode}-textarea`}
                                        placeholder="Output will be displayed here"
                                        readOnly={true}
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