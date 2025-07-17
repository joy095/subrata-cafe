// src/routes/blog/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getBlogPostBySlug } from '$lib/api/contentful';

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;

    if (!slug || typeof slug !== 'string') {
        throw error(400, 'Invalid slug');
    }

    const post = await getBlogPostBySlug(slug);

    if (!post) {
        console.error(`Blog post not found for slug: ${slug}`);
        throw error(404, 'Blog post not found');
    }

    return {
        post
    };
};
