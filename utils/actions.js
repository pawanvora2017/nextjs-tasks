"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
	const allTasks = await prisma.task.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	return allTasks;
};

// Add Task
export const addTask = async (prevState, formData) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const content = formData.get("content");

	const Task = z.object({
		content: z.string().min(5).max(100),
	});

	try {
		Task.parse({ content });
		await prisma.task.create({
			data: {
				content,
			},
		});
		revalidatePath("/tasks");
		return { type: "success", message: "Task added" };
	} catch (error) {
		// console.log(error.errors[0]);
		return { type: "error", message: error.errors[0].message };
	}
};

// Delete Task
export const deleteTask = async (formData) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	await prisma.task.delete({
		where: {
			id: formData.get("id"),
		},
	});
	revalidatePath("/tasks");
};

// Get single task
export const getSingleTask = async (id) => {
	const task = await prisma.task.findUnique({
		where: {
			id: id,
		},
	});

	return task;
};

// Update task
export const updateTask = async (formData) => {
	const id = formData.get("id");
	const content = formData.get("content");
	const completed = formData.get("completed");

	await prisma.task.update({
		where: {
			id,
		},
		data: {
			content,
			completed: completed === "on",
		},
	});

	redirect("/tasks");
};
