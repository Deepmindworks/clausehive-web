#!/bin/bash

# Create all remaining component files

# WorkflowDemo
cat > src/components/WorkflowDemo.jsx << 'EOF'
import '../styles/WorkflowDemo.css';

export default function WorkflowDemo() {
  return (
    <section id="workflow" className="workflow-demo section-lg hexagon-bg">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visual Workflow Builder</h2>
          <p className="section-description">
            Build custom approval flows, parallel reviews, automated escalations—no code required
          </p>
        </div>
        <div className="workflow-mockup">
          <div className="workflow-canvas">
            <div className="workflow-node node-start">
              <div className="node-icon">🚀</div>
              <div className="node-label">Contract Request</div>
            </div>
            <div className="workflow-connector"></div>
            <div className="workflow-node node-review">
              <div className="node-icon">👁️</div>
              <div className="node-label">Legal Review</div>
            </div>
            <div className="workflow-split">
              <div className="split-line"></div>
              <div className="split-line"></div>
            </div>
            <div className="parallel-nodes">
              <div className="workflow-node node-approval">
                <div className="node-icon">✅</div>
                <div className="node-label">Finance Approval</div>
              </div>
              <div className="workflow-node node-approval">
                <div className="node-icon">✅</div>
                <div className="node-label">Manager Approval</div>
              </div>
            </div>
            <div className="workflow-merge"></div>
            <div className="workflow-connector"></div>
            <div className="workflow-node node-signature">
              <div className="node-icon">✍️</div>
              <div className="node-label">E-Signature</div>
            </div>
            <div className="workflow-connector"></div>
            <div className="workflow-node node-complete">
              <div className="node-icon">🎉</div>
              <div className="node-label">Complete</div>
            </div>
          </div>
          <div className="workflow-features">
            <div className="workflow-feature">
              <span className="feature-icon">⚡</span>
              <span>Parallel approvals</span>
            </div>
            <div className="workflow-feature">
              <span className="feature-icon">🔀</span>
              <span>Conditional logic</span>
            </div>
            <div className="workflow-feature">
              <span className="feature-icon">⏰</span>
              <span>Auto-escalation</span>
            </div>
            <div className="workflow-feature">
              <span className="feature-icon">🔔</span>
              <span>Smart notifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/styles/WorkflowDemo.css << 'EOF'
.workflow-demo {
  background: var(--color-light-bg);
}

.workflow-mockup {
  background: white;
  border-radius: var(--radius-2xl);
  padding: var(--space-12);
  box-shadow: var(--shadow-xl);
}

.workflow-canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-8);
  background: var(--color-grey-50);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-8);
}

.workflow-node {
  background: white;
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 200px;
  transition: all var(--transition-base);
}

.workflow-node:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.node-start { border-left: 4px solid var(--color-teal); }
.node-review { border-left: 4px solid var(--color-info); }
.node-approval { border-left: 4px solid var(--color-honey-gold); }
.node-signature { border-left: 4px solid var(--color-teal-dark); }
.node-complete { border-left: 4px solid var(--color-success); }

.node-icon { font-size: var(--text-2xl); }
.node-label { font-weight: 600; color: var(--color-deep-navy); }

.workflow-connector {
  width: 3px;
  height: 30px;
  background: linear-gradient(180deg, var(--color-teal) 0%, var(--color-honey-gold) 100%);
  border-radius: 2px;
}

.workflow-split {
  display: flex;
  gap: 100px;
}

.split-line {
  width: 3px;
  height: 30px;
  background: var(--color-honey-gold);
}

.parallel-nodes {
  display: flex;
  gap: var(--space-8);
}

.workflow-merge {
  width: 3px;
  height: 30px;
  background: var(--color-honey-gold);
}

.workflow-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.workflow-feature {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-grey-50);
  border-radius: var(--radius-md);
  font-weight: 500;
  color: var(--color-grey-700);
}

.feature-icon { font-size: var(--text-xl); }

@media (max-width: 768px) {
  .workflow-features { grid-template-columns: repeat(2, 1fr); }
  .parallel-nodes { flex-direction: column; }
  .workflow-split { gap: 0; }
}
EOF

echo "Created WorkflowDemo component"
