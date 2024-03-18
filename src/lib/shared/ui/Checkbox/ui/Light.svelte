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
	<span></span>
</label>

<style lang="postcss">
	.Checkbox {
		--fill-space: 6px;
		display: block;
		border: 2px solid var(--color-secondary);
		background: var(--color-background);
		height: 24px;
		width: 24px;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		input {
			display: none;
			&:checked ~ span {
				position: absolute;
				top: 50%;
				left: 50%;
				border-radius: 2px;
				transform: translate(-50%, -50%);
				width: calc(100% - var(--fill-space));
				height: calc(100% - var(--fill-space));
				background: var(--color-primary);
			}
		}
	}
</style>
