import { IJob } from '@types';

import { Job } from './Job';
import { mockJobs } from '../../../mockData';

export default {
	title: 'molecules/Job',
	component: Job,
};

export const JobStory = (args: Omit<IJob, 'description'>) => <Job {...args} />;

JobStory.storyName = 'Job';
JobStory.args = mockJobs[0];
