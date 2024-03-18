import { browser } from '$app/environment';
import type { ThemeValues } from './types';

export default (theme: ThemeValues) => {
	if (!browser) return;
	document.body.setAttribute('data-theme', theme);
};
