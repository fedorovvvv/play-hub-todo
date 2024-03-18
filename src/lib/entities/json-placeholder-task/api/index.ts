import type { IJsonPlaceholderTask } from '../model';

export const getAll = async () => {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
		const tasks = (await res.json()) as IJsonPlaceholderTask[];

		return tasks;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
