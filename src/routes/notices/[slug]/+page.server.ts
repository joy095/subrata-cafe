// src/routes/notices/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getNoticeBySlug } from '$lib/api/contentful';

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;

    if (!slug || typeof slug !== 'string') {
        throw error(400, 'Invalid slug');
    }

    const notice = await getNoticeBySlug(slug);

    if (!notice) {
        console.error(`Notice notice not found for slug: ${slug}`);
        throw error(404, 'Notice notice not found');
    }

    return {
        notice
    };
};
