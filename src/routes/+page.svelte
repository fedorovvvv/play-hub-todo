<script>
	import { createTaskListStore } from '$entities/task';
	import { TodoList } from '$widgets/TodoList';

	const taskListStore = createTaskListStore([], {
		localStorageSave: true
	});
</script>

<div class="container">
	<TodoList {taskListStore} />
</div>

<style lang="postcss">
	.container {
		width: 100%;
		max-width: 600px;
		padding: 0 20px;
		margin: 0 auto;
	}
</style>
