import { BaseForm } from "@/components/forms/BaseForm";
import { PasswordField } from "@/components/forms/PasswordField";
import { Button } from "@/components/ui/button";
import { useZodForm } from "@/hooks/useZodForm";
import { resetPassSchema, type ResetPassSchema } from "./resetPassSchema";

export const ResetPassForm = () => {
	const form = useZodForm<ResetPassSchema>(resetPassSchema, {
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: ResetPassSchema) => {
		console.log("Login data:", data);
		// TODO: Implement login logic
	};

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
			<Button className="mt-4 w-full" type="submit">
				Reset Password
			</Button>
		</BaseForm>
	);
};
