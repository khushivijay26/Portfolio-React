import React from "react";
import reactJs from "./logo/reactjs.png";
import nextJs from "./logo/next-js.1024x1024.png";
import figma from "./logo/figma.png";
import javaScript from "./logo/js.png";
import html from "./logo/html-5.png";
import css from "./logo/css.png";
import bootstrap from "./logo/bootstrap.png";
import tailwind from "./logo/tailwind-css.1024x615.png";
import jest from "./logo/Jest.png";
import git from "./logo/github.png";

function skill_1() {
	return {
		logo: reactJs,
		title: "ReactJs",
		keywords: ["ReactJs"],
		className: "reactJs",
	};
}

function skill_2() {
	return {
		logo: nextJs,
		title: "NextJs",
		keywords: ["NextJs"],
		className: "nextJs",
	};
}

function skill_3() {
	return {
		logo: figma,
		title: "Figma",
		keywords: ["Figma"],
		className: "figma",
	};
}

function skill_4() {
	return {
		logo: javaScript,
		title: "JavaScript",
		keywords: ["JavaScript"],
		className: "javaScript",
	};
}

function skill_5() {
	return {
		logo: html,
		title: "HTML",
		keywords: ["HTML"],
		className: "html",
	};
}

function skill_6() {
	return {
		logo: css,
		title: "CSS",
		keywords: ["CSS"],
		className: "css",
	};
}

function skill_7() {
	return {
		logo: bootstrap,
		title: "Bootstrap",
		keywords: ["Bootstrap"],
		className: "bootstrap",
	};
}

function skill_8() {
	return {
		logo: tailwind,
		title: "Tailwind CSS",
		keywords: ["Tailwind CSS"],
		className: "tailwind",
	};
}

function skill_9() {
	return {
		logo: jest,
		title: "Jest Testing Library",
		keywords: ["Jest Testing Library"],
		className: "jest",
	};
}

function skill_10() {
	return {
		logo: git,
		title: "GitHub",
		keywords: ["GitHub"],
		className: "git",
	};
}

const mySkills = [
	skill_1,
	skill_2,
	skill_3,
	skill_4,
	skill_5,
	skill_6,
	skill_7,
	skill_8,
	skill_9,
	skill_10,
];

export default mySkills;
