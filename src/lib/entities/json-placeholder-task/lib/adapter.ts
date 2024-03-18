import type { ITask } from '$entities/task';
import type { IJsonPlaceholderTask } from '../model';

export default ({ id, title, completed }: IJsonPlaceholderTask): ITask => ({
	id: id,
	name: title,
	completed: completed
});
