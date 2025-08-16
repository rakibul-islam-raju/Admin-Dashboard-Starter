import { Link } from "react-router-dom";
import { ResetPassForm } from "./components/ResetPassForm";

export default function ResetPassword() {
	return (
		<div className="space-y-6">
			<div className="text-center">
				<h2 className="text-2xl font-semibold ">Reset Password</h2>
				<p className="text-sm text-muted-foreground">Enter your new password</p>
			</div>

			<ResetPassForm />

			<div className="text-center">
				<Link to="/login">Back to Login</Link>
			</div>
		</div>
	);
}
