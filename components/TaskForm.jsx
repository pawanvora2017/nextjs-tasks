"use client";

import { addTask } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
	const { pending } = useFormStatus();

	return (
		<button type="submit" className="btn btn-primary join-item font-normal" disabled={pending}>
			{pending ? "Please wait..." : "Add Task"}
		</button>
	);
};

const initialState = {
	message: null,
};

const TaskForm = () => {
	const [state, formAction] = useFormState(addTask, initialState);

	// Toast Message
	useEffect(() => {
		if (state.type === "error") {
			toast.error(state.message);
			return;
		}
		if (state.type === "success") {
			toast.success(state.message);
			return;
		}
	}, [state]);

	return (
		<>
			<form action={formAction}>
				{/* Inline Message */}
				{/* {state.type === "success" && (
					<p className="bg-primary text-white px-4 py-2 rounded-md mb-4">
						{state.message}
					</p>
				)}
				{state.type === "error" && (
					<p className="bg-orange-200 text-red-600 px-4 py-2 rounded-md mb-4">
						{state.message}
					</p>
				)} */}
				<div className="join w-full mb-8">
					<input
						type="text"
						name="content"
						placeholder="Add Task"
						className="input input-bordered w-full max-w-xs join-item"
						required
					/>
					<SubmitBtn />
				</div>
			</form>
		</>
	);
};

export default TaskForm;
