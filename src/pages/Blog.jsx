import blog from "../data/blog";

import Pin from "../components/primitives/Pin";
import Badge from "../components/primitives/Badge";
import PageHeader from "../components/layout/PageHeader";
import BlogCard from "../components/blog/BlogCard";
import SEO from "../components/seo/SEO";

import "./Blog.css";

function Blog() {
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

          {featuredArticle && (
            <section className="blog-page__featured">
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
            </section>
          )}

          <section className="blog-page__articles">
            <div className="blog-page__articles-header">
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
            </div>

            <div className="blog-page__grid">
              {articles.map((article, index) => (
                <BlogCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Blog;
