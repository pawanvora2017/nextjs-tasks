"use client";
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className="btn btn-error btn-sm text-white font-normal"
			disabled={pending}
		>
			{pending ? "Please wait..." : "Delete"}
		</button>
	);
};

const DeleteTask = ({ id }) => {
	return (
		<form action={deleteTask}>
			<input type="hidden" name="id" value={id} />
			<SubmitBtn />
		</form>
	);
};

export default DeleteTask;
