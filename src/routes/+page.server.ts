// src/routes/+page.server.ts
import { client } from '$lib/server/contentful';
import type { PageServerLoad } from './$types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Optional: Add caching headers for static assets
export const config = {
    isr: {
        expiration: 60 // Cache for 10 minutes
    }
};

export const load: PageServerLoad = async () => {
    try {
        // Fetch notices and blogs in parallel
        const [notices, blogs] = await Promise.all([
            client.getEntries({
                content_type: 'notice',
                limit: 3,
                order: ['-fields.date']
            }),
            client.getEntries({
                content_type: 'blog',
                limit: 3,
                order: ['-fields.date']
            })
        ]);

        // Transform notices
        const transformedNotices = notices.items.map((item: { fields: { headline?: string; slug?: string; date?: string; desc?: string; } }) => ({
            title: item.fields.headline || 'Untitled Notice',
            slug: item.fields.slug || '',
            date: item.fields.date || new Date().toISOString(),
            body: item.fields.desc || 'No content available'
        }));

        // Transform blogs
        const transformedBlogs = blogs.items.map((item: { fields: { headline?: string; slug?: string; date?: string; blog?: any; thumbnail?: { fields?: { file?: { url?: string } } } } }) => ({
            title: item.fields.headline || 'Untitled Blog',
            slug: item.fields.slug || '',
            date: item.fields.date || new Date().toISOString(),
            body: item.fields.blog ? documentToHtmlString(item.fields.blog) : 'No content available',
            thumbnail: item.fields.thumbnail?.fields?.file?.url
                ? { url: `https:${item.fields.thumbnail.fields.file.url}` }
                : undefined
        }));

        return {
            latestNotices: transformedNotices,
            latestBlogs: transformedBlogs
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
