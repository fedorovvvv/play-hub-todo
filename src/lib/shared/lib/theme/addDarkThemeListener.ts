import { browser } from '$app/environment';

export default (listener: (mediaQueryData: MediaQueryListEvent) => void): VoidFunction => {
	if (!browser) return () => {};

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	media.addEventListener('change', listener);

	return () => media.removeEventListener('change', listener);
};
