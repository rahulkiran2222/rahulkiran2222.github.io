import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="sticky top-32">
            <div className="w-full aspect-square rounded-2xl bg-slate-800 border border-white/10 overflow-hidden mb-6">
              {/* Placeholder for your professional photo */}
              <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs text-center p-4">
                [ Professional Photo ]
              </div>
            </div>
            <h2 className="text-xl font-bold font-heading">Rahul Kiran</h2>
            <p className="text-muted text-sm uppercase tracking-widest font-mono mt-1">AI Researcher</p>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-heading font-bold mb-6 text-accent">The Mission</h1>
              <p className="text-slate-300 leading-relaxed text-lg">
                I am a researcher and engineer focused on the intersection of <strong>Foundation Models</strong> and <strong>AI Safety</strong>. 
                My goal is to build AI systems that are not just powerful, but interpretable, efficient, and ethically aligned.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading">Research Interests</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Mechanistic Interpretability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Scaling Laws
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Multimodal Alignment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Efficient Fine-tuning
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="text-lg font-bold mb-2">Current Status</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Currently focusing on the <strong>Foundation Model Atlas</strong>, a tool designed to map 
                emergent behaviors in large-scale transformers. I am open to PhD opportunities and 
                research collaborations in the AI Safety space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
