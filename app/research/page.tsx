import Navbar from "@/components/layout/Navbar";

const pillars = [
  {
    title: "Foundation Models",
    focus: "Scaling Laws & Architectural Optimization",
    description: "Investigating the limits of LLMs, context window expansion, and state-space models like Mamba.",
  },
  {
    title: "AI Safety",
    focus: "Adversarial Robustness & Alignment",
    description: "Developing benchmarks for prompt injection and mechanistic interpretability of model weights.",
  },
  {
    title: "Responsible AI",
    focus: "Bias Detection & Ethical Frameworks",
    description: "Researching tokenizer-level bias and grounding deficits in multilingual models.",
  },
  {
    title: "Efficient AI Systems",
    focus: "Green Computing & Inference Optimization",
    description: "Optimizing prompt engineering (GreenPrompt) to reduce the carbon footprint of large-scale inference.",
  }
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-accent font-mono mb-4 text-sm tracking-widest uppercase">Research Pillars</h2>
        <h1 className="text-5xl font-heading font-bold mb-12">Core Research Areas</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/50 transition-all">
              <h3 className="text-2xl font-heading font-bold mb-2">{pillar.title}</h3>
              <p className="text-accent font-mono text-xs mb-4 uppercase">{pillar.focus}</p>
              <p className="text-muted leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
