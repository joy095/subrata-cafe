<!-- src/routes/notices/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export let data: {
		latestNotices: {
			title: string;
			slug: string;
			date: string;
			body: string;
		}[];
		error?: string;
	};

	let isLoading = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 800);
	});
</script>

<section class="bg-gray-50 px-6 py-20">
	<div class="mx-auto max-w-6xl">
		<h3
			class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl"
			transition:slide={{ duration: 500 }}
		>
			Latest Notices
		</h3>
		{#if data.error}
			<p class="text-center text-red-600">{data.error}</p>
		{:else if isLoading}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _}
					<div class="h-24 animate-pulse rounded-xl bg-gray-200"></div>
				{/each}
			</div>
		{:else}
			<ul class="space-y-6" transition:fade={{ duration: 400 }}>
				{#each data.latestNotices as notice}
					<li
						class="rounded-xl bg-white/90 p-6 shadow-md backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
						role="listitem"
						in:slide={{ delay: 100 * data.latestNotices.indexOf(notice), duration: 400 }}
					>
						<a
							href={notice.slug ? `/notices/${notice.slug}` : '#'}
							class="text-lg font-semibold text-indigo-700 hover:text-indigo-900 hover:underline"
							aria-label={`Read notice: ${notice.title}`}
						>
							{notice.title}
						</a>
						<p class="mt-2 line-clamp-2 text-sm text-gray-600">{notice.body}</p>
						<div class="mt-3 flex items-center justify-between">
							<span class="text-sm text-gray-500">{new Date(notice.date).toLocaleDateString()}</span
							>
							{#if notice.slug}
								<a
									href={`/notices/${notice.slug}`}
									class="text-sm font-medium text-indigo-600 hover:underline"
									aria-label={`Read more about ${notice.title}`}
								>
									Read More →
								</a>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
