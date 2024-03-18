<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		class?: string;
		value?: string;
	}

	let className = '';
	export { className as class };
	export let value: $$Props['value'] = '';
</script>

<input class={`Input ${className}`} bind:value {...$$restProps} />

<style lang="postcss">
	.Input {
		border: 2px solid var(--color-secondary);
		background: var(--color-background);
		border-radius: 10px;
		height: 40px;
		padding: 10px;
		font-weight: 500;
		font-size: 16px;
		color: var(--color-secondary);
	}
</style>
