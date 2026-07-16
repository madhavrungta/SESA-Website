export type EventStatus = "upcoming" | "open" | "completed";

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  status: EventStatus;
  featured?: boolean;
  seats?: number;
  accent: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: string;
  initials: string;
  bio: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  status: "Active" | "Completed" | "Concept";
}

export interface ResourceItem {
  id: string;
  title: string;
  type: string;
  description: string;
  meta: string;
}
