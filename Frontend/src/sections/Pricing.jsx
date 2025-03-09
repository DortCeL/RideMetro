import { PriceChecker } from "@/components/PriceChecker";
import Image from "next/image";
import mapImage from "@/assets/metromap.png";

export const Pricing = () => {
	return (
		<section
			id='pricing'
			className='  py-24 bg-gradient-to-b from-[#FFFFFF] to-[#e7e4d9]'
		>
			<div className='container grid grid-cols-1 md:grid-cols-2 gap-4  items-center'>
				<PriceChecker />
				<Image src={mapImage} alt='metro map' className='rounded-lg' />
			</div>
		</section>
	);
};
