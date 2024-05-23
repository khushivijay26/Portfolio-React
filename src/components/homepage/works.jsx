import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import arcgateLogo from "../../images/Arcgate.png";
import chhorrLogo from "../../images/chhorr_logo.png";
import publiciseLogo from "../../images/publiciseLogo.png";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={arcgateLogo}
								alt="Arcgate"
								className="work-image"
							/>
							<div className="work-title">Arcgate</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">
								May 2023 - Present
							</div>
						</div>

						<div className="work">
							<img
								src={chhorrLogo}
								alt="Chhorr-Designs by Aanchal"
								className="work-image"
							/>
							<div className="work-title">
								Chhorr - Designs by Aanchal
							</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">June 2022 - April 2023</div>
						</div>

						<div className="work">
							<img
								src={publiciseLogo}
								alt="Publicis Sapient"
								className="work-image"
							/>
							<div className="work-title">Publicis Sapient</div>
							<div className="work-subtitle">
								Frontend Developer Intern
							</div>
							<div className="work-duration">
								April 2021 - July 2021
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
