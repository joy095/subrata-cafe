<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { createQuery } from '@tanstack/svelte-query';

	type Notice = {
		title: string;
		slug: string;
		date: string;
		body: string;
	};

	// Fetch notices (client-side)
	const fetchNotices = async (): Promise<Notice[]> => {
		const res = await fetch('/api/notices'); // ← your actual API route
		if (!res.ok) throw new Error('Failed to load notices');
		return res.json();
	};

	// Query
	const noticesQuery = createQuery<Notice[], Error>({
		queryKey: ['notices'],
		queryFn: fetchNotices
	});

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
		{#if $noticesQuery.isError}
			<p class="text-center text-red-600">Error loading notices.</p>
		{:else if $noticesQuery.isLoading}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _}
					<div class="h-24 animate-pulse rounded-xl bg-gray-200"></div>
				{/each}
			</div>
		{:else}
			<ul class="space-y-6" transition:fade={{ duration: 400 }}>
				{#each $noticesQuery.data ?? [] as notice}
					<li
						class="rounded-xl bg-white/90 p-6 shadow-md backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
						role="listitem"
						in:slide={{ delay: 100 * ($noticesQuery.data?.indexOf(notice) ?? 0), duration: 400 }}
					>
						<a
							href={notice.slug ? `/notices/${notice.slug}` : '#'}
							aria-label={`Read notice: ${notice.title}`}
						>
							{notice.title}

							<p
								class="text-lg font-semibold text-indigo-700 hover:text-indigo-900 hover:underline"
							>
								{notice.title}
							</p>
							<p class="mt-2 line-clamp-2 text-sm text-gray-600">{notice.body}</p>
							<div class="mt-3 flex items-center justify-between">
								<span class="text-sm text-gray-500"
									>{new Date(notice.date).toLocaleDateString()}</span
								>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>