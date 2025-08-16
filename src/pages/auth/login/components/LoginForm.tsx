import { BaseForm } from "@/components/forms/BaseForm";
import { PasswordField } from "@/components/forms/PasswordField";
import { TextField } from "@/components/forms/TextField";
import { Button } from "@/components/ui/button";
import { useZodForm } from "@/hooks/useZodForm";
import { loginSchema, type LoginSchema } from "./loginSchema";

export const LoginForm = () => {
	const form = useZodForm<LoginSchema>(loginSchema, {
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: LoginSchema) => {
		console.log("Login data:", data);
		// TODO: Implement login logic
	};

	return (
		<BaseForm form={form} onSubmit={onSubmit}>
			<div className="space-y-6">
				<TextField<LoginSchema> name="email" label="Email Address" required />
				<PasswordField<LoginSchema>
					name="password"
					label="Password"
					required
					forgetPassword
					forgetPasswordPath="/forgot-password"
				/>
			</div>
			<Button className="mt-4 w-full" type="submit">
				Login
			</Button>
		</BaseForm>
	);
};
