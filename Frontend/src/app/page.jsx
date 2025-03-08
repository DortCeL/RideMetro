import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import CustomMarquee from "@/components/CustomMarquee";
import { Pricing } from "@/sections/Pricing";
import { Footer } from "@/sections/Footer";

import { AuthProvider } from "../context/AuthContext";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<div className='bg-white'>
				<CustomMarquee />
			</div>
			<Pricing />
			<Footer />
		</>
	);
}
