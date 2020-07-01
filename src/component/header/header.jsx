import React from "react";
import Typical from "react-typical";
import MiliciProfilePic from "./milici-profile-pic.png";
import HeaderCSS from "./header.css";

function AboutMe() {
	const currentYear = new Date().getFullYear() - 2018;

	return (
		<div className="Header-div">
			<img
				className="Milici-Profile-Pic"
				src={MiliciProfilePic}
				alt="Matt Milici headshot"
			/>

			<div className="Header-Name-Animated">
				<h1 className="Header-Name">Matt Milici</h1>
				<p className="Animated-Text">
					I am a{" "}
					<Typical
						className="Typical"
						loop={Infinity}
						wrapper="b"
						steps={[
							"Financial Analyst",
							1000,
							"Web Developer",
							1000,
							"Will Dempster's Agent?",
							1000,
							"Surfer",
							1000,
							"Great Friend",
							1000,
						]}
					/>
				</p>
			</div>
		</div>
	);
}
export default AboutMe;
