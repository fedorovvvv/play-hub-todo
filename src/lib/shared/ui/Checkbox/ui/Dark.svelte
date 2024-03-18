<script lang="ts">
	import randomId from '$shared/lib/randomId';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends Omit<HTMLInputAttributes, 'type'> {
		class?: string;
		checked?: boolean;
		id?: string;
	}

	let className = '';
	export { className as class };
	export let checked: $$Props['checked'] = undefined;
	export let id = randomId();
</script>

<label class={`Checkbox ${className}`} for={id}>
	<input {id} type="checkbox" bind:checked {...$$restProps} on:change />
	{checked ? '🌝' : '🌚'}
</label>

<style lang="postcss">
	.Checkbox {
		display: block;
		cursor: pointer;
		position: relative;
		font-size: 24px;
		input {
			display: none;
		}
	}
</style>
