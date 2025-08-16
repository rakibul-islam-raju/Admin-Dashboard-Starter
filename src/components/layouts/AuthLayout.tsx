import { Outlet } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

export default function AuthLayout() {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<Card className="w-full max-w-md">
				<CardContent>
					<Outlet />
				</CardContent>
			</Card>
		</div>
	);
}
