import React from "react";

import "./style/article.css";

const Article = (props) => {
	const { logo, title } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<img src={logo} alt={title}/>
				</div>

				<div className="article-right-side">
					<div className="article-title">{title}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
