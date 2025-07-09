import { z } from "zod/v4";

const phoneNumberRegex = /^\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$/;

// basic validation schema with default error messages
export const defaultConfirmationSchema = z.object({
  name: z.string().trim().min(1),
  email: z.email(),
  phone: z.string().trim().regex(phoneNumberRegex),
});

export type DefaultConfirmationSchemaT = z.infer<
  typeof defaultConfirmationSchema
>;
