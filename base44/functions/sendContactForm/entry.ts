import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, clinic, email, phone, consultations } = await req.json();

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aisthetic Formularz <onboarding@resend.dev>",
        to: ["kontakt@aisthetic.pl"],
        subject: `Nowe zgłoszenie demo: ${clinic || name}`,
        text: `Nowe zgłoszenie z formularza kontaktowego:\n\nImię i nazwisko: ${name}\nNazwa gabinetu: ${clinic || "—"}\nE-mail: ${email}\nTelefon: ${phone}\nLiczba konsultacji miesięcznie: ${consultations || "—"}`,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return Response.json({ error: err.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});