/* global process */

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const query = `
      query {
        user(login: "Myth1114") {
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
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error("GitHub GraphQL errors:", result.errors);

      return res.status(500).json({
        error: "GitHub GraphQL request failed",
      });
    }

    const calendar =
      result.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return res.status(404).json({
        error: "Contribution calendar not found",
      });
    }

    return res.status(200).json(calendar);
  } catch (error) {
    console.error("GitHub contribution error:", error);

    return res.status(500).json({
      error: "Unable to load GitHub contributions",
    });
  }
}
