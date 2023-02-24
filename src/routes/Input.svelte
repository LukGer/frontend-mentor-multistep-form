<script lang="ts">
	import { fade } from 'svelte/transition';

	export let label: string;
	export let placeholder: string;
	export let errorMessage: string | null = null;

	export let value: string;
</script>

<div class="flex flex-col">
	<label for="name" class="mb-1 flex flex-row text-sm tracking-tight text-marineBlue">
		<span>{label}</span>
		<div class="flex-1" />
		{#if errorMessage}
			<span class="font-medium text-strawberryRed" transition:fade={{ duration: 150 }}
				>{errorMessage}</span
			>
		{/if}
	</label>
	<input
		name="name"
		{placeholder}
		class="rounded-md border-[1px] border-lightGray px-4 py-2 font-medium text-marineBlue outline-none transition-colors duration-150 placeholder:font-medium focus-visible:border-purplishBlue"
		class:border-strawberryRed={errorMessage}
		bind:value
	/>
</div>
