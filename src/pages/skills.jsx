import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "../components/skills/style/skill.css";
import mySkills from "../data/skills";
import Skill from "../components/homepage/skills";

const Skills = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "skills");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Skills | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.skills.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.skills.description}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{mySkills.map((skill, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Skill
											key={(index + 1).toString()}
											logo={skill().logo}
											title={skill().title}
                      className={skill().className}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skills;
