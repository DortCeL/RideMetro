import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ride Metro",
	description: "Dhaka Metro Service",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='relative'>
			<body className={clsx(dmSans.className, "antialiased bg-[#e7e4d9]")}>
				{children}
			</body>
			{/* //! original */}
			{/* <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
				{children}
			</body> */}
		</html>
	);
}
