import { axiosInstance } from "@/lib/axiosInstance";
import type {
	ForgetPasswordRequest,
	ForgetPasswordResponse,
	LoginRequest,
	LoginResponse,
	ResetPasswordRequest,
	ResetPasswordResponse,
} from "@/types/auth.type";
import { localStorageService } from "./localStorageService";

export const authService = {
	/**
	 * Login user by calling the login API
	 * @param data - Login request data
	 * @returns Login response data
	 */
	login: async (data: LoginRequest): Promise<LoginResponse> => {
		const response = await axiosInstance.post("/auth/login/", data);
		return response.data;
	},

	/**
	 * Reset password by calling the reset password API
	 * @param data - Reset password request data
	 * @returns Reset password response data
	 */
	resetPassword: async (
		data: ResetPasswordRequest
	): Promise<ResetPasswordResponse> => {
		const response = await axiosInstance.post("/auth/reset-password/", data);
		return response.data;
	},

	/**
	 * Forgot password by calling the forgot password API
	 * @param data - Forgot password request data
	 * @returns Forgot password response data
	 */
	forgotPassword: async (
		data: ForgetPasswordRequest
	): Promise<ForgetPasswordResponse> => {
		const response = await axiosInstance.post("/auth/forgot-password/", data);
		return response.data;
	},

	/**
	 * Silent logout - clears local storage without API call
	 * Used when refresh token is already invalid
	 */
	silentLogout: (): void => {
		localStorageService.removeAuthTokens();
		window.location.href = "/login";
	},
};
