import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(url);
	// throw error
	if (!response.ok) {
		throw new Error("Something went wrong! Failed to fetch drinks :-(");
	}

	const data = await response.json();
	return data.drinks;
};

const DrinksPage = async () => {
	const drinks = await fetchDrinks();

	return (
		<>
			<h1 className="text-4xl mb-8">Drinks</h1>
			<p className="font-bold mb-4">Fetched {drinks.length} drinks</p>
			<DrinksList drinks={drinks} />
		</>
	);
};

export default DrinksPage;
