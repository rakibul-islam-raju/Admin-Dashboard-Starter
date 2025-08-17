import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes() {
	const accessToken = useAuthStore((state) => state.accessToken);

	// If the access token is available, redirect to the private routes
	if (accessToken) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
}
