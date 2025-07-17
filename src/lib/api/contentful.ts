// lib/api/contentful.ts
import { client } from '$lib/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const fetchNotices = async () => {
    const res = await client.getEntries({
        content_type: 'notice',
        limit: 3,
        order: ['-fields.date']
    });

    return res.items.map((item: any) => ({
        title: item.fields.headline ?? 'Untitled Notice',
        slug: item.fields.slug ?? '',
        date: item.fields.date ?? new Date().toISOString(),
        body: item.fields.desc ?? 'No content available'
    }));
};

export const fetchBlogs = async () => {
    const res = await client.getEntries({
        content_type: 'blog',
        limit: 3,
        order: ['-fields.date']
    });

    return res.items.map((item: any) => ({
        title: item.fields.headline ?? 'Untitled Blog',
        slug: item.fields.slug ?? '',
        date: item.fields.date ?? new Date().toISOString(),
        body: item.fields.blog ? documentToHtmlString(item.fields.blog) : 'No content available',
        thumbnail: item.fields.thumbnail?.fields?.file?.url
            ? { url: `https:${item.fields.thumbnail.fields.file.url}` }
            : undefined
    }));
};

export async function getBlogPostBySlug(slug: string) {
    const entries = await client.getEntries({
        content_type: 'blog',
        'fields.slug': slug,
        limit: 1
    });

    if (!entries.items.length) return null;

    const entry = entries.items[0].fields;

    return {
        title: entry.headline ?? 'Untitled Blog',
        slug: entry.slug ?? '',
        date: entry.date ?? new Date().toISOString(),
        body: entry.blog
            ? documentToHtmlString(entry.blog)
            : 'No content available',
        thumbnail: entry.thumbnail?.fields?.file?.url
            ? {
                url: `https:${entry.thumbnail.fields.file.url}`,
                alt: entry.thumbnail.fields.title ?? 'Blog Image'
            }
            : undefined
    };
}

export async function getNoticeBySlug(slug: string) {
    const entries = await client.getEntries({
        content_type: 'notice',
        'fields.slug': slug,
        limit: 1
    });

    if (!entries.items.length) return null;

    const entry = entries.items[0].fields;

    return {
        title: entry.headline ?? 'Untitled Notice',
        slug: entry.slug ?? '',
        date: entry.date ?? new Date().toISOString(),
        body: entry.desc ?? 'No content available'
    };
}
