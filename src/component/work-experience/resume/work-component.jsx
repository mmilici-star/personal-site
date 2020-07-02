import React from "react";
import WorkComponentCSS from "./work-component.css";

function WorkCard(props) {
	return (
		<>
			<div className="work-experience-card">
				<h2 className=" ">{props.title}</h2>

				<div className="Company-Time">
					<h3 className="Company subtitle">{props.name}</h3>
					<p className="Time subtitle">
						<i>{props.time}</i>
					</p>
				</div>
				<div className="clearfix">
					<p className="">{props.jobDescription}</p>
				</div>
			</div>
		</>
	);
}
export default WorkCard;
