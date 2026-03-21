import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'React.js',
		'Node.js',
		'Flutter',
		'Spring Boot',
		'JavaScript',
		'TypeScript',
		'Java',
		'VB.NET',
		'SQL',
		'Docker',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Full Stack Developer – Peemapod Neamkur"
				description="Full Stack Developer with 3 years' experience in web and mobile applications using React.js, Node.js, Flutter, and Spring Boot."
				keywords={[
					'Software Engineer',
					'Full-Stack',
					'React',
					'Node.js',
					'Flutter',
					'Spring Boot',
					'JavaScript',
					'TypeScript',
					'Java',
					'VB.NET',
					'SQL',
					'Docker',
				]}
			/>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Peemapod Neamkur 👋
				</h1>
				<p className="my-8 text-lg">
					I am a passionate Full Stack Developer with 3 years&apos; experience
					building web and mobile applications. Specialised in React.js,
					Node.js, Flutter, and Spring Boot. You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
				<p>
					P.S. this website is open-source and available on{' '}
					<a
						href="https://github.com/MonDevX/portfolio"
						title="Link to Github repository"
						target="_blank"
						rel="noopener noreferrer"
						className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
					>
						Github
					</a>
					.
				</p>
			</Container>
		</AnimatePage>
	);
};

export default IndexPage;
