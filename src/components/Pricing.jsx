import '../styles/Pricing.css';
import { motion } from 'framer-motion';

export default function Pricing() {
    const plans = [
        {
            name: 'Starter',
            price: '$49',
            period: '/month',
            description: 'Perfect for small teams getting started',
            features: [
                '✓ Up to 5 users',
                '✓ 100 contracts/month',
                '✓ Basic workflow builder',
                '✓ AI search & clause analysis',
                '✓ E-signature integration',
                '✓ 10 GB storage',
                '✓ Email support'
            ],
            cta: 'Start Free Trial',
            ctaClass: 'btn-outline'
        },
        {
            name: 'Growth',
            price: '$199',
            period: '/month',
            description: 'For growing teams with advanced needs',
            features: [
                '✓ Up to 25 users',
                '✓ Unlimited contracts',
                '✓ Advanced workflow builder',
                '✓ AI search & clause analysis',
                '✓ Custom intake forms',
                '✓ Analytics dashboard',
                '✓ 100 GB storage',
                '✓ Priority support',
                '✓ API access'
            ],
            cta: 'Start Free Trial',
            ctaClass: 'btn-primary',
            featured: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For large organizations with custom requirements',
            features: [
                '✓ Unlimited users',
                '✓ Unlimited contracts',
                '✓ Advanced workflow builder',
                '✓ AI search & clause analysis',
                '✓ Custom integrations',
                '✓ Dedicated account manager',
                '✓ Unlimited storage',
                '✓ 24/7 support',
                '✓ SLA guarantees',
                '✓ Custom training'
            ],
            cta: 'Contact Sales',
            ctaClass: 'btn-secondary'
        }
    ];

    return (
        <section id="pricing" className="pricing section-lg hexagon-bg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-description">
                        Choose the plan that fits your team size and needs
                    </p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {plan.featured && <div className="popular-badge">Most Popular</div>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="price-amount">{plan.price}</span>
                                {plan.period && <span className="price-period">{plan.period}</span>}
                            </div>
                            <p className="plan-description">{plan.description}</p>
                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <a href={plan.featured ? "#trial" : plan.name === 'Enterprise' ? "#demo" : "#trial"} className={`btn ${plan.ctaClass}`}>
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
