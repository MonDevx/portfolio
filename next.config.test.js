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
		delete process.env.NEXT_PUBLIC_BASE_PATH;
		delete process.env.NEXT_IMAGE_ALLOWED_DOMAINS;
		delete process.env.NEXT_IMAGE_ALLOWED_DOMAINS2;
		delete process.env.NEXT_PUBLIC_STATIC_EXPORT;
		delete process.env.SENTRY_AUTH_TOKEN;
		delete process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN;

		const config = require('./next.config.js');

		expect(withSentryConfig).not.toHaveBeenCalled();
		expect(config.basePath).toBeUndefined();
		expect(config.assetPrefix).toBeUndefined();
		expect(config.images.domains).toEqual([]);
		expect(config.images.unoptimized).toBeUndefined();
	});

	it('includes optional deployment settings when env vars are present', () => {
		process.env.NEXT_PUBLIC_BASE_PATH = '/portfolio';
		process.env.NEXT_IMAGE_ALLOWED_DOMAINS = 'images.example.com';
		process.env.NEXT_IMAGE_ALLOWED_DOMAINS2 = 'cdn.example.com';
		process.env.NEXT_PUBLIC_STATIC_EXPORT = 'true';
		process.env.SENTRY_AUTH_TOKEN = 'token';

		const config = require('./next.config.js');

		expect(withSentryConfig).toHaveBeenCalledWith(
			expect.objectContaining({
				basePath: '/portfolio',
				assetPrefix: '/portfolio',
				trailingSlash: true,
			}),
			expect.objectContaining({
				authToken: 'token',
			})
		);
		expect(config.basePath).toBe('/portfolio');
		expect(config.assetPrefix).toBe('/portfolio');
		expect(config.trailingSlash).toBe(true);
		expect(config.images.domains).toEqual([
			'images.example.com',
			'cdn.example.com',
		]);
		expect(config.images.unoptimized).toBe(true);
	});
});
