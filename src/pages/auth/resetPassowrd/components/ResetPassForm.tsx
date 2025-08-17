import { useResetPasswordMutation } from "@/api/queries/auth";
import { SubmitButton } from "@/components/Buttons";
import { BaseForm } from "@/components/forms/BaseForm";
import { PasswordField } from "@/components/forms/PasswordField";
import { useZodForm } from "@/hooks/useZodForm";
import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { resetPassSchema, type ResetPassSchema } from "./resetPassSchema";

export const ResetPassForm = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const token = searchParams.get("token");
	const email = searchParams.get("email");

	const form = useZodForm<ResetPassSchema>(resetPassSchema, {
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const {
		mutate: resetPassword,
		isPending,
		isSuccess,
	} = useResetPasswordMutation();

	const onSubmit = (data: ResetPassSchema) => {
		resetPassword({
			password: data.password,
			token: token!,
			email: email!,
		});
	};

	useEffect(() => {
		if (!token || !email) {
			navigate("/login", { replace: true });
		}
	}, [token, email, navigate]);

	useEffect(() => {
		if (isSuccess) {
			form.reset();
			navigate("/login", { replace: true });
		}
	}, [isSuccess, form, navigate]);

	if (!token || !email) {
		return <Navigate to="/login" replace />;
	}

	return (
		<BaseForm form={form} onSubmit={onSubmit}>
			<div className="space-y-6">
				<PasswordField<ResetPassSchema>
					name="password"
					label="Password"
					required
				/>
				<PasswordField<ResetPassSchema>
					name="confirmPassword"
					label="Confirm Password"
					required
				/>
			</div>
			<SubmitButton
				className="mt-4 w-full"
				type="submit"
				disabled={isPending}
				loading={isPending}
			>
				Reset Password
			</SubmitButton>
		</BaseForm>
	);
};
