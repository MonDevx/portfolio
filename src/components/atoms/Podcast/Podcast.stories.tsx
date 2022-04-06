import { IPodcast } from '@types';
import { mockPodcast } from '../../../mockData';
import { Podcast } from './Podcast';

export default {
	title: 'atoms/Podcast',
	component: Podcast,
};

export const PodcastStory = (args: IPodcast) => <Podcast {...args} />;

PodcastStory.storyName = 'Podcast';
PodcastStory.args = mockPodcast;
