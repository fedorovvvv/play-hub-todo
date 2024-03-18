import { type ITask } from '../../task/model/index';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import type { IJsonPlaceholderTask } from '../model';
import adapter from './adapter';

describe('json placeholder task adapter', () => {
	interface ITestContext {
		tasks: IJsonPlaceholderTask[];
	}
	beforeEach<ITestContext>((context) => {
		context.tasks = Array(100).map((_, i): IJsonPlaceholderTask => {
			return {
				completed: i % 2 === 0,
				id: i.toString(),
				title: i.toString(10),
				userId: i.toString()
			};
		});
	});
	test<ITestContext>('IJsonPlaceholderTask to ITask', (context) => {
		expect(context.tasks.map(adapter)).toEqual(
			context.tasks.map(({ id, title, completed }): ITask => ({ id, name: title, completed }))
		);
	});

	afterEach<ITestContext>((context) => {
		context.tasks = [];
	});
});
