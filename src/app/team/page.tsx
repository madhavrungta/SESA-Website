import type { Metadata } from "next";
import { PageHero } from "@/components/pages/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { team } from "@/data/site";

export const metadata: Metadata = { title: "Team" };
export default function TeamPage() {
  const groups = Array.from(new Set(team.map((member) => member.group)));
  return <SiteShell><PageHero eyebrow="Our team" title="Responsibility is distributed. Direction is shared." description="SESA is led by students across technical, creative, event and community functions, with faculty guidance and clear handover between batches." /><section className="section-pad bg-ivory"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">{groups.map((group, groupIndex) => <div key={group} className={groupIndex ? "mt-16" : ""}><div className="flex items-center gap-4"><Badge className="text-gold-dark">{group}</Badge><div className="h-px flex-1 bg-navy-950/10" /></div><div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{team.filter((member) => member.group === group).map((member) => <article key={member.id} className="rounded-[1.75rem] border border-navy-950/8 bg-white p-5 shadow-[0_18px_60px_rgba(17,38,71,0.08)]"><div className="grid aspect-[4/3] place-items-center rounded-[1.3rem] bg-[linear-gradient(145deg,#112647,#285780)] font-display text-5xl text-gold-light">{member.initials}</div><h2 className="mt-5 font-display text-3xl text-navy-950">{member.name}</h2><p className="mt-1 text-sm font-semibold text-gold-dark">{member.role}</p><p className="mt-4 text-sm leading-6 text-slate-600">{member.bio}</p></article>)}</div></div>)}</div></section></SiteShell>;
}
