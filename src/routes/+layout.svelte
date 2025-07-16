<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	export let data;
</script>

<main class="min-h-screen bg-gray-50 font-sans text-gray-800">
	<Header />
	<slot />
</main>

<Footer />
