import Link from "next/link";
const AboutInfoPage = () => {
	return (
		<div>
			<h1 className="text-7xl">AboutInfoPage</h1>
			<Link href="/about" className="text-2xl">
				About Page
			</Link>
		</div>
	);
};

export default AboutInfoPage;
