import { IEducation } from '@types';

export const mockSchool: IEducation = {
	institute: {
		name: 'Mae Fah Luang University',
		url: 'https://www.mfu.ac.th/',
		logo: '/assets/companies/mfu.webp',
	},
	course: 'B.Sc. in Information Technology (GPA: 2.81)',
	date: '2021-01-01',
	technologies: [
		'Software Development',
		'Database Systems',
		'Web Programming',
		'Mobile Programming',
	],
};
