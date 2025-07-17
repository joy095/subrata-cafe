<script>
	import { fade } from 'svelte/transition';
</script>

<footer
	class="rounded-t-2xl bg-gradient-to-b from-white to-gray-50 py-16 text-gray-700 shadow-xl"
	in:fade={{ duration: 800 }}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
			<!-- Column 1: Company Info -->
			<div class="mb-8 sm:mb-0">
				<h3
					class="mb-6 inline-block border-b-2 border-gray-300 pb-3 text-2xl font-semibold text-gray-900 transition-all duration-300 hover:border-blue-500"
				>
					Company
				</h3>
				<ul class="space-y-4">
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>About Us</a
						>
					</li>
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Blog</a
						>
					</li>
				</ul>
			</div>
			<!-- Column 2: Support -->
			<div class="mb-8 sm:mb-0">
				<h3
					class="mb-6 inline-block border-b-2 border-gray-300 pb-3 text-2xl font-semibold text-gray-900 transition-all duration-300 hover:border-blue-500"
				>
					Support
				</h3>
				<ul class="space-y-4">
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Help Center</a
						>
					</li>
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Contact Us</a
						>
					</li>
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>FAQ</a
						>
					</li>
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Customer Service</a
						>
					</li>
				</ul>
			</div>
			<!-- Column 3: Legal -->
			<div class="mb-8 sm:mb-0">
				<h3
					class="mb-6 inline-block border-b-2 border-gray-300 pb-3 text-2xl font-semibold text-gray-900 transition-all duration-300 hover:border-blue-500"
				>
					Legal
				</h3>
				<ul class="space-y-4">
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Privacy Policy</a
						>
					</li>
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Terms of Service</a
						>
					</li>
				</ul>
			</div>
			<!-- Column 4: Connect & Newsletter -->
			<div>
				<h3
					class="mb-6 inline-block border-b-2 border-gray-300 pb-3 text-2xl font-semibold text-gray-900 transition-all duration-300 hover:border-blue-500"
				>
					Connect
				</h3>
				<ul class="mb-8 space-y-4">
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Facebook</a
						>
					</li>
					<li>
						<a
							href="#"
							class="text-lg font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
							>Instagram</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="mt-12 border-t border-gray-200 pt-8 text-center text-lg text-gray-500">
			<p>© 2025 Your Company. All rights reserved.</p>
			<p class="mt-3">
				Designed and Developed by
				<a
					href="https://joykarmakar.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 transition-all duration-300 hover:text-blue-700 hover:underline"
					>Joy Karmakar</a
				>
			</p>
		</div>
	</div>
</footer>

<style>
	:global(body) {
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
		margin: 0;
	}

	footer a {
		display: inline-block;
	}

	/* Smooth hover effects and subtle animations */
	footer {
		--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		backdrop-filter: blur(10px);
	}

	/* Ensure inputs and buttons have a premium feel */
	input,
	button {
		transition: all 0.3s ease;
	}

	input:focus {
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
	}

	button:hover {
		transform: translateY(-1px);
	}
</style>
