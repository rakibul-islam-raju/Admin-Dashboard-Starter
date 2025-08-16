import RootLayout from "@/components/layouts/RootLayout";
import Dashboard from "@/pages/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
		],
	},
]);
