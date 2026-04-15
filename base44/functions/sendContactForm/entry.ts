import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, clinic, email, phone, consultations } = await req.json();

    await base44.integrations.Core.SendEmail({
      to: "kontakt@aisthetic.pl",
      from_name: "Aisthetic – Formularz Demo",
      subject: `Nowe zgłoszenie demo: ${clinic || name}`,
      body: `
Nowe zgłoszenie z formularza kontaktowego:

Imię i nazwisko: ${name}
Nazwa gabinetu: ${clinic || "—"}
E-mail: ${email}
Telefon: ${phone}
Liczba konsultacji miesięcznie: ${consultations || "—"}
      `.trim(),
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});