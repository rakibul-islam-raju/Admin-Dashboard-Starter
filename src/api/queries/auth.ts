import { authService } from "@/services/authService";
import { localStorageService } from "@/services/localStorageService";
import type {
	ForgetPasswordRequest,
	LoginRequest,
	ResetPasswordRequest,
} from "@/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: (data: LoginRequest) => authService.login(data),
		onSuccess: (data) => {
			const tokens = {
				access: data.data.accessToken,
				refresh: data.data.refreshToken,
			};
			localStorageService.setAuthTokens(tokens);

			// TODO: set user info to global state
		},
	});
};

export const useResetPasswordMutation = () => {
	return useMutation({
		mutationFn: (data: ResetPasswordRequest) => authService.resetPassword(data),
		onSuccess: (data) => {
			toast.success(data.message);
		},
	});
};

export const useForgotPasswordMutation = () => {
	return useMutation({
		mutationFn: (data: ForgetPasswordRequest) =>
			authService.forgotPassword(data),
		onSuccess: (data) => {
			toast.success(data.message);
		},
	});
};
