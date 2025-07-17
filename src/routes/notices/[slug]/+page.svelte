<script lang="ts">
	export let data: {
		notice: {
			title: string;
			slug: string;
			body: string;
			date: string;
		};
	};
</script>

<svelte:head>
	<title>{data.notice.title}</title>
	<meta name="description" content="Read the latest notice: {data.notice.title}" />
</svelte:head>

<article class="mx-auto max-w-4xl rounded-2xl bg-white px-6 py-12 shadow-lg">
	<div class="border-l-4 border-blue-500 pl-4">
		<h1 class="mb-2 text-4xl leading-tight font-bold text-gray-900">
			{data.notice.title}
		</h1>
		<p class="text-sm text-gray-500 italic">
			{new Date(data.notice.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</p>
	</div>
	<div class="prose prose-lg mt-6 leading-relaxed text-gray-700">
		{@html data.notice.body}
	</div>
</article>
