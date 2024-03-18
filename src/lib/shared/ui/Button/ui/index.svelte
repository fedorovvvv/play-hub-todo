<script lang="ts">
	interface $$Props {
		class?: string;
		variant?: 'primary' | 'secondary' | 'active';
	}

	let className = '';
	export { className as class };
	export let variant: $$Props['variant'] = undefined;
</script>

<button data-variant={variant} class={`Button ${className}`} on:click><slot /></button>

<style lang="postcss">
	.Button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 100px;
		background-color: var(--button-background-color);
		color: var(--button-txt-color);
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		padding: 10px 14px;
		&[data-variant='secondary'] {
			background-color: var(--button-v-secondary-background-color);
			color: var(--button-v-secondary-txt-color);
		}
		&[data-variant='active'] {
			background-color: var(--button-v-active-background-color);
			color: var(--button-v-active-txt-color);
		}
	}
</style>
