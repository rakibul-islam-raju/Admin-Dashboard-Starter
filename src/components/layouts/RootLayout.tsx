import { dashboardConfig } from "@/config/dashboard.config";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";
import {
	Bell,
	LogOut,
	Moon,
	Settings,
	Shield,
	User,
	UserCircle,
} from "lucide-react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "../app-sidebar";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function RootLayout() {
	const logout = useAuthStore((state) => state.logout);

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header
					className={cn(
						"bg-sidebar sticky top-0 z-50 flex shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear",
						dashboardConfig.headerHeight
					)}
				>
					<div className="flex items-center gap-2">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
						{siteConfig.name}
					</div>

					<div className="flex items-center justify-end gap-2">
						<Button variant="outline" size="icon">
							<Bell />
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" size="icon" className="relative">
									<User className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<DropdownMenuLabel className="font-normal">
									<div className="flex flex-col space-y-1">
										<p className="text-sm font-medium leading-none">John Doe</p>
										<p className="text-xs leading-none text-muted-foreground">
											john.doe@example.com
										</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="cursor-pointer">
									<UserCircle className="mr-2 h-4 w-4" />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									<Settings className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									<Shield className="mr-2 h-4 w-4" />
									<span>Security</span>
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									<Moon className="mr-2 h-4 w-4" />
									<span>Dark Mode</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
									onClick={logout}
								>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-2">
					<Outlet />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
