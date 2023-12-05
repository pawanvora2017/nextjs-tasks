import Image from "next/image";
import Link from "next/link";

const url = "https://thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchSingleDrink = async (id) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const response = await fetch(`${url}${id}`);
	// throw error
	if (!response.ok) {
		throw new Error("Something went wrong! Failed to fetch a drink :-(");
	}

	const data = await response.json();
	return data?.drinks[0];
};

const SingleDrinkPage = async ({ params }) => {
	const drink = await fetchSingleDrink(params.id);
	const id = drink?.idDrink;
	const title = drink?.strDrink;
	const imgSrc = drink?.strDrinkThumb;

	return (
		<>
			<h1 className="text-4xl">{title}</h1>
			<p className="mb-8">ID: {id}</p>
			<div className="relative h-64 mb-8">
				<Image
					src={drink.strDrinkThumb}
					alt={drink.strDrink}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
					className="shadow-lg rounded-md object-cover"
				/>
			</div>

			<p className="mb-8">
				<Link href="/drinks" className="btn btn-link pl-0 font-normal uppercase">
					Back to Drinks
				</Link>
			</p>
		</>
	);
};

export default SingleDrinkPage;
