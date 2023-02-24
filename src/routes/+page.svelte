<script lang="ts">
	import FirstStep from './FirstStep.svelte';
	import FourthStep from './FourthStep.svelte';
	import type { Form } from './interfaces';
	import SecondStep from './SecondStep.svelte';
	import ThirdStep from './ThirdStep.svelte';

	let countSteps = 4;
	let currentStep = 0;

	let form: Form = {
		plan: '',
		planPrice: 0,
		yearlyBilling: false,
		addOns: [
			{
				title: 'Online service',
				subTitle: 'Access to multiplayer games',
				price: 1,
				enabled: false
			},
			{
				title: 'Larger storage',
				subTitle: 'Extra 1TB of cloud save',
				price: 2,
				enabled: false
			},
			{
				title: 'Customizable profile',
				subTitle: 'Custom theme on your profile',
				price: 2,
				enabled: false
			}
		]
	};

	let validate: () => boolean;

	const advanceStep = () => {
		if (validate()) {
			currentStep++;
		}
	};
</script>

<div class="relative grid h-full w-full pt-8">
	<img src="/bg-sidebar-mobile.svg" alt="background" class="absolute top-0 w-full" />

	<div class="z-10 flex flex-col items-center">
		<div class="flex flex-row gap-4">
			{#each [...Array(countSteps)] as _, i}
				<p
					class="grid h-8 w-8 place-items-center rounded-full border-[1px] border-white  text-sm font-bold text-white transition-colors duration-300"
					class:selected={currentStep >= i}
				>
					{i + 1}
				</p>
			{/each}
		</div>

		<div class="mt-10 px-4">
			{#if currentStep === 0}
				<FirstStep bind:validate />
			{:else if currentStep === 1}
				<SecondStep
					bind:validate
					bind:plan={form.plan}
					bind:planPrice={form.planPrice}
					bind:yearlyBilling={form.yearlyBilling}
				/>
			{:else if currentStep === 2}
				<ThirdStep yearlyBilling={form.yearlyBilling} bind:addOns={form.addOns} bind:validate />
			{:else}
				<FourthStep {form} />
			{/if}
		</div>

		<div class="flex-1" />

		<div class="flex h-20 w-full flex-row items-center bg-white px-4">
			{#if currentStep > 0}
				<button
					class="rounded-md  px-4 py-3 text-sm font-medium text-coolGray"
					on:click={() => currentStep--}>Go back</button
				>
			{/if}
			<div class="flex-1" />

			<button
				class="rounded-md bg-marineBlue px-4 py-3 text-sm font-medium text-white"
				class:bg-purplishBlue={currentStep === countSteps - 1}
				on:click={() => advanceStep()}
				>{currentStep < countSteps - 1 ? 'Next Step' : 'Confirm'}</button
			>
		</div>
	</div>
</div>

<style>
	.selected {
		@apply bg-lightBlue;
		@apply text-black;
		@apply border-lightBlue;
	}
</style>
