"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { submitContactFormClient } from "@/lib/submit-contact-form";
import { contactFormSchema, type ContactFormInput } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [serverMessage, setServerMessage] = useState<{
    ok: boolean;
    text: string;
  } | null>(null);

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormInput) => {
    setServerMessage(null);

    startTransition(async () => {
      const result = await submitContactFormClient(values);
      setServerMessage({ ok: result.ok, text: result.message });
      if (result.ok) {
        form.reset();
      }
    });
  };

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-fullName">Imię i nazwisko</Label>
          <Input
            id="contact-fullName"
            placeholder="Imię i nazwisko"
            {...form.register("fullName")}
          />
          {form.formState.errors.fullName && (
            <p className="text-xs text-red-400">
              {form.formState.errors.fullName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-company">Nazwa firmy</Label>
          <Input
            id="contact-company"
            placeholder="Nazwa firmy"
            {...form.register("company")}
          />
          {form.formState.errors.company && (
            <p className="text-xs text-red-400">
              {form.formState.errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-email">E-mail służbowy</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="E-mail służbowy"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-xs text-red-400">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Telefon</Label>
          <Input
            id="contact-phone"
            placeholder="Telefon"
            {...form.register("phone")}
          />
          {form.formState.errors.phone && (
            <p className="text-xs text-red-400">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Wiadomość</Label>
        <Textarea
          id="contact-message"
          placeholder="Opisz, jakich leadów i w jakiej skali potrzebujesz."
          {...form.register("message")}
        />
        {form.formState.errors.message && (
          <p className="text-xs text-red-400">
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      {serverMessage && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${serverMessage.ok ? "text-emerald-400" : "text-red-400"}`}
        >
          {serverMessage.text}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? "Wysyłanie..." : "Wyślij formularz"}
      </Button>
    </form>
  );
}
