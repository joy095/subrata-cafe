import { json } from '@sveltejs/kit';
import { client } from '$lib/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const GET = async () => {
    try {
        const [blogs] = await Promise.all([

            client.getEntries({
                content_type: 'blog',
                order: ['-fields.date']
            })
        ]);

        const transformedBlogs = blogs.items.map((item) => ({
            title: item.fields.headline || 'Untitled Blog',
            slug: item.fields.slug || '',
            date: item.fields.date || new Date().toISOString(),
            body: item.fields.blog ? documentToHtmlString(item.fields.blog) : 'No content available',
            thumbnail: item.fields.thumbnail?.fields?.file?.url
                ? { url: `https:${item.fields.thumbnail.fields.file.url}` }
                : undefined
        }));

        return json({
            latestBlogs: transformedBlogs
        });
    } catch (error) {
        console.error('❌ Error fetching Contentful data:', error);
        return json({ latestNotices: [], latestBlogs: [], error: 'Failed to load content' }, { status: 500 });
    }
};
