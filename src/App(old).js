import React, { useState } from "react";

// Styles
import "./styles.css";

// Components
import CodeEditor from "./Components/CodeEditor";
import Form from "./Components/Form";

export default function App() {
	const [editorLanguage, setEditorLanguage] = useState("javascript");

	return (
		<div className="App">
			<h1>React code syntax hightlighter</h1>

			<fieldset>
				<legend>Choose language:</legend>
				<input
					type="radio"
					id="javascript"
					name="language"
					value="javascript"
					checked={editorLanguage === "javascript"}
					onChange={() => setEditorLanguage("javascript")}
				/>
				<label htmlFor="javascript">JavaScript</label>
				<input
					type="radio"
					id="xml"
					name="language"
					value="markup"
					checked={editorLanguage === "markup"}
					onChange={() => setEditorLanguage("markup")}
				/>
				<label htmlFor="xml">XML</label>
				<input
					type="radio"
					id="css"
					name="language"
					value="css"
					checked={editorLanguage === "css"}
					onChange={() => setEditorLanguage("css")}
				/>
				<label htmlFor="css">CSS</label>
			</fieldset>

			<CodeEditor language={editorLanguage} />
		</div>
	);
}
