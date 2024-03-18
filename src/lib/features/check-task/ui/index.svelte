<script lang="ts">
	import type { ITask } from '$entities/task';
	import { Checkbox } from '$shared/ui/Checkbox';

	interface $$Props {
		class?: string;
		checked: ITask['checked'];
	}

	let className = '';
	export { className as class };
	export let checked: $$Props['checked'];
</script>

<Checkbox class={`CheckTaskCheckbox ${className}`} bind:checked />
