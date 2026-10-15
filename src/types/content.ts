export type ServiceIcon = "layers" | "server" | "pen" | "compass";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  icon: ServiceIcon;
};

export type Project = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  tone: string;
  stats: Stat[];
};

export type StudioNote = {
  title: string;
  text: string;
};

export type EngagementFact = {
  label: string;
  value: string;
};

export type Stat = {
  value: string;
  label: string;
};
