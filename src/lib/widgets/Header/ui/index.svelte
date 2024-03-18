<script>
	import { ChangeLocaleButton } from '$features/change-locale';
	import { ChangeThemeButton } from '$features/change-theme';
	import { t } from 'svelte-i18n';
</script>

<header class="Header">
	<h1 class="Header__title">{$t('general.app-name')}</h1>
	<div class="Header__buttons">
		<ChangeLocaleButton />
		<ChangeThemeButton />
	</div>
</header>

<style lang="postcss">
	.Header {
		display: flex;
		align-items: center;
		padding: 10px 20px;
		&__title {
			font-size: 36px;
		}
		&__buttons {
			display: flex;
			align-items: center;
			margin-left: auto;
			gap: 10px;
		}
	}
</style>
