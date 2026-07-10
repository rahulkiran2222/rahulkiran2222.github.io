import Navbar from "@/components/layout/Navbar";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-12 text-center">Technical Writing</h1>
        <div className="space-y-12">
          {[1, 2, 3].map((_, i) => (
            <article key={i} className="group cursor-pointer">
              <p className="text-accent font-mono text-xs mb-2">October 24, 2023 • 8 min read</p>
              <h2 className="text-2xl font-bold mb-3 group-hover:underline underline-offset-4 decoration-accent">
                The Future of Foundation Model Interoperability
              </h2>
              <p className="text-muted leading-relaxed">
                Exploring how standardizing tokenization protocols can reduce the delta in model grounding deficits across different architectures...
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
