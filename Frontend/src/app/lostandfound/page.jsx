"use client";
import React, { useState } from 'react';

const LostAndFound = () => {
	const items = [
		{
			id: 1,
			title: 'Found a Watch at the eastern gate entrance of farmgate station',
			image: '/watch.jpg',
			category: 'Watches',
			brand: 'Rolex',
			color: 'Gold',
			material: 'Stainless Steel',
			description: 'Sed ultricies turpis eget commodo condimentum...',
		},
		{
			id: 2,
			title: 'Found an Android Phone at MRT RECHARGE CENTER',
			image: '/mobile.jpg',
			category: 'Mobile Phones',
			brand: 'Samsung',
			color: 'Black',
			material: 'Glass & Metal',
			description: 'Etiam accumsan quis augue a pulvinar...',
		},
		{
			id: 3,
			title: 'Found Keys at Shewrapara Station',
			image: '/keys.jpeg',
			category: 'Keys',
			brand: 'N/A',
			color: 'Silver',
			material: 'Metal',
			description: 'Suspendisse nisl diam, pretium ut placerat...',
		},
		{
			id: 4,
			title: 'Found an Android Phone at Shyamoli Station',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac venenatis nisl...',
			image: '/mobile.jpg',
			category: 'Mobile Phones'
		},
		{
			id: 5,
			title: 'Found a Watch near Mirpur 12 Station',
			description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
			image: '/watch.jpg',
			category: 'Watches'
		},


		{
			id: 6,
			title: 'Found a Watch at Uttara Sector 7 Station',
			description: 'Mauris vitae nisi ultricies, dignissim nunc id, congue lectus. Sed id nisl at lorem iaculis ...',
			image: '/watch.jpg',
			category: 'Watches'
		},
		{
			id: 7,
			title: 'Found Keys at Mouchak Station',
			description: 'Nullam vel justo scelerisque, gravida nunc at, dapibus magna. Ut faucibus erat urna...',
			image: '/keys.jpeg',
			category: 'Keys'
		},
		{
			id: 8,
			title: 'Found Keys at Kamalapur Station',
			description: 'Vivamus vel sapien eget nisl tempus aliquam et et risus. Curabitur et nisi felis...',
			image: '/keys.jpeg',
			category: 'Keys'
		},
		{
			id: 9,
			title: 'Found an Android Phone at Mirpur 10 Station',
			description: 'Aliquam eu erat orci. Nulla vehicula ante et euismod tincidunt. Cras non dolor leo...',
			image: '/mobile.jpg',
			category: 'Mobile Phones'
		},

		{
			id: 10,
			title: 'Found a Watch at the southern gate of Banani Station',
			description: 'Quisque auctor purus vitae fermentum interdum. Integer id nunc ante. Mauris finibus ligula eu augue...',
			image: '/watch.jpg',
			category: 'Watches'
		}
	];

	const [expandedItemId, setExpandedItemId] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('All');
	const filteredItems = selectedCategory === 'All'
		? items
		: items.filter(item => item.category === selectedCategory);

	const toggleItemExpansion = (id) => {
		setExpandedItemId(expandedItemId === id ? null : id);
	};

	return (
		<div className="min-h-screen bg-slate-800- p-8 ">
			<div className="complain_conatiner">
				<h1 className="text-5xl font-bold text-center text-gray-900 mb-12 graph_heading complain_dashboard">Lost and Found Items</h1>
			</div>
			<div className="flex flex-col lg:flex-row gap-8">
				{/* Sidebar */}
				<div className="bg-gradient-to-t from-orange-400 to-300 bg-transparent opacity-80 w-full lg:w-1/4 p-6 shadow-2xl rounded-xl hover:border-orange-300 hover:ring-1 hover:ring-black ">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6 graph_heading">Categories</h2>
					<ul className="space-y-4">
						<li
							className="py-3 px-4 cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
							onClick={() => setSelectedCategory('Mobile Phones')}
						>
							Mobile Phones
						</li>
						<li
							className="py-3 px-4 cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
							onClick={() => setSelectedCategory('Keys')}
						>
							Keys
						</li>
						<li
							className="py-3 px-4 cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
							onClick={() => setSelectedCategory('Watches')}
						>
							Watches
						</li>
						<li
							className="py-3 px-4 cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
							onClick={() => setSelectedCategory('All')}
						>
							All Items
						</li>
					</ul>
				</div>

				{/* Items Grid */}
				<div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 graph_heading">
					{filteredItems.map((item) => (
						<div
							key={item.id}
							className={`bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${expandedItemId === item.id ? '' : ''
								} hover:ring-1 hover:ring-black`}
							onClick={() => toggleItemExpansion(item.id)}
						>
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-56 object-cover rounded-t-2xl"
							/>
							<div className="p-6">
								<h2 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h2>
								{expandedItemId === item.id && (
									<div className="mt-4 space-y-2 text-gray-700">
										<p><strong>Brand:</strong> {item.brand}</p>
										<p><strong>Color:</strong> {item.color}</p>
										<p><strong>Material:</strong> {item.material}</p>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LostAndFound;