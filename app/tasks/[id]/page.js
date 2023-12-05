import EditForm from "@/components/EditForm";
import { getSingleTask } from "@/utils/actions";
import Link from "next/link";

const EditTaskPage = async ({ params }) => {
	const task = await getSingleTask(params.id);

	return (
		<>
			<Link href="/tasks" className="btn btn-link pl-0">
				Return to Tasks
			</Link>
			<h1 className="text-4xl">Edit Task</h1>
			<p className="text-sm mb-8">Task ID: {params.id}</p>

			<EditForm {...task} />
		</>
	);
};

export default EditTaskPage;
