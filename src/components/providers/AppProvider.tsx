import { router } from "@/app/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

export default function AppProvider() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster
				richColors
				closeButton
				position="top-center"
				duration={5000} // 5 seconds
			/>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
