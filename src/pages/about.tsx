import { IEducation, IJob} from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
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

const AboutPage: NextPage<IProps> = ({  jobs, education }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="About Peemapod Neamkur, a Software Developer from BKK"
				description="			Able to adapt and work in multiple positions,
				quick learner and able to study new things on my
				own through Udemy. Keen Interest in
				programming."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Peemapod Neamkur
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Software Developer from BKK
				</h2>
				<p className="mt-8">
					Able to adapt and work in multiple positions, quick learner and able
					to study new things on my own through Udemy. Keen Interest in
					programming
				</p>

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />

				<div className="flex justify-center mt-8">
					<Button
						href="/cv-2022.pdf"
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
}

export default AboutPage;
