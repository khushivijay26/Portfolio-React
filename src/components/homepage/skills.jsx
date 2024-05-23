import React from "react";
import "./styles/article.css";

const Skill = (props) => {
	const { logo, title, className } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<img
						src={logo}
						alt={title}
						className={`skill-${className}`}
					/>
					<div className="homepage-article-title">{title}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;
