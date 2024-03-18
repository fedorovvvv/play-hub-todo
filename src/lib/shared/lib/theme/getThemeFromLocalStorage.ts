import { browser } from '$app/environment';
import { DEFAULT_THEME_VALUE, LOCAL_STORAGE_THEME_KEY } from './config';
import getThemeFromBrowser from './getThemeFromBrowser';
import type { ThemeValues } from './types';

export default (): ThemeValues => {
	if (browser) {
		const localStorageValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
		if (localStorageValue) {
			JSON.parse(localStorageValue)?.current ?? DEFAULT_THEME_VALUE;
		}
	}
	return getThemeFromBrowser();
};
