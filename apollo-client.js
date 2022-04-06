import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: `https://api-ap-northeast-1.graphcms.com/v2/${process.env.NEXT_PUBLIC_GRAPHCMS_PROJECT_ID}/${process.env.NEXT_PUBLIC_GRAPHCMS_ENV}`,
	cache: new InMemoryCache(),
});
