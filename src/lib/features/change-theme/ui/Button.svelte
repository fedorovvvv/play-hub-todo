<script lang="ts">
	import { themeStore } from '$shared/store/theme';
	import { EmojiButton } from '$shared/ui/EmojiButton';

	interface $$Props {
		class?: string;
	}

	let className: $$Props['class'] = '';
	export { className as class };

	const handler = {
		click() {
			themeStore.toggle();
		}
	};
</script>

<EmojiButton class={`ChangeThemeButton ${className}`} on:click={handler.click}>
	{$themeStore.current === 'dark' ? '☀️' : '🌑'}
</EmojiButton>
