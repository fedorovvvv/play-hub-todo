import CheckboxComponent from './Light.svelte';
import CheckboxDarkComponent from './Dark.svelte';
import { createThemeComponent } from '$shared/lib/theme';
import { themeStore } from '$shared/store/theme';

const Checkbox = createThemeComponent(
	themeStore,
	new Map([
		['light', CheckboxComponent],
		['dark', CheckboxDarkComponent]
	])
);

export { Checkbox };
