export interface Profile {
  name: string;
  role: string;
  headline: string;
  description: string;
  location: string;
  availability: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

export interface Cta {
  label: string;
  url: string;
  type: CtaType;
}

export type CtaType =
  | 'primary'
  | 'secondary';