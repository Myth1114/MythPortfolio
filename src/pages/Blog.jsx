import { motion, useReducedMotion } from "motion/react";

import blog from "../data/blog";

import Pin from "../components/primitives/Pin";
import Badge from "../components/primitives/Badge";
import PageHeader from "../components/layout/PageHeader";
import BlogCard from "../components/blog/BlogCard";
import SEO from "../components/seo/SEO";

import "./Blog.css";

const articleVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Blog() {
  const shouldReduceMotion = useReducedMotion();

  const featuredArticle = blog.find((article) => article.featured);

  const articles = blog.filter((article) => !article.featured);

  return (
    <>
      <SEO
        title="Blog"
        description="Articles and longer-form writing by Mithilesh Yadav about development, technology, creativity, experiments and lessons from building."
        path="/blog"
      />

      <main className="blog-page">
        <div className="container">
          <PageHeader
            eyebrow="09 — Blog"
            title="Things I've"
            titleAccent="been thinking about."
            description="Notes on frontend development, building for the web, AI and the changing tools around us."
          />

          {/* FEATURED ARTICLE */}

          {featuredArticle && (
            <motion.section
              className="blog-page__featured"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 28,
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <article className="blog-page__featured-card">
                <Pin position="top-right" color="accent" />

                <div className="blog-page__featured-top">
                  <span className="blog-page__featured-number">
                    {featuredArticle.number}
                  </span>

                  <Badge variant="accent">Featured</Badge>
                </div>

                <h2>{featuredArticle.title}</h2>

                <p>{featuredArticle.excerpt}</p>

                <div className="blog-page__featured-meta">
                  <span>{featuredArticle.category}</span>
                  <span>{featuredArticle.date}</span>
                  <span>{featuredArticle.readingTime}</span>
                </div>
              </article>
            </motion.section>
          )}

          {/* ARTICLES */}

          <section className="blog-page__articles">
            <motion.div
              className="blog-page__articles-header"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 22,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div>
                <span className="eyebrow">Field notes</span>

                <h2>
                  More things
                  <br />
                  <span>worth exploring.</span>
                </h2>
              </div>

              <p>
                Shorter pieces about code, tools, interfaces and the strange new
                era we're building in.
              </p>
            </motion.div>

            <motion.div
              className="blog-page__grid"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.08,
              }}
              variants={{
                hidden: {},

                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.11,
                    delayChildren: shouldReduceMotion ? 0 : 0.05,
                  },
                },
              }}
            >
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={shouldReduceMotion ? undefined : articleVariants}
                  transition={{
                    duration: 0.68,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <BlogCard article={article} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Blog;
