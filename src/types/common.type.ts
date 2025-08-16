type Pagination = {
	total: number;
	page: number;
	limit: number;
	pages: number;
};

export type AuthTokens = {
	access: string;
	refresh: string;
};

export type ListResponse<T> = {
	success: boolean;
	data: T[];
};

export type PaginatedResponse<T> = {
	success: boolean;
	data: T[];
	pagination: Pagination;
};

export type SingleResponse<T> = {
	success: boolean;
	data: T;
};

export type MessageResponse = {
	success: boolean;
	message: string;
};

export type PaginationParams = {
	page?: number;
	limit?: number;
	sort?: string;
	order?: "asc" | "desc";
};
