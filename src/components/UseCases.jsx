import '../styles/UseCases.css';
import { motion } from 'framer-motion';

export default function UseCases() {
    const useCases = [
        {
            icon: '⚖️',
            title: 'Legal & Compliance',
            description: 'Centralize contract review, ensure compliance, track obligations, and maintain complete audit trails for regulatory requirements.'
        },
        {
            icon: '🛒',
            title: 'Procurement & Vendor Management',
            description: 'Streamline vendor onboarding, manage supplier agreements, track spend commitments, and automate renewal negotiations.'
        },
        {
            icon: '💰',
            title: 'Sales & Finance',
            description: 'Accelerate deal cycles with automated approvals, track revenue contracts, manage payment terms, and integrate with your CRM.'
        },
        {
            icon: '👥',
            title: 'HR & Partner Agreements',
            description: 'Manage employment contracts, NDAs, partner agreements, and ensure consistent terms across all relationships.'
        },
        {
            icon: '🚀',
            title: 'AI/SaaS Companies',
            description: 'Built for fast-growing, AI-native businesses that need scalable, automated CLM with modern integrations and APIs.'
        }
    ];

    return (
        <section id="use-cases" className="use-cases section-lg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Built for Every Team</h2>
                    <p className="section-description">
                        From legal to sales, ClauseHive streamlines contract management across your organization
                    </p>
                </div>
                <div className="use-cases-grid">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            className="use-case-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="use-case-icon">{useCase.icon}</div>
                            <h3>{useCase.title}</h3>
                            <p>{useCase.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
