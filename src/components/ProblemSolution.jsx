import '../styles/ProblemSolution.css';
import { motion } from 'framer-motion';
import { FolderX, AlertCircle, SearchX, CalendarX, UserX, Database, Workflow, Brain, BellRing, TrendingUp, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
    return (
        <section className="problem-solution section">
            <div className="container">
                <div className="problem-solution-grid">

                    {/* Problem Card */}
                    <motion.div
                        className="solution-card problem-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="card-header-label problem-label">THE PROBLEM</div>
                        <h3 className="card-main-title">Contract Chaos</h3>

                        <div className="problem-items">
                            <div className="problem-item">
                                <div className="item-icon problem-icon">
                                    <FolderX size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Scattered Documents</h4>
                                    <p>Contracts scattered across emails, drives, and systems</p>
                                </div>
                            </div>

                            <div className="problem-item">
                                <div className="item-icon problem-icon">
                                    <AlertCircle size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Manual Workflows</h4>
                                    <p>Manual approval workflows causing delays</p>
                                </div>
                            </div>

                            <div className="problem-item">
                                <div className="item-icon problem-icon">
                                    <SearchX size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Lost Metadata</h4>
                                    <p>Lost metadata and critical obligations</p>
                                </div>
                            </div>

                            <div className="problem-item">
                                <div className="item-icon problem-icon">
                                    <CalendarX size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Missed Deadlines</h4>
                                    <p>Missed renewal dates and compliance deadlines</p>
                                </div>
                            </div>

                            <div className="problem-item">
                                <div className="item-icon problem-icon">
                                    <UserX size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Poor Collaboration</h4>
                                    <p>Inefficient collaboration between legal, sales, and procurement</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <div className="arrow-container">
                        <ArrowRight size={40} className="arrow-icon" />
                    </div>

                    {/* Solution Card */}
                    <motion.div
                        className="solution-card success-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="card-header-label solution-label">THE CLAUSEHIVE SOLUTION</div>
                        <h3 className="card-main-title">AI-Powered Control</h3>

                        <div className="solution-items">
                            <div className="solution-item">
                                <div className="item-icon solution-icon">
                                    <Database size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Unified AI Repository</h4>
                                    <p>Unified AI-powered contract repository</p>
                                </div>
                            </div>

                            <div className="solution-item">
                                <div className="item-icon solution-icon">
                                    <Workflow size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Automated Workflows</h4>
                                    <p>Automated workflows with parallel approvals</p>
                                </div>
                            </div>

                            <div className="solution-item">
                                <div className="item-icon solution-icon">
                                    <Brain size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Intelligent Analysis</h4>
                                    <p>Intelligent clause extraction and risk detection</p>
                                </div>
                            </div>

                            <div className="solution-item">
                                <div className="item-icon solution-icon">
                                    <BellRing size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>Smart Tracking</h4>
                                    <p>Automated reminders and obligation tracking</p>
                                </div>
                            </div>

                            <div className="solution-item">
                                <div className="item-icon solution-icon">
                                    <TrendingUp size={20} />
                                </div>
                                <div className="item-content">
                                    <h4>AI-Native Platform</h4>
                                    <p>Built for AI-native, fast-growing businesses</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
