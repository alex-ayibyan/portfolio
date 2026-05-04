export type Skill = {
  name: string;
  logo?: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

const devicon = (folder: string, file = folder) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${folder}/${file}-original.svg`;

const simpleIcon = (slug: string, color = "ffffff") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "React", logo: simpleIcon("react", "61DAFB") },
      { name: "Next.js", logo: simpleIcon("nextdotjs", "ffffff") },
      { name: "Angular", logo: simpleIcon("angular", "DD0031") },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: simpleIcon("javascript", "F7DF1E") },
      { name: "TypeScript", logo: simpleIcon("typescript", "3178C6") },
      { name: "Python", logo: simpleIcon("python", "3776AB") },
      { name: "Java", logo: devicon("java") },
      { name: "C#", logo: devicon("csharp") },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", logo: simpleIcon("nodedotjs", "5FA04E") },
      { name: "Express.js", logo: simpleIcon("express", "ffffff") },
      { name: "Spring Boot", logo: simpleIcon("springboot", "6DB33F") },
      { name: ".NET", logo: simpleIcon("dotnet", "512BD4") },
      { name: "REST APIs" },
      { name: "API Integrations" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", logo: simpleIcon("postgresql", "4169E1") },
      { name: "MongoDB", logo: simpleIcon("mongodb", "47A248") },
      { name: "MySQL", logo: simpleIcon("mysql", "4479A1") },
      { name: "Redis", logo: simpleIcon("redis", "DC382D") },
    ],
  },
  {
    title: "Data & BI",
    skills: [
      { name: "Power BI", logo: simpleIcon("powerbi", "F2C811") },
      { name: "Streamlit", logo: simpleIcon("streamlit", "FF4B4B") },
      { name: "Jupyter", logo: simpleIcon("jupyter", "F37626") },
      { name: "Matplotlib" },
      { name: "Pandas", logo: simpleIcon("pandas", "150458") },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", logo: simpleIcon("git", "F05032") },
      { name: "GitHub", logo: simpleIcon("github", "ffffff") },
      { name: "GitLab", logo: simpleIcon("gitlab", "FC6D26") },
      { name: "Jira", logo: simpleIcon("jira", "0052CC") },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", logo: simpleIcon("docker", "2496ED") },
      { name: "Kubernetes", logo: simpleIcon("kubernetes", "326CE5") },
      { name: "CI/CD" },
    ],
  },
];
