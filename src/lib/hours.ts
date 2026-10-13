import { restaurant } from "@/config/restaurant";

const toMin = (t: string) => {
  const [h = 0, m = 0] = t.split(":").map(Number);
  return h * 60 + m;
};

export function berlinNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return { day: days.indexOf(get("weekday")), minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")) };
}

export function openStatus(date = new Date()) {
  const { day, minutes } = berlinNow(date);
  const today = restaurant.hours.find((h) => h.day === day)!;
  const current = today.slots.find(([a, b]) => minutes >= toMin(a) && minutes < toMin(b));
  if (current) return { open: true, text: `Jetzt geöffnet · bis ${current[1]} Uhr`, today: day };
  const laterToday = today.slots.find(([a]) => toMin(a) > minutes);
  if (laterToday) return { open: false, text: `Jetzt geschlossen · öffnet heute um ${laterToday[0]} Uhr`, today: day };
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = restaurant.hours.find((x) => x.day === d)!;
    if (h.slots.length) {
      const when = i === 1 ? "morgen" : `am ${h.label}`;
      return { open: false, text: `Jetzt geschlossen · öffnet ${when} um ${h.slots[0]![0]} Uhr`, today: day };
    }
  }
  return { open: false, text: "Jetzt geschlossen", today: day };
}

export const formatSlots = (slots: [string, string][]) =>
  slots.length ? slots.map(([a, b]) => `${a}–${b}`).join(" · ") + " Uhr" : "Ruhetag";
