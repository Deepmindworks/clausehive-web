import '../styles/Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2L35 11V29L20 38L5 29V11L20 2Z" fill="url(#hexGradientFooter)" stroke="#11C7C5" strokeWidth="2" />
                                <path d="M20 12L27 16.5V25.5L20 30L13 25.5V16.5L20 12Z" fill="#F4C542" />
                                <defs>
                                    <linearGradient id="hexGradientFooter" x1="5" y1="2" x2="35" y2="38" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#11C7C5" />
                                        <stop offset="1" stopColor="#0A1A2F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="logo-text">ClauseHive</span>
                        </div>
                        <p className="footer-description">
                            AI-Native Contract Lifecycle Management for modern businesses.
                            Automate workflows, analyze clauses, and query contracts intelligently.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="GitHub">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Product</h4>
                        <ul className="footer-links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#workflow">Workflow Builder</a></li>
                            <li><a href="#ai-search">AI Search</a></li>
                            <li><a href="#integrations">Integrations</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#changelog">Changelog</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#partners">Partners</a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Resources</h4>
                        <ul className="footer-links">
                            <li><a href="#docs">Documentation</a></li>
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#api">API Reference</a></li>
                            <li><a href="#community">Community</a></li>
                            <li><a href="#security">Security</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Legal</h4>
                        <ul className="footer-links">
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#gdpr">GDPR</a></li>
                            <li><a href="#compliance">Compliance</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} ClauseHive. All rights reserved.
                    </p>
                    <p className="tagline">
                        Built for AI-native businesses 🚀
                    </p>
                </div>
            </div>
        </footer>
    );
}
