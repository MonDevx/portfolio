jest.mock('@sentry/nextjs', () => ({
	withSentryConfig: jest.fn((config) => config),
}));

describe('next.config.js', () => {
	const env = process.env;

	afterEach(() => {
		process.env = { ...env };
		jest.resetModules();
	});

	it('omits optional deployment settings when env vars are missing', () => {
		delete process.env.NEXT_PUBLIC_ASSET_HOST;
		delete process.env.NEXT_IMAGE_ALLOWED_DOMAINS;
		delete process.env.NEXT_IMAGE_ALLOWED_DOMAINS2;

		const config = require('./next.config.js');

		expect(config.assetPrefix).toBeUndefined();
		expect(config.images.domains).toEqual([]);
	});

	it('includes optional deployment settings when env vars are present', () => {
		process.env.NEXT_PUBLIC_ASSET_HOST = '/portfolio';
		process.env.NEXT_IMAGE_ALLOWED_DOMAINS = 'images.example.com';
		process.env.NEXT_IMAGE_ALLOWED_DOMAINS2 = 'cdn.example.com';

		const config = require('./next.config.js');

		expect(config.assetPrefix).toBe('/portfolio');
		expect(config.images.domains).toEqual([
			'images.example.com',
			'cdn.example.com',
		]);
	});
});
