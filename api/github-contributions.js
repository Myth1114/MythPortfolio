/* global process */

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_USERNAME = "Myth1114";

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  // Never attempt the GitHub request without a server-side token
  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    console.error("GitHub contribution error: GITHUB_TOKEN is missing.");

    return res.status(500).json({
      error: "Unable to load GitHub contributions.",
    });
  }

  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions

            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${githubToken}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
        "User-Agent": "mithilesh-portfolio",
      },

      body: JSON.stringify({
        query,
      }),

      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error(
        `GitHub contribution request failed with status ${response.status}.`
      );

      return res.status(502).json({
        error: "Unable to load GitHub contributions.",
      });
    }

    const result = await response.json();

    if (result.errors?.length) {
      console.error("GitHub GraphQL errors:", result.errors);

      return res.status(502).json({
        error: "Unable to load GitHub contributions.",
      });
    }

    const calendar =
      result.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      console.error("GitHub contribution calendar was not returned.");

      return res.status(502).json({
        error: "Unable to load GitHub contributions.",
      });
    }

    /*
     * Browser:
     * Don't permanently cache the API response.
     *
     * Vercel CDN:
     * Cache for 1 hour.
     *
     * stale-while-revalidate:
     * Vercel can serve the previous response while refreshing it.
     */
    res.setHeader(
      "Cache-Control",
      "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    );

    return res.status(200).json({
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch (error) {
    if (error?.name === "TimeoutError") {
      console.error("GitHub contribution request timed out.");
    } else {
      console.error("GitHub contribution error:", error);
    }

    return res.status(500).json({
      error: "Unable to load GitHub contributions.",
    });
  }
}
