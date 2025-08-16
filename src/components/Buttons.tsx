import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type SubmitButtonProps = React.ComponentProps<"button"> & {
	loading?: boolean;
};

export const SubmitButton = ({
	children,
	loading,
	...props
}: SubmitButtonProps) => {
	return (
		<Button {...props} disabled={loading}>
			{children}
			{loading && <Loader2 className="size-4 animate-spin" />}
		</Button>
	);
};

export const CancelButton = () => {
	return <Button type="button">Cancel</Button>;
};

export const DeleteButton = () => {
	return <Button type="button">Delete</Button>;
};
