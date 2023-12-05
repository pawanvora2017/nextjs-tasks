import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
	return (
		<ul className="grid sm:grid-cols-2 gap-6">
			{drinks.map((drink) => (
				<li key={drink.idDrink} className="p-4">
					<Link href={`/drinks/${drink.idDrink}`}>
						{/* Responsive Image with fill and sizes (instead of width and height) */}
						<div className="relative h-48 mb-4">
							<Image
								src={drink.strDrinkThumb}
								alt={drink.strDrink}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
								className="rounded-md object-cover"
							/>
						</div>
						<h3 className="text-xl font-medium">{drink.strDrink}</h3>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default DrinksList;
