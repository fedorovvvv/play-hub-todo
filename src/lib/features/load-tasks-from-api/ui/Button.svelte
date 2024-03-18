<script lang="ts">
	import {
		JSONPlaceholderTaskApi,
		jsonPlaceholderTaskAdapter
	} from '$entities/json-placeholder-task';
	import type { TaskListStore } from '$entities/task';
	import { Button } from '$shared/ui/Button';
	import type { ComponentProps } from 'svelte';
	import { t } from 'svelte-i18n';

	interface $$Props extends ComponentProps<Button> {
		class?: string;
		store: TaskListStore;
	}

	let className = '';
	export { className as class };
	export let store: $$Props['store'];

	let loading = false;

	const load = async () => {
		loading = true;
		try {
			const tasks = await JSONPlaceholderTaskApi.getAll();
			store.set(tasks.map(jsonPlaceholderTaskAdapter));
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	};

	const handler = {
		click() {
			load();
		}
	};
</script>

<Button
	class={`LoadTasksFromApiButton ${className}`}
	on:click={handler.click}
	{loading}
	{...$$restProps}
>
	{$t('load-tasks-from-api.button')}
</Button>
