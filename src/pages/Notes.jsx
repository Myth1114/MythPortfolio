import PageHeader from "../components/layout/PageHeader";
import ArchiveCard from "../components/notes/ArchiveCard";
import SEO from "../components/seo/SEO";

import notes from "../data/notes";

import "./Notes.css";

function Notes() {
  return (
    <>
      <SEO
        title="Notes"
        description="A collection of notes, ideas, lessons and things worth remembering from Mithilesh Yadav."
        path="/notes"
      />
      <main className="notes-page">
        <div className="container">
          <PageHeader
            eyebrow="05 — Notes"
            title="Things worth"
            titleAccent="remembering."
            description="Small technical observations collected while building, debugging and learning."
          />

          <section className="notes-page__grid">
            {notes.map((note, index) => (
              <ArchiveCard key={note.id} note={note} index={index} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default Notes;
