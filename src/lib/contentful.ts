import { env } from '$env/dynamic/private';
import { createClient } from 'contentful';


export const client = createClient({
    space: env.CONTENTFUL_SPACE_ID || "",
    accessToken: env.CONTENTFUL_ACCESS_TOKEN || "",
    environment: env.CONTENTFUL_ENVIRONMENT_ID || 'master'
});