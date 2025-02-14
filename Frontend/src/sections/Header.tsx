import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logotrain.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
	return (
		<header className='sticky top-0 backdrop-blur-md z-20'>
			<div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
				<p className='text-white/60 hidden md:block'>
					Seamless commute all over Dhaka City
				</p>
			</div>
			<div className='py-2'>
				<div className='container'>
					<div className='flex items-center justify-between'>
						{/* Logo section */}
						<Link href='/' passHref>
							<div className='inline-flex items-center gap-1'>
								<Image src={Logo} alt='Logo' height={65} width={65} />
								<p className='font-extrabold tracking-tight -translate-y-1'>
									RideMetro
								</p>
							</div>
						</Link>
						<MenuIcon className='h-5 w-5 md:hidden' />

						<nav className='hidden md:flex gap-6 text-black/60 font-bold items-center'>
							<Link href='/guide' passHref>
								Guide
							</Link>
							<Link href='/#pricing' passHref>
								Pricing
							</Link>
							<Link href='/lostandfound' passHref>
								Lost & Found
							</Link>
							<Link href='/' passHref>
								Complaints
							</Link>
							<Link href='/' passHref>
								Details
							</Link>
							<button className='btn btn-primary animate-bounce'>Log In</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
