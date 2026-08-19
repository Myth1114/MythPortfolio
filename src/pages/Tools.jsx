import PageHeader from "../components/layout/PageHeader";
import PaperCard from "../components/primitives/PaperCard";
import Badge from "../components/primitives/Badge";

import tools from "../data/tools";

import "./Tools.css";

function Tools() {
  return (
    <main className="tools-page">
      <div className="container">
        <PageHeader
          eyebrow="03 — Tools"
          title="My digital"
          titleAccent="workbench."
          description="The technologies, tools and practices I use to turn ideas into useful digital experiences."
        />

        <section className="tools-page__intro">
          <p>
            Tools change constantly. What matters to me is understanding how to
            use them thoughtfully — choosing the right technology for the
            problem rather than using technology for its own sake.
          </p>
        </section>

        <section className="tools-page__grid">
          {tools.map((group) => (
            <PaperCard key={group.number} className="tools-group">
              <div className="tools-group__top">
                <span className="tools-group__number">{group.number}</span>

                <Badge variant="accent">{group.category}</Badge>
              </div>

              <p className="tools-group__description">{group.description}</p>

              <div className="tools-group__items">
                {group.items.map((tool) => (
                  <div className="tools-group__item" key={tool.name}>
                    <div>
                      <strong>{tool.name}</strong>

                      <span>{tool.detail}</span>
                    </div>

                    <span className="tools-group__mark">↗</span>
                  </div>
                ))}
              </div>
            </PaperCard>
          ))}
        </section>

        <section className="tools-page__note">
          <span className="eyebrow">A small note</span>

          <p className="handwritten">Tools change. The curiosity doesn't.</p>
        </section>
      </div>
    </main>
  );
}

export default Tools;
