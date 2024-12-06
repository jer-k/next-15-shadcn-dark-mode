import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";

type Props = {
	children: ReactNode;
};
export default function SiteLayout({ children }: Props) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<div>
					<main className="flex flex-col justify-between px-16 pt-4">
						{children}
					</main>
				</div>
			</ThemeProvider>
		</>
	);
}
