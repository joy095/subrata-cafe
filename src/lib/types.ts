import type { Entry } from 'contentful';

/**
 * Content model: notice
 * - Title: Symbol
 * - Slug: Symbol
 * - Date: Date
 * - Body: Text
 */
export interface NoticeFields {
    title: string;       // from field `headline`
    slug: string;
    date: string;        // ISO format
    body?: string;       // from field `desc` (optional)
}

export type NoticeEntry = Entry<{
    headline: string;
    slug: string;
    date: string;
    desc?: string;
}>;

/**
 * Content model: blog
 * - Title: Symbol (headline)
 * - Body: RichText (blog)
 * - Slug: Symbol
 * - Date: Date
 * - Author: Symbol
 * - Thumbnail: Link (Asset)
 */
export interface BlogFields {
    title: string;       // from field `headline`
    slug: string;
    date: string;        // ISO format
    body: Document;      // Rich Text Document
    author?: string;
    thumbnail?: {
        fields: {
            file: {
                url: string;
            };
        };
    };
}

export type BlogEntry = Entry<{
    headline: string;
    blog: Document;
    slug: string;
    date: string;
    thumbnail?: {
        fields: {
            file: {
                url: string;
            };
        };
    };
}>;
