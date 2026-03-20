import { IEducation, IJob} from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mockJobs, mockSchool } from '../mockData';
import { mapEducation } from 'utils/mappings/mapEducation';
import { mapJobs } from 'utils/mappings/mapJobs';

import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';

import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {

	jobs: IJob[];
	education: IEducation[];
}

const cvDownloadPath = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/PeemapodNeamkur.pdf`;
const hasGraphCmsConfig = Boolean(
	process.env.NEXT_PUBLIC_GRAPHCMS_PROJECT_ID &&
	process.env.NEXT_PUBLIC_GRAPHCMS_ENV
);
const fallbackJobs = [mockJobs[0]];

const AboutPage: NextPage<IProps> = ({ jobs, education }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="About Peemapod Neamkur, a Full Stack Developer from Bangkok"
				description="Full Stack Developer with 3 years' experience in web and mobile applications using React.js, Node.js, Flutter, and Spring Boot."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Peemapod Neamkur
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Full Stack Developer from Bangkok
				</h2>
				<p className="mt-8">
					Full Stack Developer with 3 years&apos; experience in web and mobile
					applications using React.js, Node.js, Flutter, and Spring Boot. Fast
					learner with strong adaptability and passion for continuous skill
					growth. Proven ability to deliver scalable, high-quality solutions in
					agile environments.
				</p>

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					Here is my educational background:
				</p>

				<Education education={education} />

				<div className="flex justify-center mt-8">
					<Button
						href={cvDownloadPath}
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	if (!hasGraphCmsConfig) {
		return {
			props: {
				education: [mockSchool],
				jobs: fallbackJobs,
			},
		};
	}

	try {
		const { data } = await client.query({
			query: gql`
				query AboutPageQuery {
					jobs(orderBy: fromDate_DESC) {
						id
						jobTitle
						fromDate
						toDate
						description {
							markdown
						}
						company {
							name
							url
							logo {
								url
							}
						}
						skills {
							name
						}
					}
					educations(orderBy: date_DESC) {
						id
						course
						date
						courseContents {
							name
						}
						institute {
							name
							url
							logo {
								url
							}
						}
					}
				}
			`,
		});

		return {
			props: {
				education: mapEducation(data.educations),
				jobs: mapJobs(data.jobs),
			},
		};
	} catch {
		return {
			props: {
				education: [mockSchool],
				jobs: fallbackJobs,
			},
		};
	}
}

export default AboutPage;
