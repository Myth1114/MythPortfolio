import { useEffect, useState } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";

import Pin from "../primitives/Pin";

import {
  getGitHubProfile,
  getGitHubContributions,
} from "../services/githubService";

import "./GitHubStats.css";

function GitHubStats() {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    async function loadGitHubData() {
      try {
        const [profileData, contributionData] = await Promise.all([
          getGitHubProfile(),
          getGitHubContributions(),
        ]);

        setProfile(profileData);
        setContributions(contributionData);
      } catch (err) {
        console.error("GitHub Stats Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadGitHubData();
  }, []);

  return (
    <section className="github-stats">
      <div className="container">
        <div className="github-stats__paper">
          <Pin position="top-right" color="accent" />

          {/* HEADER */}

          <div className="github-stats__header">
            <div>
              <span className="eyebrow">GITHUB / ACTIVITY</span>

              <h2 className="section-title">
                Building in
                <br />
                <span>public.</span>
              </h2>
            </div>

            <GitBranch
              className="github-stats__github-icon"
              size={32}
              strokeWidth={1.2}
            />
          </div>

          <p className="github-stats__intro">
            A small look at the code, experiments and projects that happen
            behind the scenes.
          </p>

          {/* METRICS */}

          <div className="github-stats__metrics">
            <div className="github-stat">
              <span className="github-stat__label">PUBLIC REPOS</span>

              <strong>{loading ? "—" : profile?.public_repos ?? "—"}</strong>
            </div>

            <div className="github-stat">
              <span className="github-stat__label">FOLLOWERS</span>

              <strong>{loading ? "—" : profile?.followers ?? "—"}</strong>
            </div>

            <div className="github-stat">
              <span className="github-stat__label">FOLLOWING</span>

              <strong>{loading ? "—" : profile?.following ?? "—"}</strong>
            </div>

            <div className="github-stat">
              <span className="github-stat__label">CONTRIBUTIONS</span>

              <strong>
                {loading ? "—" : contributions?.totalContributions ?? "—"}
              </strong>
            </div>
          </div>

          {/* ACTIVITY */}

          <div className="github-stats__activity">
            <div className="github-stats__activity-header">
              <div>
                <GitBranch size={15} strokeWidth={1.4} />

                <span>RECENT ACTIVITY</span>
              </div>

              <span>LAST YEAR</span>
            </div>

            <div className="github-stats__grid" aria-hidden="true">
              {contributions?.weeks?.map((week, weekIndex) => (
                <div className="github-stats__column" key={weekIndex}>
                  {week.contributionDays.map((day) => (
                    <span
                      key={day.date}
                      className={`github-stats__cell github-stats__cell--${day.contributionLevel.toLowerCase()}`}
                      title={`${day.contributionCount} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}

          <div className="github-stats__footer">
            <span className="handwritten">
              {error
                ? "github seems to be hiding today."
                : "still learning, still building."}
            </span>

            <a
              href="https://github.com/Myth1114"
              target="_blank"
              rel="noreferrer"
              className="github-stats__link"
            >
              <span>VIEW GITHUB</span>

              <ArrowUpRight size={16} strokeWidth={1.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
