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
