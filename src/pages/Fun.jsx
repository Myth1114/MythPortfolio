import AntiPortfolio from "../components/fun/AntiPortfolio";
import ChooseSomething from "../components/fun/ChooseSomething";
import DeveloperSlotMachine from "../components/fun/DeveloperSlotMachine";
import FakeTerminal from "../components/fun/FakeTerminal";
import InternetFinds from "../components/fun/InternetFinds";
import MithileshFM from "../components/fun/MithileshFM";
import TinyGames from "../components/fun/TinyGames";
import UselessWonderful from "../components/fun/UselessWonderful";
import PageHeader from "../components/layout/PageHeader";
import SEO from "../components/seo/SEO";

import "./Fun.css";

function Fun() {
  return (
    <>
      <SEO
        title="Fun"
        description="A strange little corner of Mithilesh Yadav's portfolio filled with tiny games, internet discoveries, experiments, questionable developer ideas and other unnecessary things."
        path="/fun"
      />
      <main className="fun-page">
        <div className="container">
          <PageHeader
            eyebrow="10 — Fun"
            title="A little corner"
            titleAccent="of the internet."
            description="Not everything here needs to be useful. Some things are here simply because I wanted to make them."
          />

          <section className="fun-page__intro">
            <div className="fun-page__intro-card">
              <span className="fun-page__intro-label">
                ENTER AT YOUR OWN RISK
              </span>

              <h2>
                There are probably
                <br />
                <span>a few unnecessary things here.</span>
              </h2>

              <p>
                Tiny experiments, strange ideas, things I found interesting, and
                a few interactions that absolutely did not need to exist.
              </p>

              <button type="button" className="fun-page__surprise">
                <span>Choose something</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </section>
          <ChooseSomething />
          <TinyGames />
          <FakeTerminal />
          <MithileshFM />
          <InternetFinds />
          <UselessWonderful />
          <DeveloperSlotMachine />
          <AntiPortfolio />
        </div>
      </main>
    </>
  );
}

export default Fun;
