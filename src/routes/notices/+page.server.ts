// src/routes/+page.server.ts
import { client } from '$lib/server/contentful';
import type { PageServerLoad } from './$types';

// Enable prerendering for static generation
export const prerender = true;

// Optional: Add caching headers for static assets
export const config = {
    isr: {
        expiration: 3600 // Cache for 1 hour
    }
};

export const load: PageServerLoad = async () => {
    try {
        // Fetch notices
        const [notices,] = await Promise.all([
            client.getEntries({
                content_type: 'notice',
                limit: 3,
                order: ['-fields.date']
            }),
        ]);

        // Transform notices
        const transformedNotices = notices.items.map((item: { fields: { headline?: string; slug?: string; date?: string; desc?: string; } }) => ({
            title: item.fields.headline || 'Untitled Notice',
            slug: item.fields.slug || '',
            date: item.fields.date || new Date().toISOString(),
            body: item.fields.desc || 'No content available'
        }));


        return {
            latestNotices: transformedNotices,
        };
    } catch (error) {
        console.error('❌ Error fetching Contentful data:', error);
        return {
            latestNotices: [],
            latestBlogs: [],
            error: 'Failed to load content'
        };
    }
};
