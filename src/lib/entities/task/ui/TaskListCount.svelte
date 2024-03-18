<script lang="ts">
	import { derived } from 'svelte/store';
	import type { TaskListStore } from '..';

	interface $$Props {
		class?: string;
		store: TaskListStore;
	}

	let className = '';
	export { className as class };
	export let store: $$Props['store'];

	const tasks = derived(store, ($store) => ({
		all: $store.length,
		completed: $store.filter((task) => task.completed).length
	}));
</script>

<span class={`TaskListCount ${className}`}><small>{$tasks.completed}</small>/{$tasks.all}</span>

<style lang="postcss">
	.TaskListCount {
		font-size: 22px;
		color: var(--color-secondary);
		font-weight: 400;
		letter-spacing: 0.1em;
		small {
			opacity: 0.7;
			font-size: 0.9em;
		}
	}
</style>
