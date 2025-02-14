import Image from "next/image";
import logo from "@/assets/logotrain.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
	return (
		<footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
			<div className='container'>
				<div
					className="inline-flex relative 
                      before:content-[''] before:top-2 before:bottom-0 before:w-full before:absolute before:blur-2xl
                      before:bg-gradient-to-r from-[#F87BFF] via-[#FB92CF] via-[#FFDD9B] via-[#C2F0B1] to-[#2FD8FE]"
				>
					<Image
						src={logo}
						alt='Logo'
						height={80}
						className='relative hover:animate-pulse'
					/>
				</div>
				<nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
					<a href='#'>IDK</a>
					<a href='#'>IDKnow</a>
					<a href='#'>IDontK</a>
					<a href='#'>IDonK</a>
					<a href='#'>I Dont Know</a>
				</nav>
				<div className='flex justify-center gap-6 my-6'>
					<SocialX />
					<SocialInsta />
					<SocialLinkedIn />
					<SocialPin />
					<SocialYoutube />
				</div>

				<p>&copy; 2025 RideMetro, Inc. All rights reserved.</p>
			</div>
		</footer>
	);
};
