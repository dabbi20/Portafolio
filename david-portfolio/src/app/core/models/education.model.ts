export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  status?: string;
  type: 'education' | 'certification';
}