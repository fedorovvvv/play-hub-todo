<script lang="ts">
	import { EmojiButton } from '$shared/ui/EmojiButton';
	import { locale } from 'svelte-i18n';

	interface $$Props {
		class?: string;
	}

	let className: $$Props['class'] = '';
	export { className as class };

	const handler = {
		click() {
			locale.set($locale === 'ru' ? 'en' : 'ru');
		}
	};
</script>

<EmojiButton class={`ChangeThemeButton ${className}`} on:click={handler.click}>
	{$locale === 'ru' ? '🇺🇸' : '🇷🇺'}
</EmojiButton>
