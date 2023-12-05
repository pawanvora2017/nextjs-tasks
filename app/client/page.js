"use client";
import { useState } from "react";

const ClientPage = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-5xl mb-8 font-bold">Client Page</h1>
			<p className="flex items-center gap-4">
				<button onClick={() => setCount(count - 1)} className="btn btn-primary">
					-
				</button>
				<span className="w-16 text-center">{count}</span>
				<button onClick={() => setCount(count + 1)} className="btn btn-primary">
					+
				</button>
			</p>
		</>
	);
};

export default ClientPage;
