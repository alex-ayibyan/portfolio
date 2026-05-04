export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Frameworks",
    skills: ["React", "Next.js", "Angular"],
  },
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      ".NET",
      "REST APIs",
      "API Integrations",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Data & BI",
    skills: ["Power BI", "Streamlit", "Jupyter", "Matplotlib", "Pandas"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "GitLab", "Jira"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
];
