import { githubEnrichments, hiddenRepos, manualProjects } from "@/data/projects";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  fork: boolean;
  archived: boolean;
  updated_at: string;
};

export type Project = {
  id: string | number;
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string;
  tags: string[];
  link: string;
  github: string;
  image?: string;
  gallery?: string[];
};

function formatRepoName(name: string): string {
  return name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

function getFallbackDescription(repo: GitHubRepo): string {
  return repo.description ?? `GitHub project: ${formatRepoName(repo.name)}.`;
}

export async function getProjects(): Promise<Project[]> {
  const username = process.env.GITHUB_USERNAME ?? "alex-ayibyan";
  const headers: HeadersInit = { Accept: "application/vnd.github.v3+json" };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  let githubProjects: Project[] = [];

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=50&type=public`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}`);
    }

    const repos: GitHubRepo[] = await res.json();

    githubProjects = repos
      .filter((repo) => !repo.fork && !repo.archived && !hiddenRepos.includes(repo.name))
      .map((repo) => {
        const enrichment = githubEnrichments[repo.name];
        const tags = Array.from(
          new Set([
            ...(repo.language ? [repo.language] : []),
            ...repo.topics,
          ])
        );
        const description = enrichment?.description ?? getFallbackDescription(repo);

        return {
          id: repo.id,
          title: enrichment?.title ?? formatRepoName(repo.name),
          description,
          fullDescription: enrichment?.fullDescription ?? description,
          features: enrichment?.features ?? [],
          challenges: enrichment?.challenges ?? "",
          tags: enrichment?.tags ?? tags,
          link: enrichment?.link ?? repo.homepage ?? repo.html_url,
          github: repo.html_url,
          image: enrichment?.image,
          gallery: enrichment?.gallery ?? [],
        };
      });
  } catch (err) {
    console.error("GitHub API fetch failed:", err);
  }

  return [...githubProjects, ...manualProjects];
}
