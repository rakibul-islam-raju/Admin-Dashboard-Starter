import { authService } from "@/services/authService";
import { useAuthStore } from "@/store/authStore";
import type {
	ForgetPasswordRequest,
	LoginRequest,
	ResetPasswordRequest,
} from "@/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginMutation = () => {
	const setAuthTokens = useAuthStore((state) => state.setAuthTokens);

	return useMutation({
		mutationFn: (data: LoginRequest) => authService.login(data),
		onSuccess: (data) => {
			const tokens = {
				access: data.data.accessToken,
				refresh: data.data.refreshToken,
			};
			setAuthTokens(tokens);
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
