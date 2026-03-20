import { IJob } from '@types';

export const mockJobs: IJob[] = [
	{
		company: {
			name: 'Bank for Agriculture and Agricultural Cooperatives',
			logo: '/assets/companies/companynoimg.webp',
			url: 'https://www.baac.or.th/',
		},
		jobTitle: 'Full Stack Developer',
		fromDate: 'Aug 2022',
		toDate: null,
		technologies: [
			'React.js',
			'Node.js',
			'Spring Boot',
			'SQL Server',
			'PostgreSQL',
			'Jenkins',
			'Docker',
		],
		description:
			'-   Develop and maintain a back-office loans management system used across bank branches\n-   Create test cases and support System Integration Testing (SIT) and User Acceptance Testing (UAT)\n-   Perform regular system monitoring, maintenance, and optimization\n-   Provide technical support and promptly resolve user-reported issues\n\n',
	},
	{
		company: {
			name: 'PUUMSOFT CO., LTD.',
			logo: '/assets/companies/puumsoft.webp',
			url: 'https://www.puumsoft.com/',
		},
		jobTitle: 'Full Stack Developer',
		fromDate: 'Jan 2022',
		toDate: 'Jul 2022',
		technologies: [
			'VB.NET',
			'SQL Server',
			'Flutter',
		],
		description:
			'-   Contributed to the development of HRM/HRD "Coach" – a corporate HR management system\n-   Developed core application features using VB.NET (for business logic/UI) and optimized database operations in SQL Server\n-   Created and refined stored procedures, improving system performance and functionality\n-   Built custom RDLC reports to facilitate HR analytics and reporting\n-   Assisted in developing the Coach mobile application using Flutter for on-the-go HR management\n\n',
	},
	{
		company: {
			name: 'RISE CONSULTING CO., LTD.',
			logo: '/assets/companies/companynoimg.webp',
			url: '#',
		},
		jobTitle: '.NET Developer (Intern)',
		fromDate: 'May 2021',
		toDate: 'Sep 2021',
		technologies: [
			'.NET',
			'SQL Server',
		],
		description:
			'-   Developed and maintained the system used in bank branch platforms\n-   Created test cases and support SIT, UAT\n-   Performed regular system checks and maintenance\n-   Provided technical support and resolved user issues\n\n',
	},
];
