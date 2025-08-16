import { useResetPasswordMutation } from "@/api/queries/auth";
import { SubmitButton } from "@/components/Buttons";
import { BaseForm } from "@/components/forms/BaseForm";
import { PasswordField } from "@/components/forms/PasswordField";
import { useZodForm } from "@/hooks/useZodForm";
import { resetPassSchema, type ResetPassSchema } from "./resetPassSchema";

export const ResetPassForm = () => {
	const form = useZodForm<ResetPassSchema>(resetPassSchema, {
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const { mutate: resetPassword, isPending } = useResetPasswordMutation();

	const onSubmit = (data: ResetPassSchema) => {
		resetPassword(data);
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
