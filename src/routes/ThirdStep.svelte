<script lang="ts">
	import CheckBox from './CheckBox.svelte';
	import type { AddOn } from './interfaces';

	export let addOns: AddOn[];

	export let yearlyBilling: boolean;

	export const validate = () => true;
</script>

<div class="flex w-full flex-col gap-4 rounded-lg bg-white px-6 py-8">
	<p class="text-2xl font-bold text-marineBlue">Pick add-ons</p>
	<p class=" text-coolGray">Add-ons help enhance your gaming experience.</p>

	{#each addOns as addOn}
		<div
			class="flex flex-row items-center gap-3 rounded-md border-[1px] border-lightGray bg-opacity-5 p-3 transition-colors duration-150"
			class:border-purplishBlue={addOn.enabled}
			class:bg-purplishBlue={addOn.enabled}
		>
			<CheckBox bind:checked={addOn.enabled} />

			<div>
				<p class="font-medium text-marineBlue">{addOn.title}</p>
				<p class="text-xs text-coolGray">{addOn.subTitle}</p>
			</div>

			<p class="flex-1 text-end text-sm text-purplishBlue">
				{!yearlyBilling ? `+$${addOn.price}/mo` : `+$${addOn.price * 10}/yr`}
			</p>
		</div>
	{/each}
</div>
