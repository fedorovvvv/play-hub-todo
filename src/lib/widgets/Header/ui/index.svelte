<script>
	import { ChangeLocaleButton } from '$features/change-locale';
	import { ChangeThemeButton } from '$features/change-theme';
	import { t } from 'svelte-i18n';
</script>

<header class="Header">
	<h2>{$t('general.app-name')}</h2>
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
		&__buttons {
			display: flex;
			align-items: center;
			margin-left: auto;
			gap: 10px;
		}
	}
</style>
