import '../styles/IntakeForms.css';
import { motion } from 'framer-motion';
import { Handshake, Building2, Briefcase, ClipboardList, Users, Wrench } from 'lucide-react';

export default function IntakeForms() {
    const forms = [
        { icon: <Handshake size={32} />, title: 'NDA Request', description: 'Quick mutual or one-way NDA generation' },
        { icon: <Building2 size={32} />, title: 'Vendor Onboarding', description: 'Comprehensive vendor agreement workflow' },
        { icon: <Briefcase size={32} />, title: 'Sales Contract', description: 'Customer agreements with approval routing' },
        { icon: <ClipboardList size={32} />, title: 'Work Order', description: 'SOW and project-based contracts' },
        { icon: <Users size={32} />, title: 'Employment Agreement', description: 'HR contracts with compliance checks' },
        { icon: <Wrench size={32} />, title: 'Custom Template', description: 'Build any contract type you need' }
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
            </div>
        </section>
    );
}
