import { useForgotPasswordMutation } from "@/api/queries/auth";
import { SubmitButton } from "@/components/Buttons";
import { BaseForm } from "@/components/forms/BaseForm";
import { TextField } from "@/components/forms/TextField";
import { Alert } from "@/components/ui/alert";
import { useZodForm } from "@/hooks/useZodForm";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { forgetPassSchema, type ForgetPassSchema } from "./forgetPassSchema";

export const ForgetPassForm = () => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const form = useZodForm<ForgetPassSchema>(forgetPassSchema, {
		defaultValues: {
			email: "",
		},
	});

	const {
		mutate: forgotPassword,
		isPending,
		isSuccess,
	} = useForgotPasswordMutation();

	const onSubmit = (data: ForgetPassSchema) => {
		forgotPassword(data);
	};

	useEffect(() => {
		if (isSuccess) {
			setShowSuccessMessage(true);
			form.reset();
		}
	}, [isSuccess, form]);

	return (
		<BaseForm form={form} onSubmit={onSubmit}>
			{showSuccessMessage && (
				<Alert variant="default" className="mb-4 bg-green-100">
					<CheckCircle className="h-4 w-4" />
					<span>
						An email has been sent to your email address. Please check your
						email for the reset link.
					</span>
				</Alert>
			)}

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
