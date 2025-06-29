import { z } from "zod/v4";

const phoneNumberRegex = /^\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$/;

// validation schema with custom error messages
export const customErrorsSchema = z.object({
  name: z.string({ error: "Name is required" }),
  email: z.email({ error: "Email is required" }),
  phone: z
    .string({ error: "Phone is required" })
    .regex(phoneNumberRegex, { error: "Enter a 10-digit phone number" }),
});

export type CustomErrorsSchemaT = z.infer<typeof customErrorsSchema>;
