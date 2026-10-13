# ANESIS SOLTAU – Website: Hochladen bei GitHub

Dieses Archiv enthält den **kompletten Quellcode** der Website. Alle Bilder
(Titelbanner, Gastraum-Fotos, die 16 Speisekarten-Seiten) liegen als echte
Dateien im Ordner `src/assets` – es werden keine externen Dienste benötigt.

## 1. Reihenfolge beim Hochladen

Lade die Ordner und Dateien in genau dieser Reihenfolge in dein GitHub-Repository
(immer in den Root des Repos, also oberste Ebene):

1. `.gitignore`
2. `.prettierrc`
3. `.prettierignore`
4. `bunfig.toml`
5. `package.json`
6. `bun.lock`
7. `tsconfig.json`
8. `vite.config.ts`
9. `vitest.config.ts`
10. `eslint.config.js`
11. `components.json`
12. `README.md`
13. `HOCHLADEN.md` (diese Datei)
14. `public/` (ganzer Ordner)
15. `src/` (ganzer Ordner)

Wichtig: `node_modules/`, `dist/` und `.git/` gehören **nicht** ins Repository –
sie sind hier bereits nicht enthalten und werden bei der Installation automatisch
angelegt.

## 2. Struktur (so muss es aussehen)

```text
/
├── .gitignore
├── .prettierrc
├── .prettierignore
├── bunfig.toml
├── package.json
├── bun.lock
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── eslint.config.js
├── components.json
├── README.md
├── HOCHLADEN.md
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── downloads/
│       └── anesis-speisekarte.pdf
└── src/
    ├── router.tsx
    ├── routeTree.gen.ts
    ├── server.ts
    ├── start.ts
    ├── styles.css
    ├── assets/
    │   ├── anesis-hero.jpg
    │   ├── anesis-lounge.png
    │   ├── interior-bar.png
    │   ├── interior-saal.png
    │   └── menu/
    │       └── menu-01.jpg … menu-16.jpg
    ├── components/
    │   ├── site/
    │   │   ├── layout.tsx
    │   │   ├── sections.tsx
    │   │   ├── new-sections.tsx
    │   │   ├── menu-viewer.tsx
    │   │   └── catering-form.tsx
    │   └── ui/            (Grundkomponenten, unverändert lassen)
    ├── config/
    │   ├── restaurant.ts  (alle Inhalte: Adresse, Telefon, Öffnungszeiten …)
    │   └── menu-pages.ts
    ├── hooks/
    ├── lib/
    ├── routes/
    │   ├── __root.tsx     (Grundgerüst, 404-Seite)
    │   ├── index.tsx      (Startseite)
    │   ├── speisekarte.tsx
    │   ├── impressum.tsx
    │   └── datenschutz.tsx
    └── test/
```

## 3. Website locally starten

```bash
bun install
bun run dev
```

Die Website läuft dann unter `http://localhost:8080`.

Alternativ mit npm: `npm install` und `npm run dev`.

## 4. Vorschau (GitHub Pages / Preview)

Der Build läuft über Nitro/Cloudflare. Für eine reine Vorschau genügt:

```bash
bun run build
bun run preview
```

## 5. Vor der Veröffentlichung noch ausfüllen

Alle Inhalte liegen zentral in `src/config/restaurant.ts`:

- `siteUrl` – endgültige Domain eintragen
- `reservationUrl`, `googleReviewsUrl`, `instagramUrl` – links, falls vorhanden
- `legal` – rechtliche Angaben für das Impressum (Inhaber, Rechtsform,
  Vertretung, Registergericht, Registernummer, USt-IdNr.)

Die Platzhalter in `src/routes/impressum.tsx` müssen vor dem Live-Gang durch
echte Angaben ersetzt werden.
