<script lang="ts">
	import { fade } from 'svelte/transition';

	// Particle positions for subtle background effect
	const particles = Array.from({ length: 10 }, () => ({
		left: `${Math.random() * 100}%`,
		top: `${Math.random() * 100}%`,
		delay: `${Math.random() * 5}s`,
		duration: `${6 + Math.random() * 10}s`
	}));
</script>

<footer
	class="relative overflow-hidden rounded-t-2xl bg-gradient-to-b from-white to-gray-50 py-12 text-gray-500 shadow-xl"
	in:fade={{ duration: 800 }}
>
	<!-- Subtle Particles -->
	<div class="pointer-events-none absolute inset-0">
		{#each particles as particle}
			<div
				class="animate-particle absolute h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
				style="left: {particle.left}; top: {particle.top}; animation-delay: {particle.delay}; animation-duration: {particle.duration}"
			></div>
		{/each}
	</div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<!-- Link Columns -->
			<div class="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:col-span-2">
				<!-- Column 1: Company Info -->
				<div class="mb-6 sm:mb-0">
					<h3
						class="mb-4 inline-block border-b-2 border-blue-300 pb-2 text-xl font-semibold text-gray-700 transition-all duration-300 hover:border-purple-500"
					>
						Company
					</h3>
					<ul class="space-y-3">
						<li>
							<a
								href="#"
								class="group relative text-base font-medium text-gray-500 transition-all duration-300 hover:scale-105 hover:text-blue-500"
								aria-label="Learn about CyberHub"
							>
								About Us
								<span
									class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
								></span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="group relative text-base font-medium text-gray-500 transition-all duration-300 hover:scale-105 hover:text-blue-500"
								aria-label="Read CyberHub's blog"
							>
								Blog
								<span
									class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
								></span>
							</a>
						</li>
					</ul>
				</div>
				<!-- Column 2: Support -->
				<div class="mb-6 sm:mb-0">
					<h3
						class="mb-4 inline-block border-b-2 border-blue-300 pb-2 text-xl font-semibold text-gray-700 transition-all duration-300 hover:border-purple-500"
					>
						Support
					</h3>
					<ul class="space-y-3">
						<li>
							<a
								href="#"
								class="group relative text-base font-medium text-gray-500 transition-all duration-300 hover:scale-105 hover:text-blue-500"
								aria-label="Visit CyberHub's Help Center"
							>
								Help Center
								<span
									class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
								></span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="group relative text-base font-medium text-gray-500 transition-all duration-300 hover:scale-105 hover:text-blue-500"
								aria-label="Contact CyberHub support"
							>
								Contact Us
								<span
									class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
								></span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="group relative text-base font-medium text-gray-500 transition-all duration-300 hover:scale-105 hover:text-blue-500"
								aria-label="View CyberHub's FAQ"
							>
								FAQ
								<span
									class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
								></span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="group relative text-base font-medium text-gray-500 transition-all duration-300 hover:scale-105 hover:text-blue-500"
								aria-label="Access CyberHub's customer service"
							>
								Customer Service
								<span
									class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
								></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Google Map Column -->
			<div class="text-center lg:col-span-1 lg:text-left">
				<h3
					class="mb-4 inline-block border-b-2 border-blue-300 pb-2 text-xl font-semibold text-gray-700 transition-all duration-300 hover:border-purple-500"
				>
					Visit Us
				</h3>
				<div
					class="relative overflow-hidden rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
					in:fade={{ duration: 1000, delay: 200 }}
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1230.6303929803476!2d89.84128414293376!3d26.107337021036603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752997970842!5m2!1sen!2sin"
						width="100%"
						height="250"
						style="border:0;"
						loading="lazy"
						aria-label="Google Map of CyberHub at 123 Cyber Street, San Francisco, CA"
					></iframe>
					<div
						class="pointer-events-none absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/10 to-purple-500/10"
					></div>
				</div>
				<p class="mt-3 text-base text-gray-500">
					123 Cyber Street, San Francisco, CA<br />
					High-speed internet, Xerox, and study materials!
				</p>
			</div>
		</div>
		<!-- Copyright Section -->
		<div class="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
			<p>© 2025 CyberHub. All rights reserved.</p>
			<p class="mt-2">
				Designed and Developed by
				<a
					href="https://joykarmakar.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative text-blue-500 transition-all duration-300 hover:scale-105 hover:text-purple-500"
					aria-label="Visit Joy Karmakar's portfolio"
				>
					Joy Karmakar
					<span
						class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
					></span>
				</a>
			</p>
		</div>
	</div>
</footer>

<style>
	footer a {
		display: inline-block;
		position: relative;
	}

	footer {
		--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		backdrop-filter: blur(8px);
	}

	/* Subtle glow effect for map */
	iframe {
		filter: brightness(1.05) contrast(1.1);
	}

	/* Particle animation */
	.animate-particle {
		animation: particle infinite ease-in-out;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		iframe {
			height: 180px;
		}
	}

	@media (min-width: 1024px) {
		.lg\:col-span-2 {
			grid-column: span 2 / span 2;
		}
	}

	@keyframes particle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(0.6);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.2);
		}
	}
</style>
