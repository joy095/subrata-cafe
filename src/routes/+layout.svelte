<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<main class="min-h-screen bg-gray-50 font-sans text-gray-800">
	<Header />
	<QueryClientProvider client={queryClient}>
		<slot />
	</QueryClientProvider>
</main>

<Footer />
