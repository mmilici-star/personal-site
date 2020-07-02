import React from "react";
import EducationCSS from "./education.css";

function Education(props) {
	return (
		<div className="Education-div">
			<h2 className="school">{props.school}</h2>
			<p className="">
				<i>{props.time}</i>
			</p>
			<p className="Degree">{props.degree}</p>
		</div>
	);
}
export default Education;
