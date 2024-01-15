import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Lettering By Muskan",
	description: "Beautiful calligraphy services at your fingertips!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
