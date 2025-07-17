<script lang="ts">
	import formatDate from '$lib/dateFormat';

	export let data: {
		post: {
			title: string;
			slug: string;
			body: string;
			date: string;
			thumbnail: {
				url: String;
				alt: String;
			};
		};
	};
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="title" content={data.post.title} />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:image" content={data.post.thumbnail.url.toString()} />
	<meta property="og:type" content="article" />
	<meta
		property="og:url"
		content={data.post.slug || `https://yourdomain.com/posts/${data.post.slug}`}
	/>
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={data.post.title} />
	<meta property="twitter:image" content={data.post.thumbnail.url.toString()} />
	<meta name="robots" content="index, follow" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": "{data.post.title}",
			"image": "{data.post.thumbnail.url.toString()}",
			"author": {
				"@type": "Person",
				"name": "{data.post.author || 'Your Brand Name'}"
			},
			"publisher": {
				"@type": "Organization",
				"name": "Your Brand Name",
				"logo": {
					"@type": "ImageObject",
					"url": "https://yourdomain.com/logo.png"
				}
			},
			"datePublished": "{data.post.date}",
			"description": "{data.post.excerpt || 'Read the latest insights and updates in this article.'}",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "{data.post.url || `https://yourdomain.com/posts/${data.post.slug}`}"
			}
		}
	</script>
</svelte:head>

<article
	class="prose prose-lg mx-auto overflow-hidden rounded-2xl border border-gray-100/50 bg-white px-6 py-16 shadow-xl transition-all duration-300 hover:shadow-2xl sm:px-8 lg:px-12"
>
	<div class="mx-auto max-w-4xl">
		<header class="relative">
			<div
				class="absolute inset-0 -z-10 rounded-t-2xl bg-gradient-to-r from-blue-50/50 to-transparent"
			></div>
			<h1
				class="mb-3 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-gray-900 text-transparent md:text-5xl"
			>
				{data.post.title}
			</h1>
			<div class="flex items-center gap-4 text-sm font-medium text-gray-500 italic">
				<time datetime={data.post.date}>
					{formatDate(data.post.date)}
				</time>
			</div>
		</header>
		<div class="mt-10">
			<div class="group relative mt-12">
				<img
					src={data.post.thumbnail.url.toString()}
					alt={data.post.thumbnail.alt.toString()}
					loading="lazy"
					class="h-auto w-full rounded-xl object-cover shadow-md transition-transform duration-500 group-hover:scale-[1.03] group-hover:shadow-lg"
				/>
				<div
					class="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				></div>
			</div>
			<div
				class="prose prose-neutral mt-10 max-w-none font-serif leading-relaxed tracking-wide text-gray-800"
			>
				{@html data.post.body}
			</div>
		</div>
	</div>
</article>
