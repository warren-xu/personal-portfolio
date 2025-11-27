export type Project = {
  title: string;
  subtitle?: string;
  slug: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    live?: string;
  };
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    subtitle: "Next.js · TypeScript",
    slug: "personal-portfolio",
    description:
      "A fast, animated personal site with a focus on clean elements and effective messaging.",
    tech: ["Next.js", "TypeScript"],
    links: {
      live: "https://your-portfolio-url.com",
      github: "https://github.com/yourname/portfolio",
    },
    highlight: true,
  },
];
