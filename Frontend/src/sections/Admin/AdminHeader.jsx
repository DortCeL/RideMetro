import Link from "next/link";
import Logo from "@/assets/logotrain.png";
import Image from "next/image";

export const AdminHeader = () => {
	return (
		<header className=' bg-gray-900 text-white w-full shadow p-4 '>
			<div className='flex justify-between items-center'>
				<div className='inline-flex items-center gap-1'>
					{/* <Image src={Logo} alt='Logo' height={65} width={65} /> */}
					<p className='font-extrabold tracking-tight -translate-y-1'>
						RideMetro
					</p>
				</div>
				<h1 className='text-xl font-bold tracking-wider'>Admin Panel</h1>
				<div>
					<Link href='/admin'>
						<button className='px-4 py-2 bg-gray-800 text-white rounded'>
							Logout
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};
