import '../styles/AISearch.css';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AISearch() {
    return (
        <section id="ai-search" className="ai-search section-lg">
            <div className="container">
                <div className="ai-search-content">
                    <div className="ai-search-text">
                        <h2 className="section-title">AI Clause Intelligence & Repository Search</h2>
                        <p className="section-description">
                            Search your entire contract library. Ask questions in natural language. Get instant answers.
                        </p>
                        <div className="ai-features">
                            <div className="ai-feature">
                                <div className="ai-feature-icon">🔍</div>
                                <div>
                                    <h4>Semantic Search</h4>
                                    <p>Find contracts by meaning, not just keywords</p>
                                </div>
                            </div>
                            <div className="ai-feature">
                                <div className="ai-feature-icon">💬</div>
                                <div>
                                    <h4>Natural Language Queries</h4>
                                    <p>Ask questions like you would to a colleague</p>
                                </div>
                            </div>
                            <div className="ai-feature">
                                <div className="ai-feature-icon">⚡</div>
                                <div>
                                    <h4>Instant Results</h4>
                                    <p>Get answers in milliseconds, not hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ai-search-demo">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Show all contracts with non-compete clauses expiring in next 90 days..."
                                className="search-input"
                                readOnly
                            />
                            <button className="search-button">
                                <Search size={20} />
                            </button>
                        </div>
                        <div className="search-results">
                            <div className="search-result">
                                <div className="result-header">
                                    <span className="result-title">Vendor Agreement - Acme Corp</span>
                                    <span className="result-badge">Expires in 45 days</span>
                                </div>
                                <p className="result-excerpt">
                                    "Employee agrees not to compete with Company for a period of 12 months..."
                                </p>
                                <div className="result-meta">
                                    <span>Contract #2341</span>
                                    <span>•</span>
                                    <span>Signed: Jan 15, 2024</span>
                                </div>
                            </div>
                            <div className="search-result">
                                <div className="result-header">
                                    <span className="result-title">Employment Contract - John Doe</span>
                                    <span className="result-badge">Expires in 78 days</span>
                                </div>
                                <p className="result-excerpt">
                                    "During employment and for 18 months thereafter, Employee shall not engage..."
                                </p>
                                <div className="result-meta">
                                    <span>Contract #2298</span>
                                    <span>•</span>
                                    <span>Signed: Dec 3, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
