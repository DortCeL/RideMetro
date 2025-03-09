import Marquee from "react-fast-marquee";

function CustomMarquee() {
	return (
		<div className='rounded-full xs:w-[200px] sm:w[300px] md:w-1/2 lg:w-1/3 px-4 py-2 mx-auto border-black border-2 bg-white -translate-y-5 overflow-clip flex justify-center items-center'>
			<Marquee loop={0} speed={50}>
				Metro services will be available tomorrow from 8am to
				9pm.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</Marquee>
		</div>
	);
}

export default CustomMarquee;
