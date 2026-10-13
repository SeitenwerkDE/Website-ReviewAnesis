import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"name" | "email" | "phone" | "type" | "date" | "guests" | "message" | "privacy", string>>;

const field = "mt-2 w-full border border-input bg-background px-4 py-3 outline-none focus:border-primary";

export function CateringForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as { name?: string; email?: string; phone?: string; type?: string; date?: string; guests?: string; message?: string; privacy?: string; website?: string };
    if (d.website) return; // Honeypot
    const err: Errors = {};
    if (!d.name?.trim() || d.name.trim().length < 3) err.name = "Bitte geben Sie Ihren Vor- und Nachnamen an.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email ?? "")) err.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    if (d.phone && !/^[+\d\s()/-]{6,}$/.test(d.phone)) err.phone = "Bitte prüfen Sie die Telefonnummer.";
    if (!d.type) err.type = "Bitte wählen Sie die Art der Veranstaltung.";
    if (!d.date) err.date = "Bitte geben Sie ein Datum an.";
    if (!d.guests || Number(d.guests) < 1) err.guests = "Bitte geben Sie die Gästezahl an.";
    if (!d.message?.trim()) err.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
    if (!d.privacy) err.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";
    setErrors(err);
    if (Object.keys(err).length) return;
    // TODO (nächster Schritt): Versand über Lovable Cloud + E-Mail-Dienst.
    // Erfolgsmeldung erst nach tatsächlichem Versand anzeigen.
    setState("error");
  }

  const Err = ({ k }: { k: keyof Errors }) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-primary">{errors[k]}</p> : null;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <div className="hidden" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="text-sm sm:col-span-2">Vor- und Nachname *<input name="name" autoComplete="name" className={field} {...aria("name")} /><Err k="name" /></label>
      <label className="text-sm">E-Mail *<input name="email" type="email" autoComplete="email" className={field} {...aria("email")} /><Err k="email" /></label>
      <label className="text-sm">Telefon (optional)<input name="phone" type="tel" autoComplete="tel" className={field} {...aria("phone")} /><Err k="phone" /></label>
      <label className="text-sm">Art der Veranstaltung *
        <select name="type" defaultValue="" className={field} {...aria("type")}>
          <option value="" disabled>Bitte wählen</option>
          <option>Catering</option><option>Private Feier</option><option>Hochzeit</option><option>Sonstiges</option>
        </select><Err k="type" /></label>
      <label className="text-sm">Datum *<input name="date" type="date" className={field} {...aria("date")} /><Err k="date" /></label>
      <label className="text-sm">Gästezahl *<input name="guests" type="number" min={1} inputMode="numeric" className={field} {...aria("guests")} /><Err k="guests" /></label>
      <label className="text-sm sm:col-span-2">Nachricht *<textarea name="message" rows={5} className={field} {...aria("message")} /><Err k="message" /></label>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="privacy" className="mt-1 h-4 w-4 accent-primary" {...aria("privacy")} />
          <span>Ich habe die <Link to="/datenschutz" className="link-accent">Datenschutzerklärung</Link> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *</span>
        </label>
        <Err k="privacy" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary" disabled={state === "sending"}>Anfrage senden</button>
        {state === "error" && (
          <p role="alert" className="mt-4 text-sm">
            Der Online-Versand ist derzeit nicht verfügbar. Bitte senden Sie Ihre Anfrage per E-Mail an{" "}
            <a href="mailto:restaurantanesis26@gmail.com" className="link-accent">restaurantanesis26@gmail.com</a> oder rufen Sie uns an.
          </p>
        )}
      </div>
    </form>
  );
}
