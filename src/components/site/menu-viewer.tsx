import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuPages } from "@/config/menu-pages";

export function MenuViewer() {
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(false);
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Vorherige Seite" title="Vorherige Seite" disabled={page === 0} onClick={() => setPage(page - 1)}><ChevronLeft /></Button>
          <label className="sr-only" htmlFor="menu-page">Seite wählen</label>
          <select id="menu-page" aria-label="Seite wählen" value={page} onChange={(e) => setPage(Number(e.target.value))} className="h-9 rounded-full border border-border bg-background px-3 text-sm">
            {menuPages.map((_, i) => <option key={i} value={i}>Seite {i + 1} / {menuPages.length}</option>)}
          </select>
          <Button variant="outline" size="icon" aria-label="Nächste Seite" title="Nächste Seite" disabled={page === menuPages.length - 1} onClick={() => setPage(page + 1)}><ChevronRight /></Button>
          <Button variant="ghost" size="icon" aria-label={zoom ? "Verkleinern" : "Vergrößern"} title={zoom ? "Verkleinern" : "Vergrößern"} onClick={() => setZoom(!zoom)}>{zoom ? <ZoomOut /> : <ZoomIn />}</Button>
        </div>
      </div>
      <div className="mt-6 overflow-auto border border-border bg-card">
        <img src={menuPages[page]} alt={`ANESIS Speisekarte – Seite ${page + 1}`} width={1061} height={1500} className={zoom ? "mx-auto block w-[1061px] max-w-none" : "mx-auto block h-auto w-full max-w-3xl"} />
      </div>
    </div>
  );
}