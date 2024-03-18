<script lang="ts">
	import type { ITask } from '../model';

	interface $$Props {
		class?: string;
		task: ITask;
	}

	let className = '';
	export { className as class };
	export let task: $$Props['task'];
</script>

<div class={`Task ${className}`}>
	<slot name="checkbox" {task} />
	<h3 class="Task__name" class:Task__name_through={task.completed}>{task.name}</h3>
	{#if $$slots.buttons}
		<div class="Task__buttons">
			<slot name="buttons" {task} />
		</div>
	{/if}
</div>

<style lang="postcss">
	.Task {
		display: flex;
		align-items: center;
		border: 2px solid var(--color-secondary);
		border-radius: 12px;
		background: var(--color-background);
		padding: 6px;
		&__name {
			margin-left: 10px;
			font-size: 16px;
			font-weight: 600;
			&_through {
				text-decoration: line-through;
				opacity: 0.6;
			}
		}
		&__buttons {
			margin-left: auto;
			display: flex;
			align-items: center;
			gap: 6px;
		}
	}
</style>
