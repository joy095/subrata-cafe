<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import formatDate from '$lib/dateFormat';

	export let data: {
		latestBlogs: {
			title: string;
			slug: string;
			date: string;
			body: string;
			author: string;
			thumbnail?: { url: string };
		}[];
		error?: string;
	};

	let isLoading = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 800);
		return () => {};
	});
</script>

<section class="bg-white px-6 py-20">
	<div class="mx-auto max-w-6xl">
		<h3
			class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl"
			transition:slide={{ duration: 500 }}
		>
			Recent Blog Posts
		</h3>

		{#if data.error}
			<p class="text-center text-red-600">{data.error}</p>
		{:else if isLoading}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _}
					<div class="h-64 animate-pulse rounded-xl bg-gray-200"></div>
				{/each}
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" transition:fade={{ duration: 400 }}>
				{#each data.latestBlogs as blog}
					<article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
						{#if blog.thumbnail?.url}
							<a href={blog.slug ? `/blog/${blog.slug}` : '#'}>
								<img
									src={blog.thumbnail.url}
									alt={blog.title}
									class="h-56 w-full object-cover"
									loading="lazy"
								/>
							</a>
						{:else}
							<div class="mb-4 h-48 w-full rounded-lg bg-gray-200"></div>
						{/if}

						<div class="bg-white p-4 sm:p-6">
							<time datetime="2022-10-10" class="block text-xs text-gray-500">
								{formatDate(blog.date)}
							</time>

							<a href={blog.slug ? `/blog/${blog.slug}` : '#'}>
								<h3 class="mt-0.5 text-lg text-gray-900">
									{blog.title}
								</h3>
							</a>

							<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
								{@html blog.body}
							</p>
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>
