import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, company } = await request.json();

  const esc = (s: unknown) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
    );

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Alle velden zijn verplicht." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Ongeldig e-mailadres." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "alex.ayibyan@gmail.com",
    replyTo: email,
    subject: `Nieuw bericht van ${String(name).slice(0, 80)}${company ? ` (${String(company).slice(0, 80)})` : ""}`,
    html: `
      <h2>Nieuw contactformulier bericht</h2>
      <p><strong>Naam:</strong> ${esc(name)}</p>
      ${company ? `<p><strong>Zaak:</strong> ${esc(company)}</p>` : ""}
      <p><strong>E-mail:</strong> ${esc(email)}</p>
      <p><strong>Bericht:</strong></p>
      <p>${esc(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
