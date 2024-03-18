import type { ThemeValues } from './types';
import { DEFAULT_THEME_VALUE, LOCAL_STORAGE_THEME_KEY } from './config';
import { persisted } from 'svelte-local-storage-store';

export default (initialValue: ThemeValues) => {
	const { set, subscribe, update } = persisted<{ current: ThemeValues }>(LOCAL_STORAGE_THEME_KEY, {
		current: initialValue
	});

	const setDark = () => {
		set({ current: 'dark' });
	};

	const setLight = () => {
		set({ current: 'light' });
	};

	const toggle = () => {
		update((theme) => {
			switch (theme.current) {
				case 'dark':
					return { current: 'light' };
				case 'light':
					return { current: 'dark' };
				default:
					return { current: DEFAULT_THEME_VALUE };
			}
		});
	};

	return {
		subscribe,
		setDark,
		setLight,
		set,
		toggle
	};
};
