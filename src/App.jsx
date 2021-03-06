import React from "react";
import "./App.css";
import Header from "./component/header/header";
import AboutMe from "./component/about-me/about-me";
import Resume from "./component/work-experience/work-experience";
import ContactMe from "./component/contact-me/contact-me";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<AboutMe />
			<Resume />
			<ContactMe />
			<Footer />
		</>
	);
}

export default App;
