import Link from "next/link";
import React from "react";

export const AdminLogin = () => {
	return (
		<div className='py-20 px-10 rounded-lg bg-gray-400 text-black flex flex-col gap-4 items-center justify-center'>
			<h1 className='text-center text-2xl text-black '>
				Log In if you are an Admin
			</h1>

			<Link href='admin/dashboard'>
				<button className='btn btn-primary block mx-auto'>
					Log In as Admin
				</button>
			</Link>
		</div>
	);
};
