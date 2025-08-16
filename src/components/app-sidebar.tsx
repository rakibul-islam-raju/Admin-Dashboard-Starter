import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarRail,
	useSidebar,
} from "@/components/ui/sidebar";
import { dashboardConfig } from "@/config/dashboard.config";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { Box } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { state } = useSidebar();

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader
				className={cn(
					"flex items-center justify-center",
					dashboardConfig.headerHeight
				)}
			>
				<div className="flex items-center justify-center gap-2">
					<Box />
					{state === "expanded" && (
						<h1 className="text-lg font-medium text-center">
							{siteConfig.name}
						</h1>
					)}
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavMain />
			</SidebarContent>
			{/* <SidebarFooter>
			</SidebarFooter> */}
			<SidebarRail />
		</Sidebar>
	);
}
