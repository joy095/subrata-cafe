import { json } from '@sveltejs/kit';
import { client } from '$lib/contentful';

export const GET = async () => {
    try {
        const [notices] = await Promise.all([
            client.getEntries({
                content_type: 'notice',
                order: ['-fields.date']
            }),
        ]);

        const transformedNotices = notices.items.map((item) => ({
            title: item.fields.headline || 'Untitled Notice',
            slug: item.fields.slug || '',
            date: item.fields.date || new Date().toISOString(),
            body: item.fields.desc || 'No content available'
        }));

        return json({
            latestNotices: transformedNotices,
        });
    } catch (error) {
        console.error('❌ Error fetching Contentful data:', error);
        return json({ latestNotices: [], latestBlogs: [], error: 'Failed to load content' }, { status: 500 });
    }
};
