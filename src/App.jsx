import React from "react";
import "./App.css";
import Header from "./component/header/header";
import AboutMe from "./component/about-me/about-me";
import Resume from "./component/work-experience/work-experience";
import ContactMe from "./component/contact-me/contact-me";

function App() {
	return (
		<>
			<Header />
			<AboutMe />
			<Resume />
			<ContactMe />
		</>
	);
}

export default App;
