import Navbar from "@/components/layout/Navbar";

const milestones = [
  { year: "2024", event: "Stanford Program on AI Safety", detail: "Deep dive into alignment techniques." },
  { year: "2023", event: "Foundation Model Atlas Launch", detail: "Open-source research tool for LLM analysis." },
  { year: "2022", event: "Google Startup School", detail: "Focus on AI product scalability." },
  { year: "2021", event: "Engineering Degree Completion", detail: "Foundational research in neural systems." },
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-16 text-center">Research Journey</h1>
        <div className="relative border-l border-white/10 ml-4 pl-8 space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
              <span className="text-accent font-mono font-bold text-lg">{m.year}</span>
              <h3 className="text-xl font-bold mt-1">{m.event}</h3>
              <p className="text-muted mt-2">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

