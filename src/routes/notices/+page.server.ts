// src/routes/notices/+page.server.ts
import { client } from '$lib/contentful';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const notices = await client.getEntries({
        content_type: 'notice',
        order: ['-fields.date']
    });

    const transformed = notices.items.map((item) => ({
        title: item.fields.headline ?? 'Untitled Notice',
        slug: item.fields.slug ?? '',
        date: item.fields.date ?? new Date().toISOString(),
        body: item.fields.desc ?? 'No content available'
    }));

    return {
        notices: transformed
    };
};
