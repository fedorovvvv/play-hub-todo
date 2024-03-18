import { createThemeStore, getThemeFromLocalStorage, setBodyTheme } from '$shared/lib/theme';

const initialTheme = getThemeFromLocalStorage();

export const themeStore = createThemeStore(initialTheme);

themeStore.subscribe((theme) => {
	setBodyTheme(theme.current);
});
