// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { HiMenuAlt3 } from "react-icons/hi";
// import { GoReport, GoHistory } from "react-icons/go";
// import complain from "@/assets/complain.jpg";

// const ComplainPage = () => {
//     const menus = [
//         { name: 'Complain Box', link: 'complaints/complainbox', icon: GoReport, margin: true },
//         { name: 'History', link: 'complaints/history', icon: GoHistory },
//     ];

//     const [open, setOpen] = useState(true);

//     return (
        
//         <div
//             style={{
//                 backgroundImage: `url(${complain.src})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 minHeight: '100vh',
//             }}
//         >
//             <section className='flex gap-6'>
//                 <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
//                     <div className='py-3 flex items-center justify-between'>
//                         {open && (
//                             <span className="ride-metro" data-text="RideMetro">
//                                 RideMetro
//                             </span>
//                         )}
//                         <HiMenuAlt3
//                             size={26}
//                             className='cursor-pointer'
//                             onClick={() => setOpen(!open)}
//                         />
//                     </div>
//                     <div className='mt-4 flex flex-col gap-4 relative'>
//                         {menus.map((menu, i) => (
//                             <Link href={menu.link} key={i} className={` ${menu?.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md relative`}>
//                                 <div>
//                                     {React.createElement(menu.icon, { size: "20" })}
//                                 </div>
//                                 <h2
//                                     style={{ transitionDelay: open ? `${i * 100}ms` : '0ms' }}
//                                     className={`whitespace-pre transform transition-all duration-500 ease-in-out
//       ${open ? 'opacity-100 translate-x-0' : 'opacity-0'}`}
//                                 >
//                                     {menu.name}
//                                 </h2>

//                                 {!open && (
//                                     <span
//                                         className="absolute left-14 z-10 bg-white text-gray-900 font-semibold rounded-md drop-shadow-lg px-2 py-1 w-max
//         opacity-0 translate-x-[20px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:duration-300 ease-in-out"
//                                     >
//                                         {menu?.name}
//                                     </span>
//                                 )}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="complain_container mt-10">
//                     <p className="complain_dashboard text-cyan-50">Complaint Management System</p>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ComplainPage;