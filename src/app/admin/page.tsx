import type { Metadata } from "next";
import { Bell, CalendarDays, ChevronRight, FileText, GalleryHorizontal, LayoutDashboard, LogOut, Menu, Plus, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/data/site";

export const metadata: Metadata = { title: "Admin Dashboard" };

const navigation = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Events", icon: CalendarDays },
  { label: "Team", icon: Users },
  { label: "Gallery", icon: GalleryHorizontal },
  { label: "Resources", icon: FileText },
  { label: "Settings", icon: Settings },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#f3eee5] text-navy-950">
      <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col border-r border-navy-950/8 bg-navy-950 p-5 text-ivory lg:flex">
        <Link href="/" className="flex items-center gap-3 rounded-2xl px-2 py-2">
          <Image src="/sesa-logo.svg" alt="SESA crest" width={52} height={52} className="size-12 object-contain" />
          <div><p className="font-display text-2xl tracking-[0.08em]">SESA</p><p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-slate-300">Admin workspace</p></div>
        </Link>
        <nav className="mt-10 grid gap-1">
          {navigation.map((item) => { const NavIcon = item.icon; return <button key={item.label} type="button" className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${item.active ? "bg-white/10 text-gold-light" : "text-slate-300 hover:bg-white/6 hover:text-ivory"}`}><NavIcon className="size-4" /> {item.label}</button>; })}
        </nav>
        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light">Frontend preview</p><p className="mt-2 text-xs leading-5 text-slate-300">Authentication and database actions will be connected during the Supabase phase.</p><button type="button" className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-ivory"><LogOut className="size-4" /> Sign out</button></div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-navy-950/8 bg-[#f3eee5]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="flex items-center gap-3"><button type="button" className="grid size-10 place-items-center rounded-full border border-navy-950/10 bg-white lg:hidden" aria-label="Open admin navigation"><Menu className="size-5" /></button><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-dark">Dashboard</p><h1 className="font-display text-2xl sm:text-3xl">Welcome back, SESA team.</h1></div></div>
          <div className="flex items-center gap-3"><button type="button" className="relative grid size-10 place-items-center rounded-full border border-navy-950/10 bg-white" aria-label="Notifications"><Bell className="size-4" /><span className="absolute right-2 top-2 size-2 rounded-full bg-gold" /></button><div className="hidden size-10 place-items-center rounded-full bg-navy-950 text-xs font-bold text-gold-light sm:grid">AD</div></div>
        </header>

        <main className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><Badge className="text-gold-dark">Overview</Badge><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">A clean administration shell for events, team profiles, gallery media, announcements, projects and resources.</p></div><Button><Plus className="size-4" /> Create event</Button></div>

          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[[CalendarDays, "Upcoming events", "4", "+1 this month"], [Users, "Team profiles", "18", "6 teams"], [GalleryHorizontal, "Gallery items", "126", "+24 recently"], [FileText, "Published resources", "14", "3 drafts"]].map(([Icon, label, value, meta]) => { const MetricIcon = Icon as typeof CalendarDays; return <article key={label as string} className="rounded-[1.5rem] border border-navy-950/8 bg-white p-5 shadow-[0_15px_50px_rgba(17,38,71,0.07)]"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-gold/12 text-gold-dark"><MetricIcon className="size-5" /></span><ChevronRight className="size-4 text-slate-400" /></div><p className="mt-6 text-sm font-semibold text-slate-600">{label as string}</p><p className="mt-1 font-display text-4xl text-navy-950">{value as string}</p><p className="mt-2 text-xs font-semibold text-gold-dark">{meta as string}</p></article>; })}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-[1.75rem] border border-navy-950/8 bg-white p-5 shadow-[0_18px_60px_rgba(17,38,71,0.07)] sm:p-7">
              <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-dark">Event management</p><h2 className="mt-2 font-display text-3xl">Upcoming schedule</h2></div><button type="button" className="text-sm font-bold text-navy-950">View all</button></div>
              <div className="mt-6 divide-y divide-navy-950/8">{events.filter((event) => event.status !== "completed").slice(0, 4).map((event) => <div key={event.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold text-navy-950">{event.title}</p><p className="mt-1 text-xs text-slate-500">{event.date} • {event.venue}</p></div><div className="flex items-center gap-3"><span className="rounded-full bg-navy-950/5 px-3 py-1 text-xs font-semibold text-slate-600">{event.category}</span><button type="button" className="text-xs font-bold text-gold-dark">Edit</button></div></div>)}</div>
            </div>
            <div className="rounded-[1.75rem] bg-navy-950 p-6 text-ivory shadow-[0_22px_70px_rgba(17,38,71,0.16)] sm:p-7"><p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light">Content health</p><h2 className="mt-3 font-display text-3xl">Ready for handover.</h2><p className="mt-3 text-sm leading-7 text-slate-300">The dashboard structure keeps common content updates separate from code changes.</p><div className="mt-7 grid gap-3">{["Events data structured", "Team roles organized", "Gallery storage planned", "Resource types defined"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm"><span className="size-2 rounded-full bg-gold" />{item}</div>)}</div></div>
          </section>
        </main>
      </div>
    </div>
  );
}
