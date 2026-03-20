const withSentryConfig = jest.fn((config) => config);

jest.mock('@sentry/nextjs', () => ({
	withSentryConfig,
}));

describe('next.config.js', () => {
	const env = process.env;

	afterEach(() => {
		process.env = { ...env };
		jest.resetModules();
		withSentryConfig.mockClear();
	});

	it('omits optional deployment settings when env vars are missing', () => {
		delete process.env.NEXT_PUBLIC_ASSET_HOST;
		delete process.env.NEXT_IMAGE_ALLOWED_DOMAINS;
		delete process.env.NEXT_IMAGE_ALLOWED_DOMAINS2;
		delete process.env.SENTRY_AUTH_TOKEN;
		delete process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN;

		const config = require('./next.config.js');

		expect(withSentryConfig).not.toHaveBeenCalled();
		expect(config.assetPrefix).toBeUndefined();
		expect(config.images.domains).toEqual([]);
	});

	it('includes optional deployment settings when env vars are present', () => {
		process.env.NEXT_PUBLIC_ASSET_HOST = '/portfolio';
		process.env.NEXT_IMAGE_ALLOWED_DOMAINS = 'images.example.com';
		process.env.NEXT_IMAGE_ALLOWED_DOMAINS2 = 'cdn.example.com';
		process.env.SENTRY_AUTH_TOKEN = 'token';

		const config = require('./next.config.js');

		expect(withSentryConfig).toHaveBeenCalledWith(
			expect.objectContaining({
				assetPrefix: '/portfolio',
				images: { domains: ['images.example.com', 'cdn.example.com'] },
			}),
			expect.objectContaining({
				authToken: 'token',
			})
		);
		expect(config.assetPrefix).toBe('/portfolio');
		expect(config.images.domains).toEqual([
			'images.example.com',
			'cdn.example.com',
		]);
	});
});
