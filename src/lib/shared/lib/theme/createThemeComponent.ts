import type { ThemeValues } from './types';
import { derived } from 'svelte/store';
import type { ThemeStore } from './createThemeStore';

export default <T>(themeStore: ThemeStore, map: Map<ThemeValues, T>) => {
	return derived(themeStore, ($themeStore) => {
		return map.get($themeStore.current);
	});
};
