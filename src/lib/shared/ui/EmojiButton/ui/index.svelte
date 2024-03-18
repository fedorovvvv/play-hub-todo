<script lang="ts">
	interface $$Props {
		class?: string;
	}

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<button class={`EmojiButton ${className}`} on:click>
	<slot />
</button>

<style lang="postcss">
	.EmojiButton {
		display: block;
		border: none;
		background: none;
		font-size: 24px;
		cursor: pointer;
	}
</style>
