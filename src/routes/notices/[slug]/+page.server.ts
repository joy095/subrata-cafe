// src/routes/notices/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getNoticeBySlug } from '$lib/api/contentful';

// Optional: Add caching headers for static assets
export const config = {
    isr: {
        expiration: 60 // Cache for 10 minutes
    }
};

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
