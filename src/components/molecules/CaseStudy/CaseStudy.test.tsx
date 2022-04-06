import { CaseStudy } from '../CaseStudy';
import { mockCaseStudy } from '../../../mockData';
import { render } from '@testing-library/react';

describe('CaseStudy', () => {
	it('renders correctly', () => {
		const { container } = render(<CaseStudy {...mockCaseStudy} />);
		expect(container).toMatchSnapshot();
	});
});
