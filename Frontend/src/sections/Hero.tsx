import ArrowIcon from "@/assets/arrow-right.svg";
import metroImage from "@/assets/metro.png";
import cogImage from "@/assets/cog.png";
import noodleImage from "@/assets/noodle.png";
import overpassImage from "@/assets/overpass.png";
import cylinderImage from "@/assets/cylinder.png";

import Tree from "@/assets/tree.png";
import Image from "next/image";

import Clock from "@/components/Clock";

export const Hero = () => {
	return (
		<section className='pt-8 pb-20 border-b-4 border-black/80 md:pt-8 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#c68642,#e7e4d9_100%)]'>
			<div className='container'>
				<div className='md:flex items-center'>
					{/*//! Text Section */}
					<div className='md:w-[478px]'>
						<div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>
							Fast & Reliable
						</div>
						{/* //* original one */}
						{/* <h1 className='text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'> 
					  Welcome to RideMetro
					</h1> */}
						<h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-red-600 text-transparent bg-clip-text'>
							Welcome to RideMetro
						</h1>

						<p className='text-xl text-[#4f2121] tracking-tighter mt-6'>
							Fast, reliable metro service offering schedules, routes,
							ticketing, and real-time updates.
						</p>
						<div className='flex gap-1 items-center mt-[30px]'>
							<button className='btn btn-primary'>
								<a href='#pricing'>See ticket price</a>
							</button>
							<button className='btn btn-text gap-1  hover:animate-bounce'>
								<span>Learn more</span>
								<ArrowIcon className='h-5 w-5' />
							</button>
						</div>
					</div>

					{/*//! Image section {Goes right on big screen, Goes Down in small screen} */}
					<div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
						<Image
							src={metroImage}
							alt='Metro Art'
							className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-10 lg:left-0'
						/>

						{/*//! Clock Section */}
						<div className='hidden md:block md:absolute text-4xl -left-48 top-5 lg:-left-20'>
							<Clock />
						</div>

						{/* <Image
							src={cylinderImage}
							alt='cylinder image'
							width={220}
							height={220}
							className='hidden md:block md:absolute -left-32 -top-8'
						/> */}

						{/* <Image
							src={Tree}
							alt='tree image'
							height={800}
							className='hidden lg:block z-5 absolute top-[200px] left-[560px] rotate-[-50deg] '
						/>
						<Image
							src={Tree}
							alt='tree image'
							height={1000}
							className='hidden lg:block z-5 absolute top-[300px] left-[-1000px] '
						/> */}

						{/* <Image
							src={overpassImage}
							alt='overpass image'
							height={220}
							width={220}
							className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
						/> */}
					</div>
				</div>
			</div>
		</section>
	);
};
