import { AppLoader } from "@/components/AppLoader";
import { userService } from "@/services/userService";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";

type AuthInitializerProps = {
	children: React.ReactNode;
};

export default function AuthInitializer({ children }: AuthInitializerProps) {
	const { accessToken, refreshToken, setUser, logout } = useAuthStore();

	const [isLoading, setIsLoading] = useState(false);

	// Get the user info from the API
	useEffect(() => {
		try {
			// If the access token and refresh token are not available, return
			if (accessToken && refreshToken) {
				// Set the loading state to true
				setIsLoading(true);

				// Get the user info from the API
				userService
					.getMeInfo()
					.then(setUser)
					.finally(() => {
						setIsLoading(false);
					});
			}
		} catch (error) {
			console.log("AuthInitializer error ->", error);
			logout();
		}
	}, [accessToken, refreshToken, setUser, logout]);

	if (isLoading) {
		return <AppLoader />;
	}

	return children;
}
