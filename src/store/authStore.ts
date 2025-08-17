import { localStorageService } from "@/services/localStorageService";
import type { AuthTokens } from "@/types/common.type";
import type { User } from "@/types/user.type";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

// Get the auth tokens from localStorage
const authTokens = localStorageService.getAuthTokens();
const decodedUser = authTokens?.access
	? (jwtDecode(authTokens?.access) as User)
	: undefined;

// Define the auth store type
type AuthStore = {
	user?: User;
	accessToken?: string;
	refreshToken?: string;
	setUser: (user?: User) => void;
	setAuthTokens: (authTokens?: AuthTokens) => void;
	logout: () => void;
};

// Define the auth store
export const useAuthStore = create<AuthStore>((set) => ({
	user: decodedUser,
	accessToken: authTokens?.access || undefined,
	refreshToken: authTokens?.refresh || undefined,
	setUser: (user) => set({ user }),
	setAuthTokens: (authTokens) => {
		set({
			accessToken: authTokens?.access,
			refreshToken: authTokens?.refresh,
		});

		// if accessToken or refreshToken is null, remove auth tokens from localStorage
		if (!authTokens || !authTokens.access || !authTokens.refresh) {
			localStorageService.removeAuthTokens();
			set({
				accessToken: undefined,
				refreshToken: undefined,
			});
			return;
		}

		const decodedUser = jwtDecode(authTokens.access) as User;
		set({
			user: decodedUser,
		});

		// if accessToken or refreshToken is not null, set auth tokens to localStorage
		localStorageService.setAuthTokens(authTokens);
	},
	logout: () => {
		localStorageService.removeAuthTokens();
		set({
			accessToken: undefined,
			refreshToken: undefined,
		});
	},
}));
