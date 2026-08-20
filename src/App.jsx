import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import PageShell from "./components/layout/PageShell";
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";

import ScrollToTop from "./components/layout/ScrollToTop";
import AnimatedRoutes from "./components/animation/AnimatedRoutes";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageShell>
        <Header onMenuOpen={() => setMobileMenuOpen(true)} />

        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        <AnimatedRoutes />

        <Footer />
      </PageShell>
    </BrowserRouter>
  );
}

export default App;
