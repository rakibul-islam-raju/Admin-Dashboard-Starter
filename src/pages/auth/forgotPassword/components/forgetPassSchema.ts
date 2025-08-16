import { z } from "zod";

export const forgetPassSchema = z.object({
	email: z.string().email("Invalid email address"),
});

export type ForgetPassSchema = z.infer<typeof forgetPassSchema>;
