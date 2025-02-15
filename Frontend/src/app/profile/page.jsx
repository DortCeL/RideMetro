import Image from "next/image";
import UserImage from "@/assets/avatar-1.png";
import CoverPhoto from "@/assets/loginpageimage.jpg";

export default function page() {
	return (
		<div className='w-full'>
			<section className='container'>
				<div className='h-[560px] relative'>
					<Image
						src={CoverPhoto}
						height={400}
						width={800}
						alt='cover phoot'
						className='absolute top-0 left-0'
					/>
					<Image
						src={UserImage}
						height={100}
						width={100}
						alt='user'
						className='absolute top-[200px] left-[80px]'
					/>
				</div>
			</section>

			<section>mid</section>
		</div>
	);
}
