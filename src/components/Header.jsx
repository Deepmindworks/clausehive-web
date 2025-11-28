import { useState, useEffect } from 'react';
import '../styles/Header.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <div className="logo">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2L35 11V29L20 38L5 29V11L20 2Z" fill="url(#hexGradient)" stroke="#11C7C5" strokeWidth="2" />
                            <path d="M20 12L27 16.5V25.5L20 30L13 25.5V16.5L20 12Z" fill="#F4C542" />
                            <defs>
                                <linearGradient id="hexGradient" x1="5" y1="2" x2="35" y2="38" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#11C7C5" />
                                    <stop offset="1" stopColor="#0A1A2F" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="logo-text">ClauseHive</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav">
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#workflow" className="nav-link">Workflow</a>
                        <a href="#ai-search" className="nav-link">AI Search</a>
                        <a href="#use-cases" className="nav-link">Use Cases</a>
                        <a href="#pricing" className="nav-link">Pricing</a>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="cta-buttons">
                        <a href="#demo" className="btn btn-outline btn-sm">Book Demo</a>
                        <a href="#trial" className="btn btn-primary btn-sm">Start Free Trial</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={mobileMenuOpen ? 'menu-icon-open' : ''}></span>
                        <span className={mobileMenuOpen ? 'menu-icon-open' : ''}></span>
                        <span className={mobileMenuOpen ? 'menu-icon-open' : ''}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="mobile-menu">
                        <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
                        <a href="#workflow" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Workflow</a>
                        <a href="#ai-search" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>AI Search</a>
                        <a href="#use-cases" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Use Cases</a>
                        <a href="#pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                        <div className="mobile-cta">
                            <a href="#demo" className="btn btn-outline">Book Demo</a>
                            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
