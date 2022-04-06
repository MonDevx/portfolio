import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'React.js',
		'JavaScript',
		'Flutter',
		'HTML',
		'CSS',
		'VB.net',
		'Java',
		'C#',
		'PL/SQL',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Solution Developer – Peemapod Neamkur"
				description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting."
				keywords={[
					'Software Engineer',
					'Front-End',
					'Full-Stack',
					'React',
					'JavaScript',
					'CSS',
					'MUI',
					'VB.net',
					'Java',
					'C#',
					'PL/SQL',
				]}
			/>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Peemapod Neamkur 👋
				</h1>
				<p className="my-8 text-lg">
					I am a passionate Software Engineer, specialised in front-end
					development using React and TypeScript. As an advocate for web
					performance and accessibility and an evangelist for the Jamstack, I
					create amazing web applications to make the internet a better place.
					You can talk to me about{' '}
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
						href="https://github.com/jakeherp/portfolio"
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
