import { z } from "zod/v4";

const phoneNumberRegex = /^\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$/;

// basic validation schema with default error messages
export const defaultErrorsSchema = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.string().regex(phoneNumberRegex),
});

export type DefaultErrorsSchemaT = z.infer<typeof defaultErrorsSchema>;
