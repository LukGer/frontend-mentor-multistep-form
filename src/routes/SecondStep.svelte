<script lang="ts">
	export let plan: string;
	export let planPrice: number;
	export let yearlyBilling = false;

	export const validate = () => true;
</script>

<div class="flex w-full flex-col gap-2 rounded-lg bg-white px-6 py-8">
	<p class="text-2xl font-bold text-marineBlue">Select your plan</p>
	<p class=" text-coolGray">You have the option of monthly or yearly billing.</p>

	<button
		on:click={() => ((plan = 'Arcade'), (planPrice = 9))}
		class="flex flex-row items-center gap-4 rounded-md border-[1px] border-lightGray bg-opacity-5  p-4 transition-colors duration-150"
		class:border-purplishBlue={plan === 'Arcade'}
		class:bg-purplishBlue={plan === 'Arcade'}
	>
		<img src="/icon-arcade.svg" alt="arcade" />

		<div class="flex flex-col items-start">
			<p class="font-medium text-marineBlue">Arcade</p>
			<p class="text-sm text-coolGray">{!yearlyBilling ? '$9/mo' : '$90/yr'}</p>
			{#if yearlyBilling}
				<p class="text-sm text-marineBlue">2 months free</p>
			{/if}
		</div>
	</button>

	<button
		on:click={() => ((plan = 'Advanced'), (planPrice = 12))}
		class="flex flex-row items-center gap-4 rounded-md border-[1px] border-lightGray bg-opacity-5  p-4 transition-colors duration-150"
		class:border-purplishBlue={plan === 'Advanced'}
		class:bg-purplishBlue={plan === 'Advanced'}
	>
		<img src="/icon-advanced.svg" alt="arcade" />

		<div class="flex flex-col items-start">
			<p class="font-medium text-marineBlue">Advanced</p>
			<p class="text-sm text-coolGray">{!yearlyBilling ? '$12/mo' : '$120/yr'}</p>
			{#if yearlyBilling}
				<p class="text-sm text-marineBlue">2 months free</p>
			{/if}
		</div>
	</button>

	<button
		on:click={() => ((plan = 'Pro'), (planPrice = 15))}
		class="flex flex-row items-center gap-4 rounded-md border-[1px] border-lightGray bg-opacity-5  p-4 transition-colors duration-150"
		class:border-purplishBlue={plan === 'Pro'}
		class:bg-purplishBlue={plan === 'Pro'}
	>
		<img src="/icon-pro.svg" alt="arcade" />

		<div class="flex flex-col items-start">
			<p class="font-medium text-marineBlue">Pro</p>
			<p class="text-sm text-coolGray">{!yearlyBilling ? '$15/mo' : '$150/yr'}</p>
			{#if yearlyBilling}
				<p class="text-sm text-marineBlue">2 months free</p>
			{/if}
		</div>
	</button>

	<div
		class="mt-4 flex h-12 flex-row items-center justify-center gap-4 rounded-md bg-purplishBlue bg-opacity-5"
	>
		<p class="text-md font-medium text-coolGray" class:text-marineBlue={!yearlyBilling}>Monthly</p>

		<label class="relative w-12 rounded-full bg-marineBlue">
			<input type="checkbox" class="h-0 w-0 opacity-0" bind:checked={yearlyBilling} />
			<span class="slider absolute inset-0 before:bg-white" />
		</label>

		<p class="text-md font-medium text-coolGray" class:text-marineBlue={yearlyBilling}>Yearly</p>
	</div>
</div>

<style>
	.slider:before {
		position: absolute;
		content: '';
		@apply m-1 h-4 w-4 rounded-full bg-white transition-transform duration-150;
	}

	input:checked + .slider:before {
		transform: translateX(calc(100% + 0.5rem));
	}
</style>
