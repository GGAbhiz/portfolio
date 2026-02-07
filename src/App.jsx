import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis'

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
            {/* Scroll Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
                style={{ scaleX }}
            />
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>Abhishek Sharma</span>

                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                        <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
                        <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
                        <a href="#work" className="hover:text-emerald-400 transition-colors">Work</a>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-900 border-b border-gray-800 p-4 space-y-4">
                        <a href="#home" className="block hover:text-emerald-400 text-gray-300" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#skills" className="block hover:text-emerald-400 text-gray-300" onClick={() => setIsMenuOpen(false)}>Skills</a>
                        <a href="#work" className="block hover:text-emerald-400 text-gray-300" onClick={() => setIsMenuOpen(false)}>Work</a>
                    </div>
                )}
            </nav>

            <main className="pt-16">
                <section id="home">
                    <Hero />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="work">
                    <Portfolio />
                </section>
            </main>

            <footer className="bg-black py-8 text-center text-gray-600 text-sm border-t border-gray-900">
                <p>© {new Date().getFullYear()} Abhishek. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
