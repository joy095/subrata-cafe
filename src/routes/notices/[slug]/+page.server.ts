// src/routes/notices/[slug]/+page.server.ts
import { client } from '$lib/contentful';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    const res = await client.getEntries({
        content_type: 'notice',
        'fields.slug': params.slug,
    });

    return {
        notice: res.items[0]?.fields
    };
};