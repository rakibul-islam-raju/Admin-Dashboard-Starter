import AppProvider from "@/components/providers/AppProvider";
import AuthInitializer from "./AuthInitializer";

export default function App() {
	return (
		<AuthInitializer>
			<AppProvider />
		</AuthInitializer>
	);
}
