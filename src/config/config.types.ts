import type { LucideIcon } from "lucide-react";

export type DashboardMenuItem = {
	title: string;
	url: string;
	icon?: LucideIcon;
	isActive?: boolean;
	items?: {
		title: string;
		url: string;
	}[];
};

export type DashboardMenu = DashboardMenuItem[];
