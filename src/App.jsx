import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import WorkflowDemo from './components/WorkflowDemo';
import AISearch from './components/AISearch';
import IntakeForms from './components/IntakeForms';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <ProblemSolution />
        <Features />
        <WorkflowDemo />
        <AISearch />
        <IntakeForms />
        <UseCases />
        {/* <Pricing /> */}
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
