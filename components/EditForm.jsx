import { updateTask } from "@/utils/actions";

const EditForm = ({ id, content, completed }) => {
	return (
		<form action={updateTask} className="flex items-center gap-4 w-full mb-8">
			<input type="hidden" name="id" value={id} />
			<input
				type="checkbox"
				name="completed"
				className="checkbox checkbox-primary"
				defaultChecked={completed}
			/>
			<div className="join">
				<input
					type="text"
					name="content"
					defaultValue={content}
					className="input input-bordered w-full join-item"
					required
				/>
				<button type="submit" className="btn btn-primary join-item font-normal">
					Save Changes
				</button>
			</div>
		</form>
	);
};

export default EditForm;
