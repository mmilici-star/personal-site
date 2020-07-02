import React from "react";
import WorkCard from "./resume/work-component";
import workExperiences from "./resume/work-experiences";
import Education from "./education/education";
import EducationExperiences from "./education/education-detail";
import ResumeCSS from "./work-experience.css";

function Resume() {
	return (
		<div className="Resume-Div row">
			<div className="Work-Experiences-Div column">
				<h1 className="header-tag">Work Experience</h1>
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

			<div className="Education-Div column">
				<h1 className="header-tag">Education</h1>
				<div>
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
