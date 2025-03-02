import Image from "next/image";
import loginImage from "@/assets/loginpageimage.jpg";

function page() {
	return (
		<div className='flex h-screen'>
			{/* Left Section */}
			<div className='w-1/2 relative hidden md:block'>
				<Image
					src={loginImage} // Replace with your image path
					alt='Login Image'
					layout='fill'
					objectFit='cover'
				/>
			</div>

			{/* Right Section */}
			<div className='md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-50 p-8'>
				<h1 className='text-5xl font-extrabold mb-8 tracking-tighter'>
					RideMetro
				</h1>

				<form className='w-3/4'>
					<div className='mb-6'>
						<label
							htmlFor='mobile'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							Mobile
						</label>
						<input
							type='text'
							id='mobile'
							name='mobile'
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your mobile number'
						/>
					</div>

					<div className='mb-6'>
						<label
							htmlFor='password'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none'
							placeholder='Enter your password'
						/>
					</div>

					<button type='submit' className='btn btn-primary w-1/2 block mx-auto'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default page;
