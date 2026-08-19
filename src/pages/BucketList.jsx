import bucketList from "../data/bucketList";

import PageHeader from "../components/layout/PageHeader";
import BucketItem from "../components/bucketList/BucketItem";

import "./BucketList.css";

function BucketList() {
  const inProgress = bucketList.filter((item) => item.status === "in-progress");

  const onHorizon = bucketList.filter((item) => item.status === "on-horizon");

  return (
    <main className="bucket-page">
      <div className="container">
        <PageHeader
          eyebrow="08 — Bucket List"
          title="Things I want"
          titleAccent="to build."
          description="Projects, experiments and ideas that I want to bring into the world — some already moving, others waiting for the right moment."
        />

        {/* IN PROGRESS */}

        {inProgress.length > 0 && (
          <section className="bucket-page__section">
            <div className="bucket-page__section-header">
              <div>
                <span className="eyebrow">Currently building</span>

                <h2>
                  In
                  <br />
                  <span>progress.</span>
                </h2>
              </div>

              <p>Things that are no longer just ideas.</p>
            </div>

            <div className="bucket-page__list">
              {inProgress.map((item) => (
                <BucketItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* ON THE HORIZON */}

        {onHorizon.length > 0 && (
          <section className="bucket-page__section bucket-page__section--future">
            <div className="bucket-page__section-header">
              <div>
                <span className="eyebrow">Someday</span>

                <h2>
                  On the
                  <br />
                  <span>horizon.</span>
                </h2>
              </div>

              <p>Ideas worth keeping around until the right time arrives.</p>
            </div>

            <div className="bucket-page__list">
              {onHorizon.map((item) => (
                <BucketItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* CLOSING */}

        <section className="bucket-page__closing">
          <span className="handwritten">There is always another idea.</span>

          <p>
            This list is intentionally unfinished. That's kind of the point.
          </p>
        </section>
      </div>
    </main>
  );
}

export default BucketList;
