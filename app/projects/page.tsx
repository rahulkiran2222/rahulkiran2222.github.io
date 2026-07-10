import Navbar from "@/components/layout/Navbar";

const projects = [
  { name: "Foundation Model Atlas", status: "Active", link: "#" },
  { name: "Prompt Injection Lab", status: "Research", link: "#" },
  { name: "GreenPrompt", status: "Published", link: "#" },
  { name: "Hallucination Calibration", status: "WIP", link: "#" },
  { name: "Tokenizer Bias Benchmark", status: "Published", link: "#" },
  { name: "LLM Grounding Deficit", status: "Active", link: "#" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-12">Projects</h1>
        <div className="grid gap-4">
          {projects.map((project, i) => (
            <div key={i} className="flex items-center justify-between p-6 rounded-xl bg-card border border-white/5 hover:bg-white/5 transition-all group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.name}</h3>
                <span className="text-xs font-mono text-muted">{project.status}</span>
              </div>
              <a href={project.link} className="text-sm border border-white/10 px-4 py-2 rounded-full hover:bg-white text-black bg-slate-200 font-bold transition-all">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
