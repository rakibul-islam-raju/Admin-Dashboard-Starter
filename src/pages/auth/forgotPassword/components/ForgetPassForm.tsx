import { BaseForm } from "@/components/forms/BaseForm";
import { TextField } from "@/components/forms/TextField";
import { Button } from "@/components/ui/button";
import { useZodForm } from "@/hooks/useZodForm";
import { forgetPassSchema, type ForgetPassSchema } from "./forgetPassSchema";

export const ForgetPassForm = () => {
	const form = useZodForm<ForgetPassSchema>(forgetPassSchema, {
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (data: ForgetPassSchema) => {
		console.log("Login data:", data);
		// TODO: Implement login logic
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
			<Button className="mt-4 w-full" type="submit">
				Send Reset Link
			</Button>
		</BaseForm>
	);
};
