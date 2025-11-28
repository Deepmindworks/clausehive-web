import { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

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
            <div className="header-pill">
                <div className="header-content">
                    {/* Logo */}
                    <div className="logo">
                        <img src={logo} alt="ClauseHive Logo" width="40" height="40" />
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
                        <a href="https://calendly.com/sathvisiva/30min" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Book Demo</a>
                        {/* <a href="#trial" className="btn btn-primary btn-sm">Start Free Trial</a> */}
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
