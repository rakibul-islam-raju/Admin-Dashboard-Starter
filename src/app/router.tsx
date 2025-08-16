import AuthLayout from "@/components/layouts/AuthLayout";
import PublicRoutes from "@/components/layouts/PublicRoutes";
import RootLayout from "@/components/layouts/RootLayout";
import ForgotPassword from "@/pages/auth/forgotPassword";
import Login from "@/pages/auth/login";
import ResetPassword from "@/pages/auth/resetPassowrd";
import Dashboard from "@/pages/dashboard";
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
	{
		path: "/",
		element: <PublicRoutes />,
		children: [
			{
				element: <AuthLayout />,
				children: [
					{
						path: "login",
						element: <Login />,
					},
					{
						path: "forgot-password",
						element: <ForgotPassword />,
					},
					{
						path: "reset-password",
						element: <ResetPassword />,
					},
				],
			},
		],
	},
]);
