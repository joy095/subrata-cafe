<!-- src/routes/notices/[slug]/+page.svelte -->
<script lang="ts">
	export let data;
</script>

<article class="prose prose-lg mx-auto max-w-3xl px-4 py-8">
	<h1>{data.notice.title}</h1>
	<p class="text-sm text-gray-400">{new Date(data.notice.date).toLocaleDateString()}</p>
	<div>{@html data.notice.body}</div>
</article>
