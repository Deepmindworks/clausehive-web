import '../styles/Hero.css';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.section
            className="hero hexagon-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title animate-fade-in-up">
                            AI-Native Contract <br />
                            <span className="text-gradient">Lifecycle Management</span>
                        </h1>
                        <p className="hero-subtitle">
                            Custom intake forms. Intelligent clause analysis. Automated workflows.
                            Query your contracts like you query your code.
                        </p>
                        <div className="hero-cta">
                            <a href="#demo" className="btn btn-primary btn-lg">Book Demo</a>
                            <a href="#trial" className="btn btn-secondary btn-lg">Start Free Trial</a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-number">10x</div>
                                <div className="stat-label">Faster Contract Processing</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">95%</div>
                                <div className="stat-label">Automation Rate</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Compliance Tracking</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <motion.div
                            className="floating-card"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="card-header">
                                <div className="card-dot"></div>
                                <div className="card-dot"></div>
                                <div className="card-dot"></div>
                            </div>
                            <div className="card-content">
                                <div className="contract-line" style={{ width: '80%' }}></div>
                                <div className="contract-line" style={{ width: '60%' }}></div>
                                <div className="contract-line" style={{ width: '90%' }}></div>
                                <div className="highlight-box">
                                    <span className="highlight-label">AI Detected</span>
                                    <span className="highlight-text">Non-compete clause expires in 90 days</span>
                                </div>
                                <div className="contract-line" style={{ width: '70%' }}></div>
                                <div className="contract-line" style={{ width: '85%' }}></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="hero-wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#F7F9FB" />
                </svg>
            </div>
        </motion.section>
    );
}
