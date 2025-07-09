import { z } from "zod/v4";

const phoneNumberRegex = /^\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$/;

// validation schema with custom error messages
export const customConfirmationSchema = z.object({
  name: z.string().trim().min(1, { error: "Enter your name" }),
  email: z.email({ error: "Enter a valid email address" }),
  phone: z
    .string()
    .trim()
    .regex(phoneNumberRegex, { error: "Enter a 10-digit phone number" }),
});

export type CustomConfirmationSchemaT = z.infer<
  typeof customConfirmationSchema
>;
