export type Hero = {
  title: string;
  subtitle?: string;
};

export type Feature = {
  title: string;
  description?: string;
};

export interface LandingData {
  hero: Hero;
  companies?: string[];
  features?: Feature[];
}
