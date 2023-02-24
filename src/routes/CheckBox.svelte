<script lang="ts">
	import { draw } from 'svelte/transition';

	export let checked: boolean;
</script>

<label
	class="relative h-6 w-6 overflow-hidden rounded-md border-[1px] border-lightGray"
	class:bg-purplishBlue={checked}
	class:border-none={checked}
>
	<input type="checkbox" class="absolute h-0 w-0 opacity-0" bind:checked />

	{#if checked}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="absolute inset-0 m-auto scale-110"
			width="12"
			height="9"
			viewBox="0 0 12 9"
			><path
				in:draw={{ duration: 150 }}
				fill="none"
				stroke="#FFF"
				stroke-width="2"
				d="m1 4 3.433 3.433L10.866 1"
			/></svg
		>
	{/if}
</label>
