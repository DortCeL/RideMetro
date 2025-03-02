// pages/mrt-guidelines.js
// bg-[#63503c]
// pages/mrt-guidelines.js
import React from "react";

const MRTGuidelines = () => {
	const whatToDo = [
		"Stand in line even if you have an MRT pass.",
		"Let others get off before you board.",
		"Be mindful of the gap between the platform and the metro rail coach.",
		"Stand behind the yellow line on the platform for your safety.",
		"Give priority to people with special needs while using lifts.",
		"Leave designated seats for the elderly and for those with special needs.",
		"Stand on the left side of escalators.",
		"Refer to the metro rail map to choose your destination.",
		"Stay away from the yellow tactile paving built for the visually impaired.",
		"Maintain cleanliness at all times.",
		"Speak in a low voice.",
		"Cooperate with security personnel.",
		"Always carry your MRT pass.",
		"Pay attention to announcements.",
		"Take notice of guidance signs and displays inside the train for important travel information.",
	];

	const whatNotToDo = [
		"Do not smoke on the station premises.",
		"Do not rush or jostle with other passengers while boarding or getting off trains.",
		"Do not jump over the entry and exit gates on the second floor of the station.",
		"Do not use mobile phones while boarding or getting off trains.",
		"Do not obstruct train doors.",
		"Do not lean on the coach door.",
		"Do not leave mobile phone speakers switched on.",
		"Do not occupy multiple seats.",
		"Do not cause inconvenience to other passengers.",
		"Do not open the driver&apos;s cab door.",
		"Do not stand in the path between two coaches.",
		"Do not eat or drink inside the train.",
		"Do not spit, except in designated areas.",
		"Do not attach posters, banners, or graffiti in the metro rail area.",
		"Do not stick your head over the platform screen door to get a view of the metro rail.",
	];

	return (
		<div className='min-h-screen bg-gray-100 py-10'>
			<div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
				<header className='bg-[#63503c] text-white text-center py-6'>
					<h1 className='text-2xl font-bold'>MRT Guidelines</h1>
					<p className='mt-2'>
						Follow these rules for a safe and pleasant journey.
					</p>
				</header>

				<main className='p-6'>
					<section>
						<h2 className='text-xl font-semibold text-[#396134] mb-4'>
							What to Do
						</h2>
						<ul className='space-y-2 text-gray-800'>
							{whatToDo.map((item, index) => (
								<li key={index} className='flex items-start'>
									<span className='text-green-500 mr-2'>✔</span>
									{item}
								</li>
							))}
						</ul>
					</section>

					<section className='mt-8'>
						<h2 className='text-xl font-semibold text-red-600 mb-4'>
							What Not to Do
						</h2>
						<ul className='space-y-2 text-gray-800'>
							{whatNotToDo.map((item, index) => (
								<li key={index} className='flex items-start'>
									<span className='text-red-500 mr-2'>✘</span>
									{item}
								</li>
							))}
						</ul>
					</section>
				</main>

				<footer className='bg-gray-200 text-center py-4 text-sm text-gray-600'>
					<p>&copy; 2025 RideMetro Corporation. All rights reserved.</p>
				</footer>
			</div>
		</div>
	);
};

export default MRTGuidelines;
