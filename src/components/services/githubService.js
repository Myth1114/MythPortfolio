const GITHUB_USERNAME = "Myth1114";

const GITHUB_API = "https://api.github.com";

export async function getGitHubProfile() {
  const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`);

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub profile.");
  }

  return response.json();
}

export async function getGitHubRepositories() {
  const response = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub repositories.");
  }

  return response.json();
}

export async function getGitHubContributions() {
  const response = await fetch("/api/github-contributions");

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub contributions.");
  }

  return response.json();
}
