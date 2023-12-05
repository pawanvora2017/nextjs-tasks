import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";

const TasksPage = () => {
	return (
		<>
			<h1 className="text-4xl mb-8">Tasks</h1>

			<TaskForm />
			<TaskList />
		</>
	);
};

export default TasksPage;
