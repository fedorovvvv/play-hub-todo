<script lang="ts">
	import { Task, TaskListCount } from '$entities/task';
	import type { TaskListStore } from '$entities/task/model';
	import { AddTask } from '$features/add-task';
	import { CheckTaskCheckbox } from '$features/check-task';
	import { RemoveTaskButton } from '$features/remove-task';

	interface $$Props {
		class?: string;
		taskListStore: TaskListStore;
	}

	let className = '';
	export { className as class };
	export let taskListStore: $$Props['taskListStore'];
</script>

<div class={`TodoList ${className}`}>
	<AddTask store={taskListStore} />
	<div class="TodoList__items">
		{#each $taskListStore as task (task.id)}
			<Task {task}>
				<CheckTaskCheckbox bind:checked={task.checked} slot="checkbox" />
				<svelte:fragment slot="buttons">
					<RemoveTaskButton taskId={task.id} store={taskListStore} />
				</svelte:fragment>
			</Task>
		{/each}
	</div>
	<TaskListCount class="TodoList__count" store={taskListStore} />
</div>

<style lang="postcss">
	.TodoList {
		display: flex;
		flex-direction: column;
		align-items: center;
		&__items {
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin-top: 16px;
			width: 100%;
		}
		:global(&__count) {
			margin-left: auto;
			margin-top: 10px;
		}
	}
</style>
