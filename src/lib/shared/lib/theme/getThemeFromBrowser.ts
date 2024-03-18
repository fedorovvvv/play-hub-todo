import { browser } from '$app/environment';
import { DEFAULT_THEME_VALUE } from './config';
import type { ThemeValues } from './types';

export default (): ThemeValues => {
	if (browser) {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	return DEFAULT_THEME_VALUE;
};
