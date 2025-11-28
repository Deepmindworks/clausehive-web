import '../styles/Demo.css';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Demo() {
    return (
        <section className="demo section-lg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">See ClauseHive in Action</h2>
                    <p className="section-description">
                        Watch how easy it is to manage contracts with ClauseHive
                    </p>
                </div>
                <motion.div
                    className="demo-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="demo-video">
                        <div className="demo-placeholder">
                            <div className="play-button">
                                <Play size={60} />
                            </div>
                            <p>Interactive Product Demo</p>
                        </div>
                    </div>
                    <div className="demo-highlights">
                        <div className="demo-highlight">
                            <span className="highlight-number">01</span>
                            <div>
                                <h4>Upload & Analyze</h4>
                                <p>Drag and drop contracts for instant AI analysis</p>
                            </div>
                        </div>
                        <div className="demo-highlight">
                            <span className="highlight-number">02</span>
                            <div>
                                <h4>Review & Approve</h4>
                                <p>Collaborate with your team in real-time</p>
                            </div>
                        </div>
                        <div className="demo-highlight">
                            <span className="highlight-number">03</span>
                            <div>
                                <h4>Sign & Store</h4>
                                <p>E-sign and securely store with full audit trail</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
