// hooks/useZodForm.ts
import { zodResolver } from "@hookform/resolvers/zod";
import {
	useForm,
	type FieldValues,
	type UseFormProps,
	type UseFormReturn,
} from "react-hook-form";
import type { ZodSchema } from "zod";

export function useZodForm<T extends FieldValues>(
	schema: ZodSchema<T>,
	options?: Omit<UseFormProps<T>, "resolver">
): UseFormReturn<T> {
	return useForm<T>({
		// @ts-expect-error - zodResolver type compatibility issue with Zod v4
		resolver: zodResolver(schema),
		mode: "onChange",
		...options,
	}) as unknown as UseFormReturn<T>;
}
