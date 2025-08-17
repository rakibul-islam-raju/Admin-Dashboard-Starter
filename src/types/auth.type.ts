import type { MessageResponse, SingleResponse } from "./common.type";
import type { User } from "./user.type";

// Requests

export type LoginRequest = {
	email: string;
	password: string;
};

export type ResetPasswordRequest = {
	password: string;
	token: string;
	email: string;
};

export type ForgetPasswordRequest = {
	email: string;
};

// Responses

export type LoginResponse = SingleResponse<{
	user: User;
	accessToken: string;
	refreshToken: string;
}>;

export type ResetPasswordResponse = MessageResponse;

export type ForgetPasswordResponse = MessageResponse;
