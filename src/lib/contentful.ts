import { env } from '$env/dynamic/private';
import { createClient } from 'contentful';

if (!env.CONTENTFUL_SPACE_ID || !env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Missing Contentful environment variables.');
}

export const client = createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN,
});