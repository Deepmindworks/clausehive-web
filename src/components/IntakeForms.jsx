import '../styles/IntakeForms.css';
import { motion } from 'framer-motion';

export default function IntakeForms() {
    const forms = [
        { icon: '🤝', title: 'NDA Request', description: 'Quick mutual or one-way NDA generation' },
        { icon: '🏢', title: 'Vendor Onboarding', description: 'Comprehensive vendor agreement workflow' },
        { icon: '💼', title: 'Sales Contract', description: 'Customer agreements with approval routing' },
        { icon: '📋', title: 'Work Order', description: 'SOW and project-based contracts' },
        { icon: '👥', title: 'Employment Agreement', description: 'HR contracts with compliance checks' },
        { icon: '🔧', title: 'Custom Template', description: 'Build any contract type you need' }
    ];

    return (
        <section className="intake-forms section-lg hexagon-bg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Custom Intake Forms & Contract Creation</h2>
                    <p className="section-description">
                        Design dynamic forms tailored to business units, roles & contract types
                    </p>
                </div>
                <div className="intake-grid">
                    {forms.map((form, index) => (
                        <motion.div
                            key={index}
                            className="form-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="form-icon">{form.icon}</div>
                            <h4>{form.title}</h4>
                            <p>{form.description}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="intake-feature">
                    <p>
                        ✨ Fields automatically map to metadata • Workflows trigger based on inputs •
                        Full customization for your business needs
                    </p>
                </div>
            </div>
        </section>
    );
}
