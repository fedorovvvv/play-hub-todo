<script>
	import '$appLayer/styles/index.css';
	import { addDarkThemeListener } from '$shared/lib/theme';
	import { themeStore } from '$shared/store/theme';
	import { Header } from '$widgets/Header';
	import { onDestroy } from 'svelte';
	import { t } from 'svelte-i18n';

	const removeDarkThemeListener = addDarkThemeListener(({ matches }) =>
		themeStore.set({ current: matches ? 'dark' : 'light' })
	);

	onDestroy(() => {
		removeDarkThemeListener();
	});
</script>

<svelte:head>
	<title>{$t('general.app-name')}</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>

<style lang="postcss">
	main {
		padding: 20px 0;
	}
</style>
