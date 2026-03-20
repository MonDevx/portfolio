const { withSentryConfig } = require('@sentry/nextjs');

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_HOST;
const imageDomains = [
	process.env.NEXT_IMAGE_ALLOWED_DOMAINS,
	process.env.NEXT_IMAGE_ALLOWED_DOMAINS2,
].filter(Boolean);

const moduleExports = {
	poweredByHeader: false,
	swcMinify: true,
	...(assetPrefix ? { assetPrefix } : {}),
	productionBrowserSourceMaps: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	publicRuntimeConfig: {
		MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || '',
		MAILCHIMP_API_SERVER: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER || '',
		MAILCHIMP_AUDIENCE_ID: process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID || '',
	},
	images: {
		domains: imageDomains,
	},
};

const sentryWebpackPluginOptions = {
	silent: false, // Suppresses all logs
	authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,


	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
