<script lang="ts">
	import { Task, TaskListCount } from '$entities/task';
	import type { TaskListStore } from '$entities/task/model';
	import { AddTask } from '$features/add-task';
	import { CheckTaskCheckbox } from '$features/check-task';
	import { LoadTasksFromApiButton } from '$features/load-tasks-from-api';
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
				<CheckTaskCheckbox bind:completed={task.completed} slot="checkbox" />
				<svelte:fragment slot="buttons">
					<RemoveTaskButton taskId={task.id} store={taskListStore} />
				</svelte:fragment>
			</Task>
		{/each}
	</div>
	<div class="TodoList__footer">
		<LoadTasksFromApiButton store={taskListStore} variant="secondary" />
		<TaskListCount store={taskListStore} />
	</div>
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
		&__footer {
			margin-top: 10px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
