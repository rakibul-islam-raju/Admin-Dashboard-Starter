import { useLoginMutation } from "@/api/queries/auth";
import { SubmitButton } from "@/components/Buttons";
import { BaseForm } from "@/components/forms/BaseForm";
import { PasswordField } from "@/components/forms/PasswordField";
import { TextField } from "@/components/forms/TextField";
import { useZodForm } from "@/hooks/useZodForm";
import { loginSchema, type LoginSchema } from "./loginSchema";

export const LoginForm = () => {
	const form = useZodForm<LoginSchema>(loginSchema, {
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { mutate: login, isPending } = useLoginMutation();

	const onSubmit = (data: LoginSchema) => {
		login(data);
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
			<SubmitButton
				className="mt-4 w-full"
				type="submit"
				disabled={isPending}
				loading={isPending}
			>
				Login
			</SubmitButton>
		</BaseForm>
	);
};
