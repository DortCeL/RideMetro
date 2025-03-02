import Link from "next/link";
import { Home, Users, Link as LinkIcon } from "lucide-react"; // Import icons

export const AdminSidebar = () => {
	return (
		<aside className='w-64 bg-gray-800 text-white h-screen p-4'>
			<h2 className='text-gray-400 text-lg font-normal my-5 inline-flex items-center gap-2'>
				<LinkIcon size={20} />
				<p>Quick links</p>
			</h2>
			<ul className='px-4'>
				<li className='mb-2 flex items-center gap-2'>
					<Home size={20} /> {/* Home icon */}
					<Link href='/admin/dashboard'>
						<span className='cursor-pointer hover:underline'>Dashboard</span>
					</Link>
				</li>
				<li className='mb-2 flex items-center gap-2'>
					<Users size={20} /> {/* Users icon */}
					<Link href='/admin/dashboard/users'>
						<span className='cursor-pointer hover:underline'>Users</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
};
