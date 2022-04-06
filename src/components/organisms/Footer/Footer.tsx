import { SocialIcons } from 'Molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="flex justify-between mt-8 md:mt-20 px-4 md:px-20 py-8">
			<span>&copy; {new Date().getFullYear()} Peemapod Neamkur</span>
			<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://www.github.com/MonDevX',
						icon: 'GITHUB',
					},
					{
						name: 'LinkedIn',
						url: 'https://th.linkedin.com/in/peemapod-neamkur-a3b6721a8',
						icon: 'LINKEDIN',
					},
				]}
			/>
		</footer>
	);
};

export { Footer };
