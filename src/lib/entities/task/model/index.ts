import randomId from '$shared/lib/randomId';
import { persisted } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';

export interface ITask {
	id: string;
	name: string;
	completed?: boolean;
}

export interface ICreateTaskListStoreOptions {
	localStorageSave?: boolean;
}

const localStorageStore = (initialValue: ITask[]) => persisted('taskListStore', initialValue);

export const createTaskListStore = (
	initialValue: ITask[] = [],
	options?: ICreateTaskListStoreOptions
) => {
	const { set, subscribe, update } = (options?.localStorageSave ? localStorageStore : writable)<
		ITask[]
	>(initialValue);

	const add = (task: Omit<ITask, 'id'>) => {
		update((data) => [{ ...task, id: randomId() }, ...data]);
	};

	const remove = (id: ITask['id']) => {
		update((data) => data.filter((task) => task.id !== id));
	};

	const clear = () => set([]);

	const setCompleted = (id: ITask['id'], completed: ITask['completed']) => {
		update((data) => {
			const index = data.findIndex((task) => task.id === id);

			if (index === -1) return data;

			data[index].completed = completed;

			return data;
		});
	};

	return {
		subscribe,
		add,
		remove,
		clear,
		setCompleted,
		set
	};
};

export type TaskListStore = ReturnType<typeof createTaskListStore>;
