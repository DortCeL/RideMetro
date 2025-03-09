export const UsersList = ({ users, loading, error }) => {
	return (
		<div>
			<h2 className='text-2xl font-bold mb-4'>User List</h2>

			{loading ? (
				<p className='text-blue-500'>Loading...</p>
			) : error ? (
				<p className='text-red-500'>{error}</p>
			) : users.length === 0 ? (
				<p className='text-gray-500'>No users found.</p>
			) : (
				<table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
					<thead className='bg-gray-800 text-white'>
						<tr>
							<th className='py-3 px-6 text-left'>ID</th>
							<th className='py-3 px-6 text-left'>Name</th>
							<th className='py-3 px-6 text-left'>Email</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id} className='border-b hover:bg-gray-100'>
								<td className='py-3 px-6'>{user.id}</td>
								<td className='py-3 px-6'>{user.name}</td>
								<td className='py-3 px-6'>{user.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};
