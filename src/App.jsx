import { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import useLenis from "./hooks/useLenis";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/layout/LoadingScreen";
import ScrollProgress from "./components/layout/ScrollProgress";
import CursorGlow from "./components/layout/CursorGlow";
import WhatsAppBadge from "./components/layout/WhatsAppBadge";
import PageTransition from "./components/layout/PageTransition";

import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const PreOrder = lazy(() => import("./pages/PreOrder"));
const Blog = lazy(() => import("./pages/Blog"));
const Training = lazy(() => import("./pages/Training"));
const Contact = lazy(() => import("./pages/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useLenis();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen show={loading} />
      <ScrollProgress />
      <CursorGlow />
     <WhatsAppBadge />
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/pre-order" element={<PageTransition><PreOrder /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/training" element={<PageTransition><Training /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}
