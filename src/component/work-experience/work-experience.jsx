import React from "react";
import WorkCard from "./cards";
import workExperiences from "./Resume-Detail";

import Education from "./Education";
import EducationExperiences from "./Education-Detail";

function Resume() {
	return (
		<div className="">
			<h1 className="header-tags">Work Experience</h1>
			<div className="testing1">
				<div>
					{workExperiences.map((workExperience) => {
						return (
							<WorkCard
								name={workExperience.name}
								time={workExperience.time}
								title={workExperience.title}
								jobDescription={workExperience.jobDescription}
							/>
						);
					})}
				</div>
			</div>
			<div className="">
				<div>
					<h1 className="header-tags">Education</h1>

					{EducationExperiences.map((EducationExperience) => {
						return (
							<Education
								school={EducationExperience.school}
								minor={EducationExperience.minor}
								time={EducationExperience.time}
								degree={EducationExperience.degree}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Resume;
