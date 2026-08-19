import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import PageShell from "./components/layout/PageShell";
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Journey from "./pages/Journey";
import Tools from "./pages/Tools";
import Thoughts from "./pages/Thoughts";
import Notes from "./pages/Notes";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import BucketList from "./pages/BucketList";
import Fun from "./pages/Fun";
import Contact from "./pages/Contact";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <PageShell>
        <Header onMenuOpen={() => setMobileMenuOpen(true)} />

        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bucket-list" element={<BucketList />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </PageShell>
    </BrowserRouter>
  );
}

export default App;
