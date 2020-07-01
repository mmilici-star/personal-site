import React from "react";
import CartoonImg from "./cartoon-img.png";
import AboutMeCSS from "./about-me.css";

function AboutMe() {
	const currentYear = new Date().getFullYear() - 2018;

	return (
		<div className="About-Me-Component">
			<h3 className="header-tag">About Me</h3>
			<div className="About-Me-Div">
				<img className="cartoon-img" src={CartoonImg} alt="Cartoon of Matt" />

				<div className="Bio">
					<p>Hey, What's up!</p>
					<p>My name is Matt Milici and welcome to my personal site!</p>
					<p>
						Currently, I am a Financial Analyst for a telecommunications company
						based out of San Diego. I graduated from Penn State {currentYear}{" "}
						years ago with a degree in Finance and Minor in Information Science
						and Technology. I recently started a 6 month Web Development
						bootcamp and will be using this site to showcase my work as well as
						sharpen my skills!
					</p>
				</div>
			</div>
		</div>
	);
}
export default AboutMe;
