<!-- src/routes/notices/+page.svelte -->
<script lang="ts">
	export let data: {
		notices: {
			title: string;
			slug: string;
			date: string;
			body: string;
		}[];
	};
</script>

<section class="bg-gray-50 px-6 py-20">
	<div class="mx-auto max-w-6xl">
		<h3 class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Latest Notices</h3>

		<ul class="space-y-6">
			{#each data.notices as notice (notice.slug)}
				<li
					class="rounded-xl bg-white/90 p-6 shadow-md backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
				>
					<a href={`/notices/${notice.slug}`} aria-label={`Read notice: ${notice.title}`}>
						<p class="text-lg font-semibold text-indigo-700 hover:text-indigo-900 hover:underline">
							{notice.title}
						</p>
						<p class="mt-2 line-clamp-2 text-sm text-gray-600">{notice.body}</p>
						<div class="mt-3 flex items-center justify-between">
							<span class="text-sm text-gray-500">
								{new Date(notice.date).toLocaleDateString()}
							</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
