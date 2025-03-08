import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

import { AuthProvider } from "@/context/AuthContext";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Ride Metro",
	description: "Dhaka Metro Service",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={clsx(dmSans.className, "antialiased bg-[#e7e4d9]")}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
