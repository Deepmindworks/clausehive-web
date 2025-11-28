import '../styles/WorkflowDemo.css';
import { motion } from 'framer-motion';
import { PlayCircle, GitBranch, CheckCircle, FileText, Send, Zap, GitMerge, Clock, Bell } from 'lucide-react';

export default function WorkflowDemo() {
  return (
    <section id="workflow" className="workflow-demo section-lg">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Visual Workflow Builder</h2>
          <p className="section-description">
            Build custom approval flows with parallel reviews and conditional logic—no code required
          </p>
        </div>

        <div className="workflow-canvas-wrapper">
          <div className="workflow-canvas">

            {/* Trigger Node */}
            <motion.div
              className="workflow-step step-trigger"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="step-header">
                <PlayCircle size={16} />
                <span>TRIGGER</span>
              </div>
              <div className="step-content">
                <h4 className="step-title">Contract Submitted</h4>
                <p className="step-description">New contract uploaded to system</p>
                <span className="step-badge">Automated</span>
              </div>
            </motion.div>

            {/* Connector with arrow */}
            <svg className="connector-svg" width="2" height="40" viewBox="0 0 2 40">
              <line x1="1" y1="0" x2="1" y2="32" stroke="#9CA3AF" strokeWidth="2" />
              <polygon points="1,40 6,30 -4,30" fill="#9CA3AF" />
            </svg>

            {/* Action Node */}
            <motion.div
              className="workflow-step step-action"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="step-header">
                <FileText size={16} />
                <span>DO THIS</span>
              </div>
              <div className="step-content">
                <h4 className="step-title">AI Clause Analysis</h4>
                <p className="step-description">Extract key terms and detect risks</p>
                <span className="step-badge">AI-Powered</span>
              </div>
            </motion.div>

            {/* Connector with arrow */}
            <svg className="connector-svg" width="2" height="40" viewBox="0 0 2 40">
              <line x1="1" y1="0" x2="1" y2="32" stroke="#9CA3AF" strokeWidth="2" />
              <polygon points="1,40 6,30 -4,30" fill="#9CA3AF" />
            </svg>

            {/* Conditional Node */}
            <motion.div
              className="workflow-step step-conditional"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="step-header">
                <GitBranch size={16} />
                <span>IF / ELSE</span>
              </div>
              <div className="step-content">
                <h4 className="step-title">Risk Assessment</h4>
                <p className="step-description">Check if contract value exceeds threshold</p>
              </div>
            </motion.div>

            {/* Branch Split with SVG */}
            <svg className="branch-svg" width="100%" height="80" viewBox="0 0 600 80" preserveAspectRatio="xMidYMid meet">
              {/* Center line down */}
              <line x1="300" y1="0" x2="300" y2="20" stroke="#9CA3AF" strokeWidth="2" />
              {/* Arrow down */}
              <polygon points="300,28 305,18 295,18" fill="#9CA3AF" />
              {/* Left curve */}
              <path d="M 300 30 Q 300 40, 150 60 L 150 80" stroke="#D1D5DB" strokeWidth="2" fill="none" />
              {/* Right curve */}
              <path d="M 300 30 Q 300 40, 450 60 L 450 80" stroke="#D1D5DB" strokeWidth="2" fill="none" />
            </svg>

            {/* Parallel Branches */}
            <div className="parallel-branches">
              {/* High Value Path */}
              <motion.div
                className="branch-path"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="branch-label">Value &gt; $50K</div>
                <div className="workflow-step step-action-alt">
                  <div className="step-header">
                    <CheckCircle size={16} />
                    <span>DO THIS</span>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">Executive Approval</h4>
                    <p className="step-description">Route to CFO + Legal Head</p>
                  </div>
                </div>
              </motion.div>

              {/* Standard Path */}
              <motion.div
                className="branch-path"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="branch-label">Value ≤ $50K</div>
                <div className="workflow-step step-action">
                  <div className="step-header">
                    <CheckCircle size={16} />
                    <span>DO THIS</span>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">Manager Approval</h4>
                    <p className="step-description">Route to department manager</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Branch Merge with SVG */}
            <svg className="merge-svg" width="100%" height="80" viewBox="0 0 600 80" preserveAspectRatio="xMidYMid meet">
              {/* Left curve up */}
              <path d="M 150 0 L 150 20 Q 150 40, 300 50 L 300 72" stroke="#D1D5DB" strokeWidth="2" fill="none" />
              {/* Right curve up */}
              <path d="M 450 0 L 450 20 Q 450 40, 300 50" stroke="#D1D5DB" strokeWidth="2" fill="none" />
              {/* Arrow down */}
              <polygon points="300,80 305,70 295,70" fill="#9CA3AF" />
            </svg>

            {/* Final Action */}
            <motion.div
              className="workflow-step step-success"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="step-header">
                <Send size={16} />
                <span>COMPLETE</span>
              </div>
              <div className="step-content">
                <h4 className="step-title">Send for E-Signature</h4>
                <p className="step-description">Notify all parties and initiate signing</p>
                <span className="step-badge">Automated</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Features Grid */}
        <div className="workflow-features">
          <div className="workflow-feature">
            <div className="feature-icon"><Zap size={24} /></div>
            <div className="feature-text">
              <h5>Parallel Approvals</h5>
              <p>Run multiple approvals simultaneously</p>
            </div>
          </div>
          <div className="workflow-feature">
            <div className="feature-icon"><GitMerge size={24} /></div>
            <div className="feature-text">
              <h5>Conditional Logic</h5>
              <p>Smart routing based on contract data</p>
            </div>
          </div>
          <div className="workflow-feature">
            <div className="feature-icon"><Clock size={24} /></div>
            <div className="feature-text">
              <h5>Auto-Escalation</h5>
              <p>Escalate overdue approvals automatically</p>
            </div>
          </div>
          <div className="workflow-feature">
            <div className="feature-icon"><Bell size={24} /></div>
            <div className="feature-text">
              <h5>Smart Notifications</h5>
              <p>Context-aware alerts via email & Slack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
