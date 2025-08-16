import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";

export default function Login() {
	return (
		<div className="space-y-6">
			<div className="text-center">
				<h2 className="text-2xl font-semibold ">Welcome back</h2>
				<p className="text-sm text-muted-foreground">
					Enter your email and password to login to your account
				</p>
			</div>

			<LoginForm />

			<div className="text-center">
				<Link to="/forgot-password">Forgot Password?</Link>
			</div>
		</div>
	);
}
