import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mockCaseStudy } from '../../mockData';
import { ICaseStudy } from '@types';
import { mapCaseStudies } from 'utils/mappings/mapCaseStudies';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { CaseStudy } from 'Molecules/CaseStudy';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	caseStudies: ICaseStudy[];
}

const hasGraphCmsConfig = Boolean(
	process.env.NEXT_PUBLIC_GRAPHCMS_PROJECT_ID &&
	process.env.NEXT_PUBLIC_GRAPHCMS_ENV
);

const CaseStudiesPage: NextPage<IProps> = ({ caseStudies }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Software Engineering Case Studies – Peemapod Neamkur"
				description={`Here you can find ${caseStudies.length} case studies of projects I have worked on over the last few years. Learn how I have overcome challenges.`}
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Case Studies
				</h1>
				{caseStudies.map((caseStudy, i) => (
					<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
				))}
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	if (!hasGraphCmsConfig) {
		return {
			props: {
				caseStudies: [mockCaseStudy],
			},
		};
	}

	try {
		const { data } = await client.query({
			query: gql`
			query CaseStudiesQuery {
				caseStudies(orderBy: updatedAt_DESC) {
				  id
				  title
				  slug
				  seoDescription
				  client {
					name
					logo {
					  url
					}
				  }
				  content {
					markdown
				  }
				  technologies {
					... on Skill {
					  name
					}
				  }
				  primaryImage {
					url
				  }
				  secondaryImages {
					url
				  }

				}
			  }
			  
			`,
		});

		return {
			props: {
				caseStudies: mapCaseStudies(data.caseStudies),
			},
		};
	} catch {
		return {
			props: {
				caseStudies: [mockCaseStudy],
			},
		};
	}
}

export default CaseStudiesPage;
