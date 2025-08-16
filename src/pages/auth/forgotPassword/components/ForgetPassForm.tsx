import { useForgotPasswordMutation } from "@/api/queries/auth";
import { SubmitButton } from "@/components/Buttons";
import { BaseForm } from "@/components/forms/BaseForm";
import { TextField } from "@/components/forms/TextField";
import { useZodForm } from "@/hooks/useZodForm";
import { forgetPassSchema, type ForgetPassSchema } from "./forgetPassSchema";

export const ForgetPassForm = () => {
	const form = useZodForm<ForgetPassSchema>(forgetPassSchema, {
		defaultValues: {
			email: "",
		},
	});

	const { mutate: forgotPassword, isPending } = useForgotPasswordMutation();

	const onSubmit = (data: ForgetPassSchema) => {
		forgotPassword(data);
	};

	return (
		<BaseForm form={form} onSubmit={onSubmit}>
			<div className="space-y-6">
				<TextField<ForgetPassSchema>
					name="email"
					label="Email Address"
					required
				/>
			</div>
			<SubmitButton
				className="mt-4 w-full"
				type="submit"
				disabled={isPending}
				loading={isPending}
			>
				Send Reset Link
			</SubmitButton>
		</BaseForm>
	);
};
