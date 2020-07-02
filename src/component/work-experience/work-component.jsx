import React from "react";

function WorkCard(props) {
	return (
		<>
			<div className="">
				<div className="">
					<h2 className="color ">{props.title}</h2>
				</div>
				<div className="">
					<h3 className="color">{props.name}</h3>
					<p className="color">
						<i>{props.time}</i>
					</p>
				</div>
				<div className="clearfix">
					<p className="color">{props.jobDescription}</p>
				</div>
			</div>
		</>
	);
}
export default WorkCard;
