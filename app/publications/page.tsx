import Navbar from "@/components/layout/Navbar";
import { FileText, ExternalLink, Quote } from "lucide-react";

const papers = [
  {
    year: "2024",
    title: "GreenPrompt: Carbon-Efficient Prompt Engineering for Large Language Models",
    authors: "Rahul Kiran, et al.",
    venue: "Preprint / Technical Report",
    links: { pdf: "#", doi: "#", bibtex: "#" },
    abstract: "This paper introduces a framework for measuring and reducing the energy consumption of LLM inference through optimized prompt structures."
  },
  {
    year: "2023",
    title: "Mechanistic Interpretability in Tokenizer Bias",
    authors: "Rahul Kiran",
    venue: "AI Safety Workshop",
    links: { pdf: "#", doi: "#", bibtex: "#" },
    abstract: "An investigation into how sub-word tokenization affects the representation of marginalized languages in foundation models."
  }
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-4">Publications</h1>
        <p className="text-muted mb-12 text-lg">Selected papers, preprints, and technical reports.</p>

        <div className="space-y-10">
          {papers.map((paper, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="text-accent font-mono text-sm">{paper.year} — {paper.venue}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 leading-tight">{paper.title}</h3>
                  <p className="text-slate-400 mb-4">{paper.authors}</p>
                  <p className="text-sm text-muted leading-relaxed mb-6 italic">"{paper.abstract}"</p>
                  
                  <div className="flex gap-4">
                    <a href={paper.links.pdf} className="flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                      <FileText size={16} /> PDF
                    </a>
                    <a href={paper.links.doi} className="flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                      <ExternalLink size={16} /> DOI
                    </a>
                    <button className="flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                      <Quote size={16} /> BibTeX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
