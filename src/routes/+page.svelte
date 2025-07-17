<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import formatDate from '$lib/dateFormat';

	import { createQuery } from '@tanstack/svelte-query';
	import { fetchNotices, fetchBlogs } from '$lib/api/contentful';

	let ctaScale = spring(1, { stiffness: 0.1, damping: 0.8 });

	type Notice = {
		title: string;
		slug: string;
		date: string;
		body: string;
	};

	type Blog = {
		title: string;
		slug: string;
		date: string;
		body: string;
		thumbnail?: { url: string };
	};

	const noticesQuery = createQuery<Notice[], Error>({
		queryKey: ['notices'],
		queryFn: fetchNotices
	});

	const blogsQuery = createQuery<Blog[], Error>({
		queryKey: ['blogs'],
		queryFn: fetchBlogs
	});
</script>

<section
	class="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-700 to-purple-800 px-6 py-28 text-center text-white"
>
	<div
		class="animate-subtle-parallax absolute inset-0 bg-[url('https://www.wearegecko.co.uk/media/50316/mountain-3.jpg')] bg-cover bg-center opacity-10"
	></div>
	<div class="relative mx-auto max-w-6xl">
		<h2
			class="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl"
			transition:fade={{ duration: 600 }}
		>
			Welcome to CaféConnect
		</h2>
		<p
			class="mb-10 text-xl text-indigo-100 opacity-90 md:text-2xl"
			transition:fade={{ delay: 200, duration: 600 }}
		>
			Your hub for the latest updates, insights, and community connections.
		</p>
		<a
			href="/explore"
			class="inline-block rounded-full bg-indigo-600 px-10 py-4 text-lg font-semibold text-white transition-transform hover:bg-indigo-700 hover:shadow-xl"
			aria-label="Explore our services"
			style="transform: scale({$ctaScale})"
			on:mouseenter={() => ($ctaScale = 1.05)}
			on:mouseleave={() => ($ctaScale = 1)}
		>
			Explore Now
		</a>
	</div>
</section>

<section class="bg-white px-6 py-20">
	<div class="mx-auto max-w-6xl items-center gap-12 md:flex">
		<div class="text-center md:w-1/2 md:text-left" in:slide={{ duration: 500 }}>
			<h3 class="mb-6 text-4xl font-extrabold text-gray-900">Our Mission</h3>
			<p class="mb-6 text-lg text-gray-700">
				At <strong>CaféConnect</strong>, we believe in fostering strong communities through seamless
				communication. Our platform is designed to bring people closer, keeping everyone informed
				and engaged with the latest news, events, and insights.
			</p>
			<p class="text-lg text-gray-700">
				We are committed to providing a reliable and intuitive space for sharing knowledge and
				connecting minds.
			</p>
			<a
				href="/about"
				class="mt-8 inline-block rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
			>
				Learn More
			</a>
		</div>
		<div class="mt-10 md:mt-0 md:w-1/2" in:fade={{ delay: 200, duration: 800 }}>
			<img
				src="https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg"
				alt="About Us"
				class="rounded-lg shadow-2xl"
			/>
		</div>
	</div>
</section>

<section class="bg-gray-50 px-6 py-20">
	<div class="mx-auto max-w-6xl text-center">
		<h3 class="mb-12 text-4xl font-extrabold text-gray-900" in:slide={{ duration: 500 }}>
			What We Offer
		</h3>
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			<div
				class="rounded-xl bg-white p-8 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
				in:slide={{ delay: 100, duration: 400 }}
			>
				<div class="mb-6 text-5xl text-indigo-600">
					<i class="fas fa-bullhorn"></i>
				</div>
				<h4 class="mb-4 text-xl font-semibold text-gray-900">Dynamic Notices</h4>
				<p class="text-gray-600">
					Stay updated with real-time announcements and important information.
				</p>
			</div>
			<div
				class="rounded-xl bg-white p-8 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
				in:slide={{ delay: 200, duration: 400 }}
			>
				<div class="mb-6 text-5xl text-indigo-600">
					<i class="fas fa-blog"></i>
				</div>
				<h4 class="mb-4 text-xl font-semibold text-gray-900">Engaging Blog Posts</h4>
				<p class="text-gray-600">
					Explore insightful articles and diverse perspectives from our community.
				</p>
			</div>
			<div
				class="rounded-xl bg-white p-8 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
				in:slide={{ delay: 300, duration: 400 }}
			>
				<div class="mb-6 text-5xl text-indigo-600">
					<i class="fas fa-users"></i>
				</div>
				<h4 class="mb-4 text-xl font-semibold text-gray-900">Community Hub</h4>
				<p class="text-gray-600">Connect with others, share ideas, and build a vibrant network.</p>
			</div>
		</div>
	</div>
</section>

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

<section class="bg-white px-6 py-20">
	<div class="mx-auto max-w-6xl">
		<h3
			class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl"
			transition:slide={{ duration: 500 }}
		>
			Recent Blog Posts
		</h3>

		{#if $blogsQuery.isError}
			<p class="text-center text-red-600">Error loading blogs.</p>
		{:else if $blogsQuery.isLoading}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _}
					<div class="h-64 animate-pulse rounded-xl bg-gray-200"></div>
				{/each}
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" transition:fade={{ duration: 400 }}>
				{#each $blogsQuery.data ?? [] as blog}
					<article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
						<a href={blog.slug ? `/blog/${blog.slug}` : '#'}>
							{#if blog.thumbnail?.url}
								<img
									src={blog.thumbnail.url}
									alt={blog.title}
									class="h-56 w-full object-cover"
									loading="lazy"
								/>
							{:else}
								<div class="mb-4 h-48 w-full rounded-lg bg-gray-200"></div>
							{/if}

							<div class="bg-white p-4 sm:p-6">
								<time datetime="2022-10-10" class="block text-xs text-gray-500">
									{formatDate(blog.date)}
								</time>

								<h3 class="mt-0.5 text-lg text-gray-900">
									{blog.title}
								</h3>

								<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
									{@html blog.body}
								</p>
							</div>
						</a>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.animate-subtle-parallax {
		animation: parallax 20s linear infinite;
	}

	@keyframes parallax {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100% 100%;
		}
	}
</style>
