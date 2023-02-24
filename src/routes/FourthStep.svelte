<script lang="ts">
	import type { Form } from './interfaces';

	export let form: Form;

	const getPrice = (price: number, yearlyBilling: boolean) => {
		return !yearlyBilling ? `+$${price}/mo` : `+$${price * 10}/yr`;
	};

	const getTotalPrice = () => {
		return getPrice(
			form.planPrice +
				form.addOns
					.filter((a) => a.enabled)
					.map((a) => a.price)
					.reduce((a, b) => a + b, 0),
			form.yearlyBilling
		);
	};
</script>

<div class="flex w-full flex-col gap-4 rounded-lg bg-white px-6 py-8">
	<p class="text-2xl font-bold text-marineBlue">Finishing up</p>
	<p class=" text-coolGray">Double-check everything looks OK before confirming.</p>

	<div
		class="flex w-full flex-col gap-3 overflow-hidden rounded-md bg-purplishBlue bg-opacity-5 p-4"
	>
		<div class="flex flex-row items-center">
			<div>
				<p class="text-md font-medium text-marineBlue">
					{form.plan} ({!form.yearlyBilling ? 'Monthly' : 'Yearly'})
				</p>
				<p class="text-md text-coolGray underline">Change</p>
			</div>

			<p class="text-md flex-1 text-end font-medium text-marineBlue">
				{getPrice(form.planPrice, form.yearlyBilling)}
			</p>
		</div>

		<div class="h-px bg-lightGray" />

		{#each form.addOns.filter((a) => a.enabled) as addOn}
			<div class="flex flex-row">
				<p class="text-md text-coolGray">{addOn.title}</p>
				<p class="flex-1 text-end text-sm font-medium text-marineBlue">
					{getPrice(addOn.price, form.yearlyBilling)}
				</p>
			</div>
		{/each}
	</div>

	<div class="flex flex-row px-4">
		<p class="text-md text-coolGray">Total (per {form.yearlyBilling ? 'year' : 'month'})</p>

		<p class="text-md flex-1 text-end font-medium text-purplishBlue">{getTotalPrice()}</p>
	</div>
</div>
