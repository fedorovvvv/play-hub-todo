<script lang="ts">
	interface $$Props {
		class?: string;
		variant?: 'primary' | 'secondary' | 'active';
		loading?: boolean;
		disabled?: boolean;
	}

	let className = '';
	export { className as class };
	export let variant: $$Props['variant'] = undefined;
	export let loading: $$Props['loading'] = false;
	export let disabled: $$Props['disabled'] = false;
</script>

<button
	data-loading={loading}
	disabled={disabled || loading}
	data-variant={variant}
	class={`Button ${className}`}
	on:click
>
	<span><slot /></span>
</button>

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
		position: relative;
		padding: 10px 14px;
		&:disabled {
			pointer-events: none;
			opacity: 0.6;
		}
		&[data-variant='secondary'] {
			background-color: var(--button-v-secondary-background-color);
			color: var(--button-v-secondary-txt-color);
		}
		&[data-variant='active'] {
			background-color: var(--button-v-active-background-color);
			color: var(--button-v-active-txt-color);
		}
		&[data-loading='true'] {
			span {
				opacity: 0;
			}
			&:before {
				content: '🕑🕑';
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>
