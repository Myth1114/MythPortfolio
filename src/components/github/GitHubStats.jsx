import { useEffect, useState } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import Pin from "../primitives/Pin";

import {
  getGitHubProfile,
  getGitHubContributions,
} from "../services/githubService";

import "./GitHubStats.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const metricVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function GitHubStats() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contributions, setContributions] = useState(null);

  const shouldReduceMotion = useReducedMotion();

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
        <motion.div
          className="github-stats__paper"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                  scale: 0.99,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Pin position="top-right" color="accent" />

          {/* HEADER */}

          <motion.div
            className="github-stats__header"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
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
          </motion.div>

          {/* INTRO */}

          <motion.p
            className="github-stats__intro"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{
              duration: 0.65,
              delay: shouldReduceMotion ? 0 : 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            A small look at the code, experiments and projects that happen
            behind the scenes.
          </motion.p>

          {/* METRICS */}

          <motion.div
            className="github-stats__metrics"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.1,
                  delayChildren: shouldReduceMotion ? 0 : 0.18,
                },
              },
            }}
          >
            <motion.div
              className="github-stat"
              variants={shouldReduceMotion ? undefined : metricVariants}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="github-stat__label">PUBLIC REPOS</span>

              <strong>{loading ? "—" : profile?.public_repos ?? "—"}</strong>
            </motion.div>

            <motion.div
              className="github-stat"
              variants={shouldReduceMotion ? undefined : metricVariants}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="github-stat__label">FOLLOWERS</span>

              <strong>{loading ? "—" : profile?.followers ?? "—"}</strong>
            </motion.div>

            <motion.div
              className="github-stat"
              variants={shouldReduceMotion ? undefined : metricVariants}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="github-stat__label">FOLLOWING</span>

              <strong>{loading ? "—" : profile?.following ?? "—"}</strong>
            </motion.div>

            <motion.div
              className="github-stat"
              variants={shouldReduceMotion ? undefined : metricVariants}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="github-stat__label">CONTRIBUTIONS</span>

              <strong>
                {loading ? "—" : contributions?.totalContributions ?? "—"}
              </strong>
            </motion.div>
          </motion.div>

          {/* ACTIVITY */}

          <motion.div
            className="github-stats__activity"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
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
          </motion.div>

          {/* FOOTER */}

          <motion.div
            className="github-stats__footer"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHubStats;
