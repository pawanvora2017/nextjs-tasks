"use client";

const error = (error) => {
	return <div>Error! {error.error.message}</div>;
};

export default error;
