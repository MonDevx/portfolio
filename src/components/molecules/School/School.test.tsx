import { mockSchool } from '../../../mockData';
import { render } from '@testing-library/react';
import { School } from '../School';

describe('School', () => {
	it('renders correctly', () => {
		const { container } = render(<School {...mockSchool} />);
		expect(container).toMatchSnapshot();
	});
});
