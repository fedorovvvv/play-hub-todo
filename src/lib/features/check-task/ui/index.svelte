<script lang="ts">
	import type { ITask } from '$entities/task';
	import { Checkbox } from '$shared/ui/Checkbox';

	interface $$Props {
		class?: string;
		completed: ITask['completed'];
	}

	let className = '';
	export { className as class };
	export let completed: $$Props['completed'];
</script>

<svelte:component
	this={$Checkbox}
	class={`CheckTaskCheckbox ${className}`}
	bind:checked={completed}
/>
