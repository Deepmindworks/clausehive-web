import '../styles/CTABanner.css';
import { motion } from 'framer-motion';

export default function CTABanner() {
    return (
        <section className="cta-banner">
            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="cta-title">Ready to Transform Your Contract Management?</h2>
                    <p className="cta-description">
                        Join forward-thinking companies using ClauseHive to automate workflows,
                        reduce risk, and accelerate contract cycles.
                    </p>
                    <div className="cta-buttons">
                        <a href="#demo" className="btn btn-primary btn-lg">Book a Demo</a>
                        <a href="#trial" className="btn btn-outline btn-lg">Start Free Trial</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
