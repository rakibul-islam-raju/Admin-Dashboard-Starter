import { axiosInstance } from "@/lib/axiosInstance";
import type { User } from "@/types/user.type";

export const userService = {
	/**
	 * Get the user info from the API
	 * @returns User info
	 */
	getMeInfo: async (): Promise<User> => {
		const response = await axiosInstance.get("/users/me/");
		return response.data;
	},
};
