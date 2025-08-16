import { LayoutDashboard, Users } from "lucide-react";
import type { DashboardMenu } from "./config.types";

export const dashboardConfig = {
	headerHeight: "h-[64px]",
};

export const dashboardMenu: DashboardMenu = [
	{
		title: "Dashboard",
		url: "/",
		icon: LayoutDashboard,
	},
	{
		title: "Vendors",
		url: "/vendors",
		icon: Users,
		items: [
			{
				title: "List",
				url: "/vendors",
			},
			{
				title: "Pending",
				url: "/vendors/pending",
			},
		],
	},
];
