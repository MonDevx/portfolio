import { ICaseStudy } from '@types';

export const mockCaseStudy: ICaseStudy = {
	id: 'senior-project-real-estate',
	title: 'Real Estate Web Application',
	slug: 'senior-project-real-estate-web-application',
	seoDescription: 'Senior project: a full-stack real estate website built with React.js and Node.js.',
	client: {
		name: 'Mae Fah Luang University (Senior Project)',
		logo: '/assets/companies/mfu.webp',
	},
	content:
		'Developed a real estate website as my senior project using React.js and Node.js.\n\n' +
		'- Built a full-stack web application for listing and searching real estate properties\n' +
		'- Implemented front-end with React.js and back-end REST API with Node.js\n' +
		'- Managed data with a relational database\n\n' +
		'[GitHub](https://qrgo.page.link/85Lpw)\n',
	technologies: [
		'React.js',
		'Node.js',
	],
	primaryImage: '/assets/casestudy/webEx.webp',
	secondaryImages: [
		'/assets/casestudy/webEx2.webp',
		'/assets/casestudy/mb.webp',
	],
};
