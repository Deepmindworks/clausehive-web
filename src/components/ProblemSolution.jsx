import '../styles/ProblemSolution.css';
import { motion } from 'framer-motion';

export default function ProblemSolution() {
    return (
        <section className="problem-solution section">
            <div className="container container-narrow">
                <div className="problem-solution-content">
                    <motion.div
                        className="problem-box"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="section-label">The Problem</h3>
                        <ul className="problem-list">
                            <li>📄 Contracts scattered across emails, drives, and systems</li>
                            <li>⏱️ Manual approval workflows causing delays</li>
                            <li>🔍 Lost metadata and critical obligations</li>
                            <li>📅 Missed renewal dates and compliance deadlines</li>
                            <li>🤝 Inefficient collaboration between legal, sales, and procurement</li>
                        </ul>
                    </motion.div>
                    <div className="arrow">→</div>
                    <motion.div
                        className="solution-box"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="section-label">The ClauseHive Solution</h3>
                        <ul className="solution-list">
                            <li>✨ Unified AI-powered contract repository</li>
                            <li>⚡ Automated workflows with parallel approvals</li>
                            <li>🤖 Intelligent clause extraction and risk detection</li>
                            <li>🔔 Automated reminders and obligation tracking</li>
                            <li>🚀 Built for AI-native, fast-growing businesses</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
