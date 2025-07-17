// src/routes/+page.server.ts
import { client } from '$lib/server/contentful';
import type { PageServerLoad } from './$types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const load: PageServerLoad = async () => {
    try {
        // Fetch notices and blogs in parallel
        const [blogs] = await Promise.all([

            client.getEntries({
                content_type: 'blog',
                limit: 3,
                order: ['-fields.date']
            })
        ]);

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
