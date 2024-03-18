<script lang="ts">
	import type { ITask, TaskListStore } from '$entities/task';

	interface $$Props {
		class?: string;
		disabled?: boolean;
		store: TaskListStore;
		taskId: ITask['id'];
	}

	let className = '';
	export { className as class };
	export let disabled: $$Props['disabled'] = false;
	export let store: $$Props['store'];
	export let taskId: $$Props['taskId'];

	const handler = {
		click() {
			store.remove(taskId);
		}
	};
</script>

<button {disabled} class={`RemoveTaskButton ${className}`} on:click={handler.click}>🗑️</button>

<style lang="postcss">
	.RemoveTaskButton {
		display: block;
		background: none;
		border: none;
		font-size: 20px;
		font-weight: 500;
		color: var(--color-secondary);
		cursor: pointer;
		&:disabled {
			opacity: 0.5;
			pointer-events: none;
		}
		&:hover {
			color: var(--color-primary);
		}
	}
</style>
