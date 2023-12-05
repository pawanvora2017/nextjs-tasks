import prisma from "@/utils/db";
import DeleteTask from "./DeleteTask";
import Link from "next/link";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
	const tasks = await getAllTasks();

	if (tasks.length === 0) {
		return <h2 className="text-accent text-lg">There are no tasks to show!</h2>;
	}

	return (
		<div className="flex flex-col gap-4">
			{tasks.map((task) => (
				<div
					key={task.id}
					className="px-4 py-2 flex justify-between items-center border border-slate-700 shadow-lg rounded-md"
				>
					<div
						className={`text-lg ${
							task.completed ? "line-through text-neutral-500" : null
						}`}
					>
						{task.content}
					</div>
					<div className="flex items-center gap-2">
						<Link
							href={`/tasks/${task.id}`}
							className="btn btn-accent btn-sm font-normal"
						>
							Edit
						</Link>

						<DeleteTask id={task.id} />
					</div>
				</div>
			))}
		</div>
	);
};

export default TaskList;
