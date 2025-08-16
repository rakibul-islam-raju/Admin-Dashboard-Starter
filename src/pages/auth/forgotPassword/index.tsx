import { Link } from "react-router-dom";
import { ForgetPassForm } from "./components/ForgetPassForm";

export default function ForgotPassword() {
	return (
		<div className="space-y-6">
			<div className="text-center">
				<h2 className="text-2xl font-semibold ">Forgot Password?</h2>
				<p className="text-sm text-muted-foreground">
					Enter your email to reset your password
				</p>
			</div>

			<ForgetPassForm />

			<div className="text-center">
				<Link to="/login">Back to Login</Link>
			</div>
		</div>
	);
}
