import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
	const accessToken = useAuthStore((state) => state.accessToken);

	console.log("accessToken -->", accessToken);

	// If the access token is not available, redirect to the public routes
	if (!accessToken) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
}
