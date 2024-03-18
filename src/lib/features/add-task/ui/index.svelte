<script lang="ts">
	import type { ITask, TaskListStore } from '$entities/task';
	import { Button } from '$shared/ui/Button';
	import { Input } from '$shared/ui/Input';
	import { t } from 'svelte-i18n';

	interface $$Props {
		class?: string;
		store: TaskListStore;
		name?: ITask['name'];
	}

	let className = '';
	export { className as class };
	export let store: $$Props['store'];
	export let name: $$Props['name'] = '';

	const handler = {
		addClick() {
			if (!name) return;

			store.add({
				name
			});
			name = '';
		}
	};
</script>

<form class={`AddTask ${className}`}>
	<Input placeholder={$t('add-task.input.placeholder')} name="task-name" bind:value={name} />
	<Button disabled={!name} on:click={handler.addClick}>{$t('add-task.button')}</Button>
</form>

<style lang="postcss">
	.AddTask {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
