/**
 * GitHub API — build-time only
 * NEVER import this on the client side / in React islands
 */

const REPO_OWNER = 'Gentleman-Programming';
const REPO_NAME = 'gentle-ai';
const BASE_URL = 'https://api.github.com';

const FALLBACK_STATS = {
  stars: 1676,
  forks: 199,
  openIssues: 55,
  watchers: 21,
} as const;

const FALLBACK_RELEASE = {
  version: 'v1.18.3',
  publishedAt: '2026-04-06',
  url: 'https://github.com/Gentleman-Programming/gentle-ai/releases',
} as const;

const FALLBACK_CONTRIBUTORS = 24;

export interface RepoStats {
  stars: number;
  forks: number;
  openIssues: number;
  watchers: number;
}

export interface LatestRelease {
  version: string;
  publishedAt: string;
  url: string;
}

function makeHeaders(): HeadersInit {
  const token = import.meta.env.GITHUB_TOKEN;
  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function getRepoStats(): Promise<RepoStats> {
  try {
    const res = await fetch(`${BASE_URL}/repos/${REPO_OWNER}/${REPO_NAME}`, {
      headers: makeHeaders(),
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    return {
      stars: data.stargazers_count ?? FALLBACK_STATS.stars,
      forks: data.forks_count ?? FALLBACK_STATS.forks,
      openIssues: data.open_issues_count ?? FALLBACK_STATS.openIssues,
      watchers: data.watchers_count ?? FALLBACK_STATS.watchers,
    };
  } catch (err) {
    console.warn('[github.ts] getRepoStats failed, using fallback:', err);
    return { ...FALLBACK_STATS };
  }
}

export async function getLatestRelease(): Promise<LatestRelease> {
  try {
    const res = await fetch(
      `${BASE_URL}/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
      { headers: makeHeaders() }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const publishedAt = data.published_at
      ? data.published_at.split('T')[0]
      : FALLBACK_RELEASE.publishedAt;

    return {
      version: data.tag_name ?? FALLBACK_RELEASE.version,
      publishedAt,
      url: data.html_url ?? FALLBACK_RELEASE.url,
    };
  } catch (err) {
    console.warn('[github.ts] getLatestRelease failed, using fallback:', err);
    return { ...FALLBACK_RELEASE };
  }
}

/**
 * Uses the Link header pagination trick to get the total count without
 * fetching all release pages. Requests page 1 with per_page=1, reads
 * the last page number from the Link header's `rel="last"` entry.
 */
export async function getReleaseCount(): Promise<number> {
  try {
    const res = await fetch(
      `${BASE_URL}/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=1&page=1`,
      { headers: makeHeaders() }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const linkHeader = res.headers.get('link');
    if (!linkHeader) {
      // If there's no Link header the repo has 0 or 1 releases
      const data = await res.json();
      return Array.isArray(data) ? data.length : 0;
    }

    // Parse: <...?page=N>; rel="last"
    const match = linkHeader.match(/[?&]page=(\d+)>;\s*rel="last"/);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }

    return 1;
  } catch (err) {
    console.warn('[github.ts] getReleaseCount failed, using fallback:', err);
    return 0;
  }
}

export interface Contributor {
  login: string;
  avatarUrl: string;
  profileUrl: string;
  contributions: number;
}

export async function getContributors(max: number = 20): Promise<Contributor[]> {
  try {
    const perPage = Math.min(max, 100);
    const res = await fetch(
      `${BASE_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=${perPage}&anon=false`,
      { headers: makeHeaders() }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const data: Array<{
      login: string;
      avatar_url: string;
      html_url: string;
      contributions: number;
    }> = await res.json();

    return data.slice(0, max).map((c) => ({
      login: c.login,
      avatarUrl: c.avatar_url,
      profileUrl: c.html_url,
      contributions: c.contributions,
    }));
  } catch (err) {
    console.warn('[github.ts] getContributors failed, using fallback:', err);
    // Return a synthetic list with the known fallback count
    return Array.from({ length: Math.min(max, FALLBACK_CONTRIBUTORS) }, (_, i) => ({
      login: `contributor-${i + 1}`,
      avatarUrl: `https://avatars.githubusercontent.com/u/${1000 + i}?v=4`,
      profileUrl: 'https://github.com',
      contributions: 1,
    }));
  }
}
