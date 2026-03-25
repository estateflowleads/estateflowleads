import { contactFormSchema } from "@/lib/validators";

type ActionState = {
  ok: boolean;
  message: string;
};

/** Działa w przeglądarce — potrzebne przy `output: 'export'` (GitHub Pages). */
export async function submitContactFormClient(data: unknown): Promise<ActionState> {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Sprawdź dane w formularzu i spróbuj ponownie.",
    };
  }

  const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("[FORM:contact]", parsed.data);
    return {
      ok: true,
      message:
        "Dziękujemy. Otrzymaliśmy wiadomość i wrócimy z odpowiedzią najszybciej jak to możliwe.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Lead-Type": "contact",
      },
      body: JSON.stringify({
        type: "contact",
        source: "www",
        submittedAt: new Date().toISOString(),
        payload: parsed.data,
      }),
    });

    if (!response.ok) {
      throw new Error("Webhook error");
    }

    return {
      ok: true,
      message:
        "Dziękujemy. Otrzymaliśmy wiadomość i wrócimy z odpowiedzią najszybciej jak to możliwe.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Nie udało się wysłać formularza. Spróbuj ponownie lub skontaktuj się mailowo.",
    };
  }
}
