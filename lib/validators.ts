import { z } from "zod";

const phoneRegex = /^[+()0-9\s-]{7,20}$/;

export const contactFormSchema = z.object({
  fullName: z.string().min(3, "Podaj imię i nazwisko."),
  company: z.string().min(2, "Podaj nazwę firmy."),
  email: z.string().email("Podaj poprawny e-mail służbowy."),
  phone: z
    .string()
    .regex(phoneRegex, "Podaj poprawny numer telefonu (min. 7 znaków)."),
  message: z.string().min(12, "Wiadomość powinna mieć co najmniej 12 znaków."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
