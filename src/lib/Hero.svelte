<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let isMounted = false;
	let currentTextIndex = 0;
	let typedText = '';
	let mouseX = 0;
	let mouseY = 0;

	const fullText = [
		'Fast internet & student admissions!',
		'Xerox and books for all!',
		'Your hub for study essentials!'
	];

	// Parallax effect for background
	const handleMouseMove = (e: MouseEvent) => {
		mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
		mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
	};

	// Typing animation
	const typeText = (text: string) => {
		typedText = '';
		let i = 0;
		const type = () => {
			if (i < text.length && isMounted) {
				typedText += text[i];
				i++;
				setTimeout(type, 50);
			}
		};
		type();
	};

	// Cycle through texts
	onMount(() => {
		isMounted = true;
		window.addEventListener('mousemove', handleMouseMove);
		const cycleTexts = () => {
			const currentText = fullText[currentTextIndex];
			typeText(currentText);
			setTimeout(() => {
				if (!isMounted) return;
				currentTextIndex = (currentTextIndex + 1) % fullText.length;
				cycleTexts();
			}, 4000); // 4-second duration per text
		};
		cycleTexts();
		return () => {
			isMounted = false;
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<section class="relative min-h-screen overflow-hidden bg-black">
	<!-- Animated Background -->
	<div class="absolute inset-0">
		<!-- Gradient base -->
		<div
			class="absolute inset-0 bg-gradient-to-br bg-[url('/bg.avif')] from-purple-950 via-blue-950 to-teal-900 bg-cover bg-center opacity-70"
		></div>
		<!-- Circuit pattern with parallax -->
		<div
			class="absolute inset-0 transform bg-[url('/circuit-pattern.png')] bg-cover opacity-15 transition-transform duration-100"
			style="transform: translate({mouseX * 0.03}px, {mouseY * 0.03}px)"
		></div>
		<!-- Neon pulse overlay -->
		<div
			class="animate-pulse-slow absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent"
		></div>
	</div>

	<!-- Glowing Cursor Effect -->
	<div
		class="pointer-events-none absolute h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
		style="transform: translate({mouseX}px, {mouseY}px)"
	></div>

	<!-- Content -->
	<div class="relative container mx-auto flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			{#if isMounted}
				<div transition:fade={{ duration: 1200 }}>
					<!-- Title with Neon Effect -->
					<h1
						class="mb-6 text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] sm:text-5xl md:text-6xl"
						transition:slide={{ duration: 800 }}
					>
						<span class="relative inline-block"> CyberHub </span>
						<br />
						<span class="text-pink-400">Digital Oasis</span>
					</h1>

					<!-- Typing Subtitle -->
					<div
						class="mx-auto mb-10 max-w-2xl text-lg font-light text-white/80 sm:text-xl"
						transition:fade={{ duration: 800, delay: 200 }}
						aria-live="polite"
					>
						<span class="relative inline-block">
							{typedText}
							<span
								class="animate-blink absolute top-0 bottom-0 my-auto inline-block h-5 w-2 bg-cyan-400"
							></span>
						</span>
					</div>

					<!-- Call-to-Action Buttons -->
					<div
						class="flex flex-col justify-center gap-4 sm:flex-row"
						transition:slide={{ duration: 800, delay: 400 }}
					>
						<a
							href="/book"
							aria-label="Book a gaming slot at CyberHub"
							class="relative rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 px-8 py-3 text-lg font-semibold text-gray-900 shadow-lg transition-all duration-300"
						>
							<span class="relative z-10">Book Now</span>
							<span
								class="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100"
							></span>
						</a>
						<a
							href="/services"
							aria-label="Explore CyberHub services"
							class="relative rounded-full border-2 border-pink-400/50 px-8 py-3 text-lg font-semibold text-pink-300 transition-all duration-300 hover:bg-pink-400/10 hover:text-pink-200"
						>
							Our Services
						</a>
					</div>

					<!-- Social Proof -->
					<div
						class="mt-8 flex flex-col justify-center gap-4 text-sm text-white/70 sm:flex-row"
						transition:fade={{ duration: 600, delay: 600 }}
					>
						<div><span class="font-bold text-cyan-300">10K+</span> Monthly Gamers</div>
						<div><span class="font-bold text-cyan-300">1Gbps</span> Ultra-Fast Internet</div>
						<div><span class="font-bold text-cyan-300">24/7</span> Cyber Access</div>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<!-- Neon Particles -->
	<div class="pointer-events-none absolute inset-0">
		{#each Array(20) as _, i}
			<div
				class="animate-neon absolute h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
				style="left: {Math.random() * 100}%; top: {Math.random() *
					100}%; animation-delay: {Math.random() * 5}s; animation-duration: {6 +
					Math.random() * 10}s"
			></div>
		{/each}
	</div>
</section>

<svelte:head>
	<title>CyberHub - Ultimate Cybercafe Experience</title>
	<meta
		name="description"
		content="Join CyberHub for ultra-fast internet, premium gaming, and a futuristic atmosphere. Book your slot today!"
	/>
</svelte:head>

<style>
	.animate-neon {
		animation: neon infinite ease-in-out;
	}

	.animate-pulse-slow {
		animation: pulse-slow 8s infinite ease-in-out;
	}

	.animate-blink {
		animation: blink 1s step-end infinite;
	}

	@keyframes neon {
		0%,
		100% {
			opacity: 0.2;
			transform: scale(0.7);
		}
		50% {
			opacity: 0.9;
			transform: scale(1.3);
		}
	}

	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 0.5;
		}
		50% {
			opacity: 0.8;
		}
	}

	@keyframes glow {
		0%,
		100% {
			opacity: 0.7;
		}
		50% {
			opacity: 1;
		}
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
