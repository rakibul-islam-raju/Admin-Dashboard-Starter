import type { AuthTokens } from "@/types/common.type";
import type { User } from "@/types/user.type";
import { jwtDecode } from "jwt-decode";

const localStorageKeys = {
	authKey: "auth_tokens",
	userTypeKey: "user_type",
	authState: "auth_state",
	firstTimeUser: "first_time_user",
};

const setItem = (key: string, data: unknown) => {
	const strValue = JSON.stringify(data);
	localStorage.setItem(key, strValue);
};

const getItem = (key: string) => {
	const value = localStorage.getItem(key) ? localStorage.getItem(key) : null;

	if (value) {
		const data = JSON.parse(value);
		return data;
	}
	return null;
};

const removeItem = (key: string) => {
	localStorage.removeItem(key);
};

const setAuthTokens = (tokens: AuthTokens) => {
	if (tokens) {
		const strTokens = JSON.stringify(tokens);
		localStorage.setItem(localStorageKeys.authKey, strTokens);
	}
};

const getAuthTokens = () => {
	const tokens = localStorage.getItem(localStorageKeys.authKey);
	if (tokens) {
		const parsedTokens = JSON.parse(tokens);
		return parsedTokens as AuthTokens;
	}
	return null;
};

const getUser = () => {
	const serializedValue = getAuthTokens();

	if (serializedValue) {
		const userData = jwtDecode(serializedValue?.access);
		return userData;
	}
	return null;
};

const removeAuthTokens = () => {
	localStorage.removeItem(localStorageKeys.authKey);
};

const setUserType = (info: User) => {
	const userType = info?.type ?? null;

	const strValue = JSON.stringify(userType);
	localStorage.setItem(localStorageKeys.userTypeKey, strValue);
};

const getUserType = () => {
	const value = localStorage.getItem(localStorageKeys.userTypeKey);
	if (value) {
		const userType = JSON.parse(value);
		return userType;
	}
	return null;
};

export const localStorageService = {
	setAuthTokens,
	getAuthTokens,
	getUser,
	removeAuthTokens,
	setUserType,
	getUserType,
	setItem,
	getItem,
	removeItem,
};
