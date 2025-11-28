import '../styles/Features.css';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Database, GitMerge, ListTodo, History, PenLine, LayoutDashboard } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <FileText size={24} />,
            title: 'Custom Intake Forms',
            description: 'Design dynamic contract request forms tailored to business units, roles, and contract types. Automatically trigger workflows based on form inputs.'
        },
        {
            icon: <ShieldCheck size={24} />,
            title: 'Smart Clause Analysis',
            description: 'AI-powered clause extraction, risk detection, and compliance checking. Identify non-standard terms and potential issues automatically.'
        },
        {
            icon: <Database size={24} />,
            title: 'AI Contract Repository',
            description: 'Semantic search and natural language queries. Ask questions like "Show contracts expiring in Q2" and get instant, accurate results.'
        },
        {
            icon: <GitMerge size={24} />,
            title: 'Visual Workflow Builder',
            description: 'Drag-and-drop interface for creating approval flows with parallel steps, conditional logic, and automated escalations—no code required.'
        },
        {
            icon: <ListTodo size={24} />,
            title: 'Task & Obligation Tracking',
            description: 'Automatically extract obligations, deadlines, and milestones. Get proactive reminders before critical dates.'
        },
        {
            icon: <History size={24} />,
            title: 'Version Control & Audit Trail',
            description: 'Complete version history with change tracking. Know who modified what, when, and why—essential for compliance.'
        },
        {
            icon: <PenLine size={24} />,
            title: 'E-Signature Integration',
            description: 'Seamless integration with DocuSign, Adobe Sign, and other e-signature providers. Complete contracts faster.'
        },
        {
            icon: <LayoutDashboard size={24} />,
            title: 'Analytics & Dashboard',
            description: 'Real-time insights into contract status, renewal calendar, risk metrics, and KPI tracking for data-driven decisions.'
        }
    ];

    return (
        <section id="features" className="features section-lg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Powerful Features for Modern Teams</h2>
                    <p className="section-description">
                        Everything you need to manage contracts efficiently, from intake to renewal
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card-icon">{feature.icon}</div>
                            <h3 className="card-title">{feature.title}</h3>
                            <p className="card-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
