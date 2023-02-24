<script lang="ts">
	import Input from './Input.svelte';
	import { z } from 'zod';

	const formSchema = z.object({
		name: z.string().min(1, 'This field is required'),
		mail: z.string().min(1, 'This field is required').email('Not a valid email'),
		phone: z.string().min(1, 'This field is required')
	});

	let form = {
		name: '',
		mail: '',
		phone: ''
	};

	let errors: any;

	export const validate: () => boolean = () => {
		try {
			errors = null;
			formSchema.parse(form);
			return true;
		} catch (err) {
			if (err instanceof z.ZodError) {
				const { fieldErrors } = err.flatten();
				errors = fieldErrors;
			}
			return false;
		}
	};
</script>

<div class="flex w-full flex-col gap-2 rounded-lg bg-white px-6 py-8">
	<p class="text-2xl font-bold text-marineBlue">Personal info</p>
	<p class=" text-coolGray">Please provide your name, email address, and phone number.</p>

	<Input
		label="Name"
		placeholder="e.g. Stephen King"
		errorMessage={errors?.name ? errors.name[0] : null}
		bind:value={form.name}
	/>

	<Input
		label="Email Address"
		placeholder="e.g. stephenking@lorem.com"
		errorMessage={errors?.mail ? errors.mail[0] : null}
		bind:value={form.mail}
	/>

	<Input
		label="Phone Number"
		placeholder="e.g. +1 234 567 890"
		errorMessage={errors?.phone ? errors.phone[0] : null}
		bind:value={form.phone}
	/>
</div>
